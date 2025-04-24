import { Redis } from 'ioredis';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

let redis: Redis | null = null;

try {
  if (process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 1,
      retryStrategy: (times) => {
        if (process.env.NODE_ENV === 'production') {
          return Math.min(times * 50, 2000);
        }
        return null;
      }
    });
  }
} catch (e) {
  console.error('Failed to connect to Redis', e);
}

export async function getCachedPosts(): Promise<Post[] | null> {
  if (!redis) {
    return null;
  }

  try {
    const cachedPosts = await redis.get('posts');
    if (cachedPosts) {
      return JSON.parse(cachedPosts);
    }
  } catch (e) {
    console.error('Failed to get cached posts', e);
  }
  return null;
}

export async function cachePosts(posts: Post[]): Promise<void> {
  if (!redis) {
    return;
  }

  try {
    await redis.set('posts', JSON.stringify(posts), 'EX', 60); // 60 seconds TTL
  } catch (e) {
    console.error('Failed to cache posts', e);
  }
}

export default redis; 