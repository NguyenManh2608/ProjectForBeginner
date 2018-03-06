class AdvancedSearchCondition {

    /**
     *
     * @param {string} title
     * @param {string} author
     * @param {string} publisher
     */
    constructor (title, author){
        this.title = title;
        this.author = author;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where('author', 'like', '%' + this.author + '%')
            .where('title', 'like', '%' + this.title + '%')
            .where({'books.deleted_at': null});
    }
}

module.exports = AdvancedSearchCondition;
