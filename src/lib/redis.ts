import { Redis } from 'ioredis';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export async function getCachedPosts(): Promise<Post[] | null> {
  const cachedPosts = await redis.get('posts');
  if (cachedPosts) {
    return JSON.parse(cachedPosts);
  }
  return null;
}

export async function cachePosts(posts: Post[]) {
  await redis.set('posts', JSON.stringify(posts), 'EX', 60); // 60 seconds TTL
}

export default redis; 