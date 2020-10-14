import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import router from './router.js';

const app = express();

// Connect to DB
mongoose.connect('mongodb+srv://sabilanur123:sabilanur123@digitalent.nwm7y.mongodb.net/jadwalin?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
,() => {
  console.log('Connect to database success');
});

//MiddLewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.get('/', (req, res) => {
    res.json({
        message: 'success',
    });
})

app.use('/api', router);

app.listen('3000', () => {
    console.log('App Listens to port 3000');
});