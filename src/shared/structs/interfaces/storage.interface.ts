export interface IStorage {
  fetch<T>(tokenName: string): T | null;
  store<T>(tokenName: string, tokenValue: T): void;
  delete(tokenName: string): void;
  clear(): void;
}
