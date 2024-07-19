import { IsEmail, MinLength } from "class-validator";


export class CreateUserDTO {

    @MinLength(1)
    firstName: string;

    @MinLength(1)
    lastName: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

}