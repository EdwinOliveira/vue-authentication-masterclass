import { TokenCollection } from "@/shared/constants/token.collection";
import { IStorage } from "@/shared/structs/interfaces/storage.interface";

/* eslint-disable @typescript-eslint/no-empty-function */
export class LocalStorage implements IStorage {
  private static _instance: LocalStorage | null = null;

  private constructor() {}

  public static get instance(): LocalStorage {
    if (this._instance === null) {
      this._instance = new LocalStorage();
    }

    return this._instance;
  }

  public fetch<T>(tokenName: TokenCollection): T | null {
    const token = localStorage.getItem(tokenName);

    return token === null ? null : JSON.parse(token);
  }

  public store<T>(tokenName: TokenCollection, tokenValue: T): void {
    return localStorage.setItem(tokenName, JSON.stringify(tokenValue));
  }

  public delete(tokenName: TokenCollection): void {
    return localStorage.removeItem(tokenName);
  }

  public clear(): void {
    return localStorage.clear();
  }
}
