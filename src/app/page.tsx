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
  const cachedPosts = await getCachedPosts();
  if (cachedPosts) {
    return cachedPosts;
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  await cachePosts(posts);
  return posts;
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
