import { Component } from '@nestjs/common';
import { Pool } from '../dao/pool';
import { Action } from '../entitys/index';
import { Validate, decorateArmour } from '../utils/enumerables';
import { ActionCreateDto } from '../schemas/action.create';

@Component()
export class ActionService {

    private db: any;
    private actionRepository: any;

    /**
     * 获取该用户所有操作
     * @param userId 用户id
     */
    async getAllByUserId(userId: number, time?: Date){
        this.db = await Pool.getInstance();
        this.actionRepository = this.db.getRepository(Action);
        const actions = await this.actionRepository.find({ user_id: userId });
        return actions;
    }

    /**
     * 新增动态
     * @param param 动态
     */
    async add(param: ActionCreateDto){
        this.db = await Pool.getInstance();
        this.actionRepository = this.db.getRepository(Action);
        const action = this.actionRepository.create(param);
        return this.actionRepository.save(action);
    }

    /**
     * 修改动态
     * @param param 动态
     */
    async update(param: ActionCreateDto){
        this.db = await Pool.getInstance();
        this.actionRepository = this.db.getRepository(Action);
        try {
            return this.actionRepository.update({
                id: param.id,
            }, param);
        } catch (error) {
            console.log('更新动态失败', error);
            return {};
        }
    }

    /**
     * 根据动态id删除动态
     * @param id 动态id
     */
    async delete(id: number){
        this.db = await Pool.getInstance();
        this.actionRepository = this.db.getRepository(Action);
        try {
            return this.actionRepository.removeById(id);
        } catch (error) {
            console.log('删除动态成功', error);
            return {};
        }
    }

    /**
     * 根据动态id查找动态详情
     * @param id 动态id
     */
    async findById(id: number){
        this.db = await Pool.getInstance();
        this.actionRepository = this.db.getRepository(Action);
        return this.actionRepository.findOne(id);
    }

}