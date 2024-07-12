import { scryptSync, timingSafeEqual } from "crypto";

function validUser(password, user) {
  const hashDigited = scryptSync(password, user.salpass, 64);
  const hashUser = Buffer.from(user.password, "hex");
  const hashValid = timingSafeEqual(hashDigited, hashUser);
  return hashValid;
}

export default validUser;
