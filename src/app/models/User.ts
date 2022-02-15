import { Address } from './Address';
import { Company } from './Company';

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  address: Address;
  role: Role;
  username: string;
  profilePhotoUrl: string;
  companies: Company[];
  gender: Gender;
}

export enum Role {
  staff = 'staff',
  student = 'student',
  manager = 'manager',
  admin = 'admin',
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}
