import { Request, Response } from 'express';
import bookServices from '../services/bookServices';

const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookServices.get();

    res.json({
      postMessage: 'success',
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      postMessage: 'internal server error',
    });
  }
};

export { getBooks };
