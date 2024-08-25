import express, {Request, Response, NextFunction} from 'express';
import { json } from 'body-parser'; 

import todoRoutes from './routes/todos'

const app = express();

app.use(json());

// this json method parses bodies of incoming requests and extracts json data to populate the body key (see todos.ts) on the request object with the json data

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
res.status(500).json({message: err.message});
})

//the nextFunction is executed which will let the request continue its iteration to the next request in the queue

app.listen(3000);