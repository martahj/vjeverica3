const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// global.window = {
//   requestAnimationFrame:
// }

app.prepare()
.then(() => {
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  server.listen(7654, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:7654');
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
