import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  picture: String,
  stripe_account_id: '',
  stripe_session: {}
});

export default mongoose.model("User", userSchema);
