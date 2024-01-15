export type JsonValue = boolean | number | string | null | JsonList | JsonMap;
export interface JsonList extends Array<JsonValue> {}

export interface JsonMap {
  [key: string]: JsonValue;
  [index: number]: JsonValue;
}
