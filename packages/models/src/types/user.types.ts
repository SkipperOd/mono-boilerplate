export interface IUser {
  firstName: string;
}

export interface IUserCreateDto extends IUser {}

export interface IUserUpdateDro extends IUserCreateDto {}
