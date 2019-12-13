import express from 'express';
const app = express();
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

import router from './routes';

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => console.log('Server started...'));

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(router);

app.listen(4000);