import express from 'express';
import { PORT, NODE_ENV } from './config/.env.js';

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from Express in ${NODE_ENV} mode`);
});

app.listen(PORT || 3000, () => {
  console.log(`🚀 Server running at http://localhost:${PORT || 3000} in ${NODE_ENV} mode`);
});
