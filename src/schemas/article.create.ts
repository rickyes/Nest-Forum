export class CreateArticleDto {
    readonly id: number;
    readonly title: string;
    readonly content: string;
    readonly author: string;
    readonly author_id: number;
    readonly star: number;
    readonly collection: number;
    readonly read_num: number;
}