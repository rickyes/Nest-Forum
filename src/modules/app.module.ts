import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { UserService, ArticleService } from '../componets/index';
import { UserController, ArticleController } from '../controllers/index';
import { LoggerMiddleware, CorsMiddlewares } from '../common/middlewares/index';

@Module({
  modules: [],
  controllers: [UserController, ArticleController],
  components: [UserService, ArticleService],
})

export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply([LoggerMiddleware, CorsMiddlewares]).forRoutes(UserController, ArticleController);
  }
}
