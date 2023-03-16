import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Trust App Engine proxy for user IP address connections.
app.set('trust proxy', true);

// Specify frontend origin access
const corsOptions: CorsOptions = {
  origin: ['https://jrchan.ca', 'http://localhost:3000']
};
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  const message = {text: 'Hello, World!'};
  res.json(message);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});