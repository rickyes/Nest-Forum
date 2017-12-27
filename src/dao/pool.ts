import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User, Action, Article } from '../entitys/index';
import * as config from 'config';

export class Pool {

    private static pools: Array<any>;

    /**
     * 获取连接池中mysql实例
     */
    public static async getInstance() {
        if (Pool.pools == null) {
            Pool.pools = [];
            await new Pool().conn();
        }
        console.log(`连接池大小: ${Pool.pools.length}`);
        return Pool.pools[parseInt(Math.random() * Pool.pools.length + '', 10)];
    }

    /**
     * 连接mysql
     */
    private async conn() {
        const conf: any = config.Mysql;
        const p = await createConnection({
            type: conf.type,
            host: conf.host,
            port: conf.port,
            username: conf.username,
            password: conf.password,
            database: conf.database,
            entityPrefix: conf.entityPrefix,
            entities: [
                User,
                Article,
                Action,
            ],
        });
        if (p != null) Pool.pools.push(p);
    }

}