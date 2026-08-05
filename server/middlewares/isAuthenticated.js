import jwt from "jsonwebtoken";

// Verify JWT and protect authenticated routes
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Please login to access this resource.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded.userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid token.",
      });
    }

    req.id = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token.",
    });
  }
};

export default isAuthenticated;
