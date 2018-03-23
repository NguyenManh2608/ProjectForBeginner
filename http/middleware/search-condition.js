const AdvanceSearchCondition = require('../../src/searching-service/advance-search-condition');
const KeywordSearchCondition = require('../../src/searching-service/keyword-search-condition');
const UnDeletedSearchCondition = require('../../src/searching-service/undeleted-search-condition');
const IdSearchCondition = require('../../src/searching-service/id-search-condition');
const TitleSearchCondition = require('../../src/searching-service/title-search-condition');

module.exports = (req, res, next) => {
    req.condition = makeCondition(req);
    next();
};

function makeCondition(request) {
    if(request.path === '/search-advance') {
        return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
    }
    else if (request.path === '/search-basic'){
        return new KeywordSearchCondition(request.query.keyword);
    }
    else if (request.path === '/books'){
        return new UnDeletedSearchCondition();
    }
    else if (request.path.toString().startsWith('/book/')) {
        return new IdSearchCondition(request.params.id);
    }
    else if (request.path === '/save') {
        return new UnDeletedSearchCondition();
    }
    else if (request.path === '/title') {
        return new TitleSearchCondition(request.query.title);
    }
    else if(request.path === '/book') {
        return new UnDeletedSearchCondition();
    }
    else if(request.path.toString().startsWith('/detail')) {
        return new IdSearchCondition(request.params.id);
    }
    else if(request.path.toString().startsWith('/delete')){
        return new IdSearchCondition(request.params.id)
    }
}