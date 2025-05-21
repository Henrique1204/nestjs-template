import { ExceptionBaseShape, isFn } from './ExceptionBaseShape';

export class ExceptionDTO extends ExceptionBaseShape {
  constructor(public message: string) {
    super();
  }

  static override is: isFn<ExceptionDTO> = (error): error is ExceptionDTO => {
    return error instanceof ExceptionDTO;
  };
}
