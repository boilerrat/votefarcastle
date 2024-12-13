/** @jsxImportSource frog/jsx */
import { Button, Frog } from 'frog';
import { handle } from 'frog/next';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';

const app = new Frog({
  basePath: '/api',
  title: 'Test Buttons',
});

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '24px', color: 'white' }}>
        <p>Test Buttons</p>
      </div>
    ),
    intents: [
      <Button value="test1">Test Button 1</Button>,
      <Button value="test2">Test Button 2</Button>,
    ],
  });
});

// Add devtools for development
devtools(app, { serveStatic });

// Export handlers for Next.js
export const GET = handle(app);
export const POST = handle(app);
