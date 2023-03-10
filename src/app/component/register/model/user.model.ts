import { Address } from "./address.model";

export interface User{
  "id"?:string,
  "fullName"?:string,
  "userName"?:string,
  "plainTextPassword"?:string,
  "email"?:string,
  "mobileNo"?:string,
  "role"?:string,
  "dateOfBirth"?:Date,
  "gender"?:string,
  "password"?:string,
  "address"?:Address
}
