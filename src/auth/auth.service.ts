import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { CreateUserDTO } from './dto/create.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    return {
      loginDto
    };
  }

  register(registerDto: CreateUserDTO){
    return{
      registerDto
    }
  }
}
