import Link from 'next/link';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <article className="p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 line-clamp-3">{body}</p>
      </article>
    </Link>
  );
} 