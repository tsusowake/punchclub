import { v4 as uuidv4 } from "uuid";

export function uuid(): string {
  const uuid = uuidv4();
  return uuid.replace(/-/g, "");
}
