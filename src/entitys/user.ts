import { Table, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 20,
    })
    name: string;

    @Column({
        type: 'int',
        length: 1,
    })
    sex: number;

    @Column({
        type: 'varchar',
        length: 256,
    })
    avater: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    github: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    zhihu: string;

    @Column({
        type: 'int',
        length: 10,
    })
    star: number;

    @Column({
        type: 'varchar',
        length: 1024,
    })
    about: string;

    @Column('datetime')
    create_time: Date;

    @Column('datetime')
    update_time: Date;

}