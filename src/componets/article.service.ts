import { Component } from '@nestjs/common';
import { Pool } from '../dao/pool';
import { Article } from '../entitys/index';
import { Validate, decorateArmour } from '../utils/enumerables';
import { CreateArticleDto } from '../schemas/article.create';

@Component()
export class ArticleService {

    private db: any;
    private articRepository: any;

    /**
     * 获取该用户的所有文章
     * @param userId 用户id
     */
    async getAllArticleByUserId(userId: number) {
        this.db = await Pool.getInstance();
        this.articRepository = this.db.getRepository(Article);
        const articles = await this.articRepository.find({ author_id: userId });
        return articles;
    }

    /**
     * 新增文章
     * @param param 文章参数
     */
    async add(param: CreateArticleDto){
        this.db = await Pool.getInstance();
        this.articRepository = this.db.getRepository(Article);
        const article = this.articRepository.create(param);
        return this.articRepository.save(article);
    }

    /**
     * 修改文章
     * @param param 文章参数
     */
    async update(param: CreateArticleDto){
        this.db = await Pool.getInstance();
        this.articRepository = this.db.getRepository(Article);
        try {
            return this.articRepository.update({
                id: param.id,
            }, param);
        } catch (error) {
            console.log('更新文章失败', error);
            return {};
        }
    }

    /**
     * 根据文章id删除文章
     * @param id 文章id
     */
    async delete(id: number){
        this.db = await Pool.getInstance();
        this.articRepository = this.db.getRepository(Article);
        try {
            return this.articRepository.removeById(id);
        } catch (error) {
            console.log('删除文章成功', error);
            return {};
        }
    }

    /**
     * 根据文章id查找文章
     * @param id 文章id
     */
    async findById(id: number){
        this.db = await Pool.getInstance();
        this.articRepository = this.db.getRepository(Article);
        return this.articRepository.findOne(id);
    }

}