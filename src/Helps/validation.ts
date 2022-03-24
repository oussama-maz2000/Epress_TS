import joi from "joi";

export const signVerification = async (data: object) => {
  const schema = joi.object({
    username: joi.string().min(3).max(20),
    email: joi.string().email(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};

export const loginVerification = async (data: object) => {
  const schema = joi.object({
    email: joi.string().email(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};
