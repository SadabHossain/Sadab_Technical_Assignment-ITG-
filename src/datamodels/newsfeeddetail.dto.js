class NewsFeedDetailsDTO {

    constructor(newsFeedArticalId
        , newsFeedArticleHedline
        , newsFeedArticalImage
        , newsFeedArticalAuthorName
        , categoryId
        , categoryName
        , uploadDateTime) {
        this.newsFeedArticalId = newsFeedArticalId
        this.newsFeedArticleHedline = newsFeedArticleHedline
        this.newsFeedArticalImage = newsFeedArticalImage
        this.newsFeedArticalAuthorName = newsFeedArticalAuthorName
        this.categoryId = categoryId
        this.categoryName = categoryName
        this.uploadDateTime = uploadDateTime
    }

}
module.exports = new NewsFeedDetailsDTO();