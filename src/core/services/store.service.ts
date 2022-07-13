/* eslint-disable @typescript-eslint/no-empty-function */
import store from "@/core/store";
import { StoreCollection } from "@/shared/constants/store.collection";

export class StoreService {
  private static _instance: StoreService | null = null;

  private constructor() {}

  public static get instance(): StoreService {
    if (this._instance === null) {
      this._instance = new StoreService();
    }

    return this._instance;
  }

  public commit<T>(command: StoreCollection, data: T): void {
    return store.commit(command, data);
  }
}
