import { randomBytes, scryptSync } from "crypto";

function createHash(body) {
  const pass = body["password"];
  const salPass = randomBytes(16).toString("hex");
  const hashPass = scryptSync(pass, salPass, 64).toString("hex");
  body["password"] = hashPass;
  body["salpass"] = salPass;
  return body;
}

export default createHash;
