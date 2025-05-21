import { ExceptionAPI, ExceptionDatabase } from '@/core/utils/exceptions';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException ? exception.message : 'Erro interno do servidor';

    const defaultErrorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: message,
      success: false,
    };

    if (ExceptionAPI.is(exception)) {
      const { code, message } = exception;

      return response.status(code).send({ ...defaultErrorResponse, statusCode: code, message });
    }

    if (ExceptionDatabase.is(exception)) {
      const { message } = exception;
      const code = 502;

      return response.status(code).send({ ...defaultErrorResponse, statusCode: code, message });
    }

    response.status(status).json(defaultErrorResponse);
  }
}
