import { Component } from '@nestjs/common';
import { Pool } from '../dao/pool';
import { User } from '../entitys/index';
import { Validate, decorateArmour } from '../utils/enumerables';

@Component()
export class UserService {

  private db: any;
  private userRepository: any;

  /**
   * 获取所有用户
   */
  async getAllUsers() {
    this.db = await Pool.getInstance();
    this.userRepository = this.db.getRepository(User);
    const users = await this.userRepository.find();
    return users;
  }

  /**
   * 根据用户id获取用户
   * @param id 用户id
   */
  async getUser(id) {
    this.db = await Pool.getInstance();
    this.userRepository = this.db.getRepository(User);
    if (Validate.id(id) < 0) return {};
    const u = await this.userRepository.findOne({ id });
    return u;
  }

  /**
   * 用户注册
   * @param params 用户注册信息
   */
  async create(params: any) {
    this.db = await Pool.getInstance();
    this.userRepository = this.db.getRepository(User);
    const userInfo = this.userRepository.create({
      name: params.name,
      sex: params.sex,
      avater: params.avater,
      create_time: new Date(),
      update_time: new Date(),
    });
    return this.userRepository.save(userInfo);
  }

  /**
   * 用户更改资料
   * @param params 用户修改信息
   */
  async update(params: any) {
    this.db = await Pool.getInstance();
    this.userRepository = this.db.getRepository(User);
    return this.userRepository.update({ id: params.id }, params);
  }

  /**
   * 删除用户
   * @param id 用户id
   */
  async delete(id: number){
    this.db = await Pool.getInstance();
    this.userRepository = this.db.getRepository(User);
    return this.userRepository.removeById(id);
  }

  @decorateArmour
  test(id) {
    console.log(id);
    return id;
  }

}
