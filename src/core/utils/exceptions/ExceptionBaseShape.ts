export type isFn<T> = (error: unknown) => error is T;

export abstract class ExceptionBaseShape {
  static is: isFn<ExceptionBaseShape> = (error): error is ExceptionBaseShape => {
    throw new Error('Classe sem implementação');
  };
}
