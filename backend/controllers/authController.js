import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { seedTopicsForUser }from '../utils/seedTopics.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    let user = await User.findOne({ email: email });
    if (!user) {
      const hashed = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashed });
      await user.save();

      await seedTopicsForUser(user.userid);
    } else {
      const ok = await bcrypt.compare(password, user.password);
      if (!ok) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    }

     const token = jwt.sign(
      { id: user.userid, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        userId: user.userid, 
        email: user.email,
      },
    });
  } catch (e) {
    if (e.name === "ValidationError") {
      // extract first validation error message
      const firstError = Object.values(e.errors)[0].message;
      return res.status(400).json({ message: firstError });
    }
  }
};


