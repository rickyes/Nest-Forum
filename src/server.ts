import { NestFactory } from '@nestjs/core';
import { UserApplicationModule } from './modules/user.module';

async function bootstrap() {
    const app = await NestFactory.create(UserApplicationModule);
    await app.listen(3000);
}
bootstrap();
