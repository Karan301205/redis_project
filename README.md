# Modern Blog Viewer

A minimal and modern blog viewer built with Next.js, React, and Tailwind CSS. Features dark mode styling, Redis caching, and a clean, responsive design.

## Features

- Server-side rendering with Next.js App Router
- Redis caching with 60-second TTL
- Dark mode UI with smooth animations
- Responsive grid layout
- Dynamic post detail pages
- Clean and modern design

## Prerequisites

- Node.js 18+ and npm
- Redis server (local or remote)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/blog-viewer.git
cd blog-viewer
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Redis URL:

```
REDIS_URL=redis://localhost:6379
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Setup (Optional)

If you prefer to use Docker for Redis:

1. Start Redis container:

```bash
docker run --name redis -p 6379:6379 -d redis
```

2. Update your `.env.local` file to use the Docker Redis URL:

```
REDIS_URL=redis://localhost:6379
```

## Performance

The application uses Redis caching to improve performance:

- Without Redis: ~200-300ms response time
- With Redis: ~50-100ms response time

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ioredis](https://github.com/luin/ioredis)
- [Heroicons](https://heroicons.com/)

## License

MIT
