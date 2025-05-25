import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;

// This middleware checks for a JWT token in the Authorization header of incoming requests.
// If the token is present, it verifies the token using the secret key defined in the environment variables.
