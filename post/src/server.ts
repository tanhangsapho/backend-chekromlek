import path from "path";
import fs from "fs";
import { run } from "./utils/server";

// READ FILE JWT PUBLIC KEY FIRST
export const publicKey = fs.readFileSync(
  path.join(__dirname, "../private_key.pem"),
  "utf-8"
);

run();
