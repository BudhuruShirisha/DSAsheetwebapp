import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
import validator from "validator";
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,  
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email address"
    }
  },
  password: { type: String, required: true },
  userid: { type: Number, unique: true }
}, { timestamps: true });

userSchema.plugin(AutoIncrement(mongoose), { inc_field: "userid" });

export default mongoose.model("User", userSchema);
