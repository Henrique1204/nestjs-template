import { Response } from 'express';

import { ExceptionAPI, ExceptionDatabase } from 'src/core/utils/exceptions';

export const requestErrorHandler = (error: any, res: Response) => {
  if (ExceptionAPI.is(error)) {
    const { code, message } = error;

    return res.status(code).send({ success: false, message });
  }

  if (ExceptionDatabase.is(error)) {
    const { message } = error;

    return res.status(500).send({ success: false, message });
  }

  res.status(500).send({ success: false, message: error?.error || error?.message });
};
