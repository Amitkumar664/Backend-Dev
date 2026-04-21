const speakeasy = require("speakeasy");

const secret = speakeasy.generateSecret();

const verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: "base32",
  token: userInputToken
});