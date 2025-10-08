import { Schema, model, Document, Types } from 'mongoose';

export interface IUser extends Document {
  username?: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  password?: string;
  roles: Types.ObjectId[];
  fullName?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      select: false,
    },
    roles: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true 
      }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full name
userSchema.virtual('fullName').get(function (this: IUser) {
  return `${this.firstName} ${this.lastName}`;
});

export default model<IUser>('User', userSchema);