import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';

// ========= Import routes ==========
// import authRouter from './routes/auth/auth-router.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// const corsOptions = {
//   origin: 'https://psychabiliti.com',
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions)); // for production
app.use(cors()); // for develop
app.use(express.json());
app.use(logger(formatsLogger));

// ========= Routes Path ===========
// app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
