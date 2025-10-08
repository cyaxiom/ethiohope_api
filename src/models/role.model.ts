import { Schema, model, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const roleSchema = new Schema<IRole>(
  {
    name: { 
      type: String,
      required: true,
      unique: true,
      trim: true
      },
    description: { 
      type: String,
      default: '' 
    },
  },
  {
    timestamps: true,
  }
);

export default model<IRole>('Role', roleSchema);