import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'Menu' })
    item: string;

    @Prop()
    name: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    subTotalPrice: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);