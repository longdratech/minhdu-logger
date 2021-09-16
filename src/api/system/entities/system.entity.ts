import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { APP_NAME } from 'src/core/enum/app-name.enum';

export type SystemDocument = System & Document;

@Schema()
export class System {
  @Prop()
  appName: APP_NAME;0

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);
