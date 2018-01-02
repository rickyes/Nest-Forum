import { Component } from '@nestjs/common';
import { Pool } from '../dao/pool';
import { Action } from '../entitys/index';
import { Validate, decorateArmour } from '../utils/enumerables';
import { ActionCreateDto } from '../schemas/action.craete';

@Component()
export class ActionService {

    private db: any;
    private actionRepository: any;

    /**
     * 获取该用户所有操作
     * @param userId 用户id
     */
    async getAllByUserId(userId: number, time: Date){
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

}