import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as config from 'config';

/**
 * 路由日志中间件
 */
@Middleware()
export class LoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            if (config.console) {
                console.log(req.method, req.url, new Date());
            }
            next();
        };
    }
}