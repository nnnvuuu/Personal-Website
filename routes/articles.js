const router = require('express').Router();
let Article = require('../models/articles.model');


                    
//*******************GET REQUEST****************************\\
router.route('/').get((req,res)=>{
  Article.find()
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });

 
 
 
 router.route('/tag/leetcode').get((req,res)=>{
  Article.find({tag:"刷题找工"}).sort({ _id: -1 })
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
});

router.route('/tag/studyRecord').get((req,res)=>{
  Article.find({tag:"学习记录"}).sort({ _id: -1 })
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
});

router.route('/tag/projectRelated').get((req,res)=>{
  Article.find({tag:"项目相关"}).sort({ _id: -1 })
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
});


router.route('/tag/enjoyLife').get((req,res)=>{
  Article.find({tag:"吃喝玩乐"}).sort({ _id: -1 })
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
});



router.route('/tag/dailyLife').get((req,res)=>{
  Article.find({tag:"生活而已"}).sort({ _id: -1 })
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
  
});

router.route('/tag/leetcode/uniqueSubTag').get((req,res)=>{
  Article.distinct("subTag",{tag:"刷题找工"})
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });


 router.route('/tag/studyRecord/uniqueSubTag').get((req,res)=>{
  Article.distinct("subTag",{tag:"学习记录"})
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });


 router.route('/tag/projectRelated/uniqueSubTag').get((req,res)=>{
  Article.distinct("subTag",{tag:"项目相关"})
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });


 router.route('/tag/enjoyLife/uniqueSubTag').get((req,res)=>{
  Article.distinct("subTag",{tag:"吃喝玩乐"})
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });


 router.route('/tag/dailyLife/uniqueSubTag').get((req,res)=>{
  Article.distinct("subTag",{tag:"生活而已"})
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });


 router.route('/timeline/sortAscending').get((req,res)=>{
  Article.find({ }).sort( { _id: -1 } )
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });

 router.route('/timeline/sortDescending').get((req,res)=>{
  Article.find({ }).sort( { _id: 1 } )
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });

 router.route('/filterSubTag').get((req,res)=>{
   const targetSubTag = req.query.targetSubTag
  
  Article.find({ subTag: targetSubTag} ).sort( { _id: 1 } )
  .then(articles => res.json(articles))
  .catch(err => res.status(400).json('Error:' + err));
 });

//没有完成，这里是要给tag 下拉栏里的数据都加上各自的count 比如arraylist 【6】 ...[..] 这样 以后技术有了就写
//  router.route('/tag/uniqueSubTag/counter').get((req,res)=>{


//    });








 router.route('/add').post((req,res)=>{
  const title = req.body.title;
  const tag = req.body.tag;
  const markdown = req.body.markdown;
  const subTag = req.body.subTag;
  const date = Date.parse(req.body.date);

 
  const newArticle = new Article({
    title,
    tag,
    markdown,
    subTag,
    date,
  })

  newArticle.save()
   .then(() => res.json('Article added'))
   .catch(err => res.status(400).json('Error:' + err));
  }); 

  router.route('/:id').get((req,res)=> {
    Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: '+err)); 
  }); 
 

  router.route('/:id').delete((req,res)=>{
    Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('article deleted'))
    .catch(err => res.status(400).json('Error:' + err));

  }); 


  


  router.route('/update/:id').post((req,res)=>{
    Article.findById(req.params.id)
      .then(article =>{
        article.title = req.body.title,
        article.markdown = req.body.Markdown,

        article.save()
        .then(article => res.json('article updated'))
        .catch(err => res.status(400).json('Error:' + err));
      })
      .catch(err=>res.status(400).json('Error: '+err ));
  

  });

 
  module.exports = router;