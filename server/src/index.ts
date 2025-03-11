import { env } from 'node:process';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { compress } from 'hono/compress';
import { secureHeaders } from 'hono/secure-headers';

const app = new Hono();
const PORT = Number(env.PORT) || 8787;

app.use(logger());
app.use(compress());
app.use(secureHeaders());

app.get('/api/test', (c) => {
  return c.json({
    message: 'Hello from Hono!',
    timestamp: new Date().toISOString(),
  })
});

app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
});

app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('An error occurred', 500)
});

serve({
  fetch: app.fetch,
  port: PORT,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
});

