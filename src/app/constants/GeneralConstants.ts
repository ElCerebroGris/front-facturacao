export class GeneralConstants {

  static BASE_URL_GRELHA = 'https://uqualidadegrelha.df.co.ao/';
  //static BASE_URL_GRELHA = 'http://10.11.1.68:9802/';
  //static BASE_URL_GRELHA = 'http://localhost:4201/';
  static BASE_URL = 'https://uqualidade.df.co.ao/';
  //static BASE_URL = 'http://10.11.1.68:9801/';

  static ESTADO = {
      ATIVADO: { code: 1, info: 'Activo' },
      DESATIVADO: { code: 2, info: 'Desativado' },
      toArray: () => {
          return [
              GeneralConstants.ESTADO.ATIVADO,
              GeneralConstants.ESTADO.DESATIVADO
          ]
      },
      getInfo: (code: number) => {
          return GeneralConstants.ESTADO.toArray().filter(p => p.code == code).pop()!.info;
      }
  }

  static NIVEL_USUARIO = {
      ADMINISTRADOR: { code: 1, info: 'Administrador' },
      AUDITOR: { code: 2, info: 'AUDITOR' },
      GESTOR_CLIENTE: { code: 3, info: 'OPERADOR' },
      SUPERVISOR: { code: 4, info: 'SUPERVISOR' },
      FORMADOR: { code: 5, info: 'formador' },
      toArray: () => {
          return [
              GeneralConstants.NIVEL_USUARIO.ADMINISTRADOR,
              GeneralConstants.NIVEL_USUARIO.AUDITOR,
              GeneralConstants.NIVEL_USUARIO.GESTOR_CLIENTE,
              GeneralConstants.NIVEL_USUARIO.SUPERVISOR,
              GeneralConstants.NIVEL_USUARIO.FORMADOR
          ]
      },
      getInfo: (code: number) => {
          return GeneralConstants.NIVEL_USUARIO.toArray().filter(p => p.code == code).pop()!.info;
      }
  }

  static USER_AUTH = {
      TOKEN_KEY: 'factura_token',
      USERID_KEY: 'factura_user_id',
      USERNAME_KEY: 'factura_user_nome',
      USEREMAIL_KEY: 'factura_user_email',
      FRAMETOKEN_KEY: 'factura_frame_token',
      PRD_FRAMETOKEN_KEY: 'factura_prd_frame_token',
      TIPOUSER_KEY: 'factura_tipo_user',
      EMAIL_CONFIRMED_KEY: 'factura_email_confirmed'
  }
}
