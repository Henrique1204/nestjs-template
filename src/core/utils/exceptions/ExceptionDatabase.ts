import { ExceptionBaseShape, isFn } from './ExceptionBaseShape';

const DEFAULT_MESSAGE = 'Erro no banco de dados.';

export class ExceptionDatabase extends ExceptionBaseShape {
  constructor(public message = DEFAULT_MESSAGE) {
    super();
  }

  static override is: isFn<ExceptionDatabase> = (error) => {
    return error instanceof ExceptionDatabase;
  };
}
