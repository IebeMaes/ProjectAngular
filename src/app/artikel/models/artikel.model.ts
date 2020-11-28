import { Tag } from 'src/app/admin/model/tag.model';
import { User } from 'src/app/login/model/user.model';
import {ArtikelStatus} from '../models/artikel-status.model'
export class Artikel {
    articleID: number;
    title: string;
    subTitle: string;
    shortSummary: string;
    body: string;
    image: string;
    tagID: number;
    tag: Tag;
    likes: number;
    archive: boolean;
    userID: number;
    user: User;
    articleStatusID: number;
    articleStatus: ArtikelStatus;

    constructor(title: string, subTitle: string, shortSummary: string,body: string, tagID: number, userID: number, articleStatusID: number, image: string, likes:number, archive: boolean){
        this.title = title;
        this.subTitle = subTitle;
        this.shortSummary = shortSummary;
        this.body = body;
        this.tagID = tagID;
        this.userID = userID;
        this.articleStatusID = articleStatusID;
        this.image = image;
        this.likes = likes;
        this.archive = archive;
    }

}
