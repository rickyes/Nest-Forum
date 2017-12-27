import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
    })
    title: string;

    @Column({
        type: 'varchar',
        length: 2048,
    })
    content: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    author: string;

    @Column({
        type: 'bigint',
        length: 20,
    })
    author_id: number;

    @Column({
        type: 'int',
        length: 10,
    })
    star: number;

    @Column({
        type: 'int',
        length: 10,
    })
    collection: number;

    @Column({
        type: 'bigint',
        length: 20,
    })
    read_num: number;

    @Column('datetime')
    create_time: Date;

    @Column('datetime')
    update_time: Date;

}