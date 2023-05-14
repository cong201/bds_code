
class NewsController{

    index(req, res ,next){
        res.render('./news/news')
    }

}

module.exports = new NewsController;