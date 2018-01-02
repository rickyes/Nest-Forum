import { Controller, Get, Post, Response, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { ActionService } from '../componets/index';
import { ActionCreateDto } from '../schemas/action.create';

@Controller('action')
export class ActionController {

    constructor(private actionService: ActionService) { }

    @Get(':id')
    public async getAllByUesrId( @Response() res, @Param('id') id){
        const action = await this.actionService.getAllByUserId(id);
        res.status(HttpStatus.OK).json(action);
    }

    @Post('create')
    public async create( @Response() res, @Body() action: ActionCreateDto) {
        try {
            const result = await this.actionService.add(action);
            if (result != null) {
                res.status(HttpStatus.OK).json({
                    code: HttpStatus.OK,
                    msg: '新增动态成功',
                });
            }
        } catch (error) {
            res.status(HttpStatus.OK).json({
                code: HttpStatus.BAD_GATEWAY,
                msg: '新增动态失败',
            });
        }
    }

    @Post('update')
    public async update( @Response() res, @Body() action: ActionCreateDto) {
        try {
            await this.actionService.update(action);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '更改动态成功',
            });
        } catch (error) {
            console.log(error, '更改动态错误');
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '更改动态错误',
            });
        }
    }

    @Post('delete')
    public async delete( @Response() res, @Body() id: number) {
        try {
            this.actionService.delete(id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '删除动态成功',
            });
        } catch (error) {
            console.log(error, '删除动态出错');
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '删除动态出错',
            });
        }
    }

}
