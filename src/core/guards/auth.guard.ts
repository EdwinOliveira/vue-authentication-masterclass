/* eslint-disable @typescript-eslint/no-empty-function */

import { ViewCollection } from "@/shared/constants/view.collection";
import { JWTService } from "../services/jwt.service";

export default class AuthGuard {
  private static _instance: AuthGuard | null = null;

  private constructor() {}

  public static get instance(): AuthGuard {
    if (this._instance === null) {
      this._instance = new AuthGuard();
    }

    return this._instance;
  }

  public checkAuth(): { path: string } | void {
    const isAccessTokenExpired = JWTService.instance.isAccessTokenExpired();

    if (isAccessTokenExpired === true) {
      const isRefreshTokenExpired = JWTService.instance.isRefreshTokenExpired();

      if (isRefreshTokenExpired === true) {
        return { path: ViewCollection.SIGN_IN };
      }

      return JWTService.instance.refreshTokens();
    }
  }
}
