import { User } from 'src/app/login/model/user.model';
import { Artikel } from './artikel.model';

export class Reactie {

    reactionID: number;
    body: string;
    userID: number;
    user: User;
    articleID: number;
    article: Artikel;

    constructor(body: string, userID: number, articleID: number){
        this.body = body;
        this.userID = userID;
        this.articleID = articleID;
    }

}
