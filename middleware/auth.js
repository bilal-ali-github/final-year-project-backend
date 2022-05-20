import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    console.log(token);
    const isCustomAuth = token.length < 500;
    let decodeData;
    if (token && isCustomAuth) {
      decodeData = jwt.verify(token, secret);
      req.userId = decodeData?.id;
    }
  } catch (error) {
    res.status(401).json({ message: "Inavlid Token" });
    console.log(error);
  }
  next();
};

export default auth;
