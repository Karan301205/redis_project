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

## Local Development

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

## Deployment

### 1. Set up Redis

1. Sign up for a free account at [Upstash](https://upstash.com/)
2. Create a new Redis database
3. Copy your Redis URL from the database details

### 2. Deploy to Vercel

1. Push your code to GitHub:

```bash
git remote add origin https://github.com/yourusername/blog-viewer.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign up/login with your GitHub account
3. Click "New Project" and import your repository
4. Add the following environment variable:
   - Name: `REDIS_URL`
   - Value: Your Upstash Redis URL
5. Click "Deploy"

Your application will be deployed and you'll get a URL like: `https://your-app-name.vercel.app`

## Docker Setup (Optional)

If you prefer to use Docker for local development:

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
