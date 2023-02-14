import jwt from "jsonwebtoken";
/**
 * 
 this module contains an authorize function dedicated to authorizing jwts
 the authorize function should be called as a middleware before every request on the models
 */

const authorize = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id; //get id from decyphered token and add to req object
    } else {
      return res.status(500).json("invalid access token");
    }
    next();
  } catch (error) {
    next(error);
  }
};
export default authorize;
