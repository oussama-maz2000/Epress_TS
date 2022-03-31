import * as bcrypt from "bcrypt";

export async function hashing_password(password: string) {
  let salt: any = await bcrypt.genSalt(10);
  let hash = bcrypt.hash(password, salt);
  return hash;
}

export function compare(origin_password: string, input_password: string) {
  const cmp = bcrypt.compare(
    input_password,
    origin_password,
    (err: any, res: any) => {
      if (!res) return "invalid password";
    }
  );
  return cmp;
}
