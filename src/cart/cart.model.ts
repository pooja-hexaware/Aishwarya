import { Item } from './item.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type CartModel = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Restaurant' })
  store_id: string;

  @Prop()
  items: Item[];

  @Prop()
  totalPrice: number; 
}

export const CartSchema = SchemaFactory.createForClass(Cart);