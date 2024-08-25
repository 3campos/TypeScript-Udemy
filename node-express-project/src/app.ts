import express, {Request, Response, NextFunction} from 'express';
import { json } from 'body-parser'; 

import todoRoutes from './routes/todos'

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
res.status(500).json({message: err.message});
})

//the nextFunction is executed which will let the request continue its iteration to the next request in the queue

app.listen(3000);