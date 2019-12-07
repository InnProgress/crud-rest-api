import express from 'express';
const app = express();
import mongoose from 'mongoose';
import 'dotenv/config';

import router from './routes';

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(router);

app.listen(3000);