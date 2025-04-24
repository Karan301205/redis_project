import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPost(id: string): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to posts
      </Link>
      <article className="bg-gray-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-gray-300 leading-relaxed">{post.body}</p>
      </article>
    </div>
  );
} 