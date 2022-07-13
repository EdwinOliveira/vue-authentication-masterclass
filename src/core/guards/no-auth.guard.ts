/* eslint-disable @typescript-eslint/no-empty-function */

import { ViewCollection } from "@/shared/constants/view.collection";
import { JWTService } from "../services/jwt.service";

export default class NotAuthGuard {
  private static _instance: NotAuthGuard | null = null;

  private constructor() {}

  public static get instance(): NotAuthGuard {
    if (this._instance === null) {
      this._instance = new NotAuthGuard();
    }

    return this._instance;
  }

  public checkNoAuth(): { path: string } | void {
    const isAccessTokenExpired = JWTService.instance.isAccessTokenExpired();

    if (isAccessTokenExpired === true) {
      const isRefreshTokenExpired = JWTService.instance.isRefreshTokenExpired();

      if (isRefreshTokenExpired === true) {
        return;
      }
    }

    return { path: ViewCollection.DASHBOARD };
  }
}
