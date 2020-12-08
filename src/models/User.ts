import { Schema, model, Document, Model } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  phoneNumber: { type: String, default: null },
  uid: { type: String, required: true },
});

interface UserDocument extends Document {
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  uid: string;
}

interface UserModel extends Model<UserDocument> {}

export const User = model<UserDocument, UserModel>("User", UserSchema);
