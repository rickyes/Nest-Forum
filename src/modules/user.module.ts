import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { UserService } from '../componets/user.service';
import { UserController } from '../controllers/user.controller';
import { LoggerMiddleware, CorsMiddlewares } from '../common/middlewares/index';

@Module({
  modules: [],
  controllers: [UserController],
  components: [UserService],
})

export class UserApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply([LoggerMiddleware, CorsMiddlewares]).forRoutes(UserController);
  }
}
