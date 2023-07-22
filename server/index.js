import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import postsRoute from './routes/posts.js';
import adminRoute from './routes/admin.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

/* ROUTES */
app.get('/', (req, res) => {
  res.send('Welcome to the Main Route!');
});

app.use('/posts', postsRoute);
app.use('/admin', adminRoute);

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose
  .connect(
    `${process.env.MONGODB_CONNECTION_URL}`,
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
