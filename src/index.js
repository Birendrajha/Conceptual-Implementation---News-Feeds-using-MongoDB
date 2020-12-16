const express = require('express')
const app = express()
const port = 8080

const onePageArticleCount = 10
require('./createDatabase.js')

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

 app.get('/newFeeds',async(req,res)=>{
          let limit =Number(req.query.limit);
          let offset = Number(req.query.offset);
          console.log(offset);
          if(limit==0 || isNaN(limit)){
                limit = 10;
          }
          if(offset==0 || isNaN(offset)){
            offset = 0;
      }
      try{
      const data = await newsArticleModel.find().limit(limit).skip(offset);
      res.status(200).send(data);
      }catch(err){
               res.status(400).send(err);
      } 
 })

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;