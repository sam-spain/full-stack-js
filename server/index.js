import Express from 'express';
import Mongoose from 'mongoose';
import config from './config';
import v1Router from './routes';

Mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const app = Express()
app.use(v1Router)
app.listen(3000, () => {
    console.log(`connected to DB: ${config.databaseUrl}`);
})