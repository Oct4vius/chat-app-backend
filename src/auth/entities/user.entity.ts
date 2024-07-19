import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class User {

    _id: string;

    @Prop({ required: true })
    firstName: string;
    
    @Prop({ required: true })
    lastName: string;
    
    @Prop({ required: true, unique: true })
    email: string;
    
    @Prop({ required: true, minlength: 6 })
    password: string;

}
