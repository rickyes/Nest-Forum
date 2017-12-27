import { Controller, Get, Post, Response, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { UserService } from '../componets/user.service';
import { CreateUserDto } from '../schemas/user.create.body';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  public async getUser( @Response() res, @Param('id') id) {
    const user = await this.userService.getUser(id);
    res.status(HttpStatus.OK).json(user);
  }

  @Post('create')
  public async create( @Response() res, @Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.userService.create(createUserDto);
      if (result != null) {
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          msg: '注册成功',
        });
      }
    } catch (error) {
      res.status(HttpStatus.OK).json({
        code: HttpStatus.BAD_GATEWAY,
        msg: '注册失败',
      });
    }
  }

  @Post('update')
  public async update( @Response() res, @Body() updateUserDao: CreateUserDto) {
    try {
      await this.userService.update(updateUserDao);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        msg: '更改资料成功',
      });
    } catch (error) {
      console.log(error, '用户更改资料错误');
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        msg: '用户更改资料错误',
      });
    }
  }

  @Post('delete')
  public async delete( @Response() res, @Body() id: number) {
    try {
      this.userService.delete(id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        msg: '删除用户成功',
      });
    } catch (error) {
      console.log(error, '删除用户出错');
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        msg: '删除用户出错',
      });
    }
  }

  @Get('test/:id')
  public test( @Response() res, @Param('id') id) {
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      msg: this.userService.test(id),
    });
  }

}
