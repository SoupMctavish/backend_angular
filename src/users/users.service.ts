import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSecureServer } from 'http2';

@Injectable()
export class UsersService {

constructor(@InjectRepository(UserEntity) private rep:Repository<UserEntity>){
}

async getAllUsers(): Promise<UserEntity[]> {
    return await this.rep.find();
}

async getUser(_id:number): Promise<UserEntity[]>{
    return await this.rep.findByIds(
        [
            _id
        ]
    )
}


async updateUser(user:UserEntity){
    await this.rep.update({ id:user.id },user);
}


async createUser(user:UserEntity) {
    await this.rep.insert(user);
}


async deleteUser(user:UserEntity){
    await this.rep.delete(user);
}
}
