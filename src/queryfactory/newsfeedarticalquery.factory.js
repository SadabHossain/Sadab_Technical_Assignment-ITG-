/** Here Define All News Feed Articals Related Querys */
module.exports = {
    VIEW: `SELECT nfa.news_feed_artical_id as newsFeedArticalId
         , nfa.news_feed_article_headline as newsFeedArticleHedline
         , nfa.news_feed_article_Image as newsFeedArticalImage
         , nfa.upload_date_time as uploadDateTime
         , tm.technology_id as technologyId
         , tm.technology_name as technologyName
         , am.author_id  as authorId
         , am.author_name as authorName
         FROM  news_feed_article nfa
         JOIN technology_master tm
         ON tm.technology_id = nfa.technology_id
         JOIN author_master am 
         On am.author_id = nfa.author_id
         WHERE nfa.status = 'A' `,
    SORT: `  ORDER BY nfa.upload_date_time desc`,
}