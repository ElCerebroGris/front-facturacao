export class Utilizador {
  id!: string;
  store_name!: string;
  email!: string;
  url!: string;
  password!: string;
  isActivo!: boolean;
  frame_token!: string;
  prd_frame_token!: string;
  token!: string;
  tipo_user: number = 0
  email_confirmed!: boolean
}
