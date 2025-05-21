import { ExceptionBaseShape, isFn } from './ExceptionBaseShape';

const messages = {
  400: 'Dados incompletos.',
  401: 'Token não informado.',
  403: 'Você não tem autorização necessária para continuar.',
  404: 'Dados não encontrados.',
  406: 'Dados inválidos.',
  409: 'Conflito ao realizar a ação.',
  422: 'Informações já existem no banco de dados.',
  426: 'Essa ação não pode ser concluída por esse method.',
  500: 'Erro dentro do servidor.',
  502: 'Erro ao salvar ou buscar dados.',
};

type Messages = typeof messages;
type APICode = keyof Messages;

export class ExceptionAPI extends ExceptionBaseShape {
  constructor(
    public code: APICode,
    public message = messages[code],
  ) {
    super();
  }

  static override is: isFn<ExceptionAPI> = (error): error is ExceptionAPI => {
    return error instanceof ExceptionAPI;
  };
}
