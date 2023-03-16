import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Trust App Engine proxy for user IP address connections.
app.set('trust proxy', true);
const corsOptions = {
  origin: ['https://jrchan.ca', 'http://localhost:3000']
};
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});