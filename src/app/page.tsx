import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import Footer from '@/components/Footer';
import { getCachedPosts, cachePosts } from '@/lib/redis';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts() {
  try {
    // Try to get cached posts
    const cachedPosts = await getCachedPosts();
    if (cachedPosts) {
      return cachedPosts;
    }

    // If no cached posts, fetch from API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();
    
    // Try to cache the posts (this will silently fail if Redis is not available)
    await cachePosts(posts);
    
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array instead of throwing
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
