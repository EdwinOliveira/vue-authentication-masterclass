export class UserEntity {
  public constructor(
    private readonly _uuid: string,
    private readonly _email: string,
    private readonly _password: string
  ) {}

  public get uuid(): string {
    return this._uuid;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }
}
