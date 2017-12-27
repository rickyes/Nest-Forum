import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Action {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'bigint',
        length: 20,
    })
    user_id: number;

    @Column({
        type: 'bigint',
        length: 20,
    })
    article_id: number;

    @Column({
        type: 'varchar',
        length: 10,
    })
    type: string;

    @Column('datetime')
    create_time: Date;

    @Column('datetime')
    update_time: Date;

}