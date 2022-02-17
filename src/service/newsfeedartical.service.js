const dbInstance = require('../data/mysql.controller')
const newsfeedarticalFactory = require('../queryfactory/newsfeedarticalquery.factory')
const utils = require('../utils/utils')

class NewsFeedArticalService {

    /**
     * This Method Fetch all the News Feed Articals 
     */
    View = async (newsfeedinfo) => {
        return new Promise((resolve, reject) => {
            let Query = newsfeedarticalFactory.VIEW
            Query += this.filter_by(newsfeedinfo)
            Query += newsfeedinfo.sortBy == 'true' ? newsfeedarticalFactory.SORT : ``
            console.log(Query)
            dbInstance.query(Query)
                .then((data) => {
                    let responseObject = []
                    data.response.forEach((item) => {
                        let duplicate = responseObject.find(x => x.newsFeedArticalId == item.newsFeedArticalId)
                        if (!duplicate) {
                            responseObject.push({
                                newsFeedArticalId: item.newsFeedArticalId
                                , newsFeedArticleHedline: item.newsFeedArticleHedline
                                , newsFeedArticalImage: item.newsFeedArticalImage
                                , newsFeedArticalAuthorName: item.newsFeedArticalAuthorName
                                , technologyId: item.technologyId
                                , technologyName: item.technologyName
                                , authorId: item.authorId
                                , authorName: item.authorName
                                , uploadDateTime: utils.dateFormat(item.uploadDateTime)
                            })
                        }

                    })
                    resolve(responseObject)
                })
                .catch((err) => reject(err))
        })
    }
    /**
     * IF sort by is true then retun most resent 
     */
    sortBy = (sortInfo) => {
        if (sortInfo == true || sortInfo == 'true')
            return `ORDER BY nfa.upload_date_time desc`
        else return ``;

    }

    /**
     * This Function check filter by 
     * @param {*} newsfeedinfo 
     * @returns 
     */
    filter_by = (newsfeedinfo) => {
        let filterObj = newsfeedinfo;
        let filterClause = ``;
        if (filterObj.Technology && filterObj.Technology.length) {
            var technologyList = "(" + filterObj.Technology.join() + ")";
            filterClause += ` AND nfa.technology_id IN ${technologyList}`;
        }
        else if (filterObj.Author && filterObj.Author.length) {
            var authorList = "(" + filterObj.Author.join() + ")";
            filterClause += ` AND nfa.author_id IN ${authorList}`;
        }
        return filterClause
    }

}
module.exports = new NewsFeedArticalService()