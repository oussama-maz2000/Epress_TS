import bcrypt from "bcrypt";

export async function hashing_password(password: string) {
  let salt: any = await bcrypt.genSalt(10);
  let hash = bcrypt.hash(password, salt);
  return hash;
}
