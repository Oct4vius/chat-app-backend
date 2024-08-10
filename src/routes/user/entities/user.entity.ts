import { Prop, Schema } from "@nestjs/mongoose";
import { v4 as uuid } from 'uuid'

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class User {

    @Prop({
        type: String,
        unique: true,
        default: () => uuid()
    })
    userId: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;


}
