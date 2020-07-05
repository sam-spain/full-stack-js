import Express from 'express';
import Mongoose from 'mongoose';
import config from './config';

Mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const app = Express()

app.listen(3000, () => {
    console.log(`connected to DB: ${config.databaseUrl}`);
})