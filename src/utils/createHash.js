import { randomBytes, scryptSync } from "crypto";

function createHash(password) {
  const salPass = randomBytes(16).toString("hex");
  const hashPass = scryptSync(password, salPass, 64).toString("hex");
  return { password: hashPass, salpass: salPass };
}

export default createHash;
