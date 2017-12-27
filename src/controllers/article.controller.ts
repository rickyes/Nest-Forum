import { Controller, Get, Post, Response, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { ArticleService } from '../componets/index';
import { CreateArticleDto } from '../schemas/article.create';

@Controller('article')
export class ArticleController {

    constructor(private articleService: ArticleService) { }

    @Get(':id')
    public async getArticlesByAutuorId( @Response() res, @Param('id') id) {
        const articles = await this.articleService.getAllArticleByUserId(id);
        res.status(HttpStatus.OK).json(articles);
    }

    @Post('create')
    public async create( @Response() res, @Body() createAitcle: CreateArticleDto) {
        try {
            const result = await this.articleService.add(createAitcle);
            if (result != null) {
                res.status(HttpStatus.OK).json({
                    code: HttpStatus.OK,
                    msg: '新增文章成功',
                });
            }
        } catch (error) {
            res.status(HttpStatus.OK).json({
                code: HttpStatus.BAD_GATEWAY,
                msg: '新增文章失败',
            });
        }
    }

    @Post('update')
    public async update( @Response() res, @Body() updateArticle: CreateArticleDto) {
        try {
            await this.articleService.update(updateArticle);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '更改文章成功',
            });
        } catch (error) {
            console.log(error, '更改文章错误');
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '更改文章错误',
            });
        }
    }

    @Post('delete')
    public async delete( @Response() res, @Body() id: number) {
        try {
            this.articleService.delete(id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '删除文章成功',
            });
        } catch (error) {
            console.log(error, '删除文章出错');
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                msg: '删除文章出错',
            });
        }
    }

}