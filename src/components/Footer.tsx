export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400">
      <p>
        Built by{' '}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Your Name
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/yourusername/blog-viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
} 