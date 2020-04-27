import express, { Request, Response } from 'express';
import httpStatus from 'http-status';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).json({ text: 'hi!' });
});

export { router };
