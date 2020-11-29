export class Likes {
    likesID: number;
    userID: number;
    articleID: number;

    constructor(userID: number, articleID: number){
        this.userID = userID;
        this.articleID = articleID;
    }
}
