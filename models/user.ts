export interface IUser {}
export interface LoginUserProps {
  email: string;
  password: string;
  user_type: "root";
  ip_address: string;
}
export interface CreateUserAccountProps {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: "root";
  ip_address: string;
}
