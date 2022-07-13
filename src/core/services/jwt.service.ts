/* eslint-disable @typescript-eslint/no-empty-function */
import { TokenCollection } from "@/shared/constants/token.collection";
import { IStorage } from "@/shared/structs/interfaces/storage.interface";
import { TokenModel } from "@/shared/structs/models/token.model";
import { LocalStorage } from "./local-storage.service";

export class JWTService {
  private static _instance: JWTService | null = null;

  private readonly storageService: IStorage = LocalStorage.instance;

  private constructor() {}

  public static get instance(): JWTService {
    if (this._instance === null) {
      this._instance = new JWTService();
    }

    return this._instance;
  }

  private sign(): TokenModel {
    const accessToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTc2OTY5MDgsImV4cCI6MTY5MTkxMTMwOCwiYXVkIjoidHR2MUB0dHYxLmNvbSIsInN1YiI6IjFhc2RhczEyM2Rhc2RhY2FzZDEyMzEyZGFzZCJ9.MpSP1SwaATehDFWE5P4SPMAYCGl3VKnwL6QVuiW2X6o";

    const refreshToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTc2OTY5MDgsImV4cCI6MTY5NzE4MTcwOCwiYXVkIjoidHR2MUB0dHYxLmNvbSIsInN1YiI6IjFhc2RhczEyM2Rhc2RhY2FzZDEyMzEyZGFzZCJ9.zQRp8-NTRz0ducosKjCXuFJzGcechVhhvlrPcgw95yo";

    return new TokenModel(accessToken, refreshToken);
  }

  private verifyToken(token: string): boolean {
    const parsedToken = JSON.parse(atob(token.split(".")[1]));

    const isTokenExpired =
      Math.floor(new Date().getTime() / 1000) >= parsedToken.exp;

    return isTokenExpired;
  }

  public isAccessTokenExpired(): boolean {
    const accessToken = LocalStorage.instance.fetch<string>(
      TokenCollection.ACCESS_TOKEN
    );

    if (accessToken === null) {
      return true;
    }

    return this.verifyToken(accessToken);
  }

  public isRefreshTokenExpired(): boolean {
    const refreshToken = LocalStorage.instance.fetch<string>(
      TokenCollection.REFRESH_TOKEN
    );

    if (refreshToken === null) {
      return true;
    }

    return this.verifyToken(refreshToken);
  }

  public refreshTokens(): void {
    const tokenModel = this.sign();

    this.storageService.store(
      TokenCollection.ACCESS_TOKEN,
      tokenModel.accessToken
    );

    this.storageService.store(
      TokenCollection.REFRESH_TOKEN,
      tokenModel.refreshToken
    );
  }
}
