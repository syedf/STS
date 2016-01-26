/**
 * Created by syedf on 1/25/2016.
 */
exports.getMovies =  function (req, res, next) {
    var perPage = 12
        , page = req.query.page > 0 ? req.query.page : 0;
    
    req.mongodb.collection('movieDetails')
        .find({'poster':{'$exists': true, '$ne': null}})
        .limit(perPage)
        .skip(perPage * page)
        .sort({'imdb.rating': -1})
        .toArray(function (err, docs) {
            if(err){
                next(err)
            }
            else{
                res.status(200).json({movies:docs,pageNum:page});
            }
        })
};