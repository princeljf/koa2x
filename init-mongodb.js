const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Count = require('./models/mongodb/Count')
const verificationCount = new Count({
  pageName: 'page-verification',
  count: 1,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connection success...');
  
  Count.find({pageName: 'page-verification'}, function (err, verification) {
    if (err) return console.error(err);
    console.log('Count find success', verification);
    !verification.length && verificationCount.save(function (err, verification) {
      if (err) return console.error(err);
      console.log('verificationCount save success', verification);
    })
  })


  // 模型models.find()查找数据
  // Count.find({pageName: 'page-verification'}, function (err, verification) {
  //   if (err) return console.error(err);
  //   console.log('Count find success', verification);
  // })

  // 模型实例化document.save()增加数据
  // verificationCount.save(function (err, verification) {
  //   if (err) return console.error(err);
  //   console.log('verificationCount save success', verification);
  // })
  
  // 模型models.updateOne()更新数据
  // Count.updateOne(  
  //   {pageName: 'page-verification'}, //条件
  //   {count: '456'},     //要更新的内容
  //   /*回调函数*/
  //   function(err, verification){
  //     if (err) return console.error(err);
  //     console.log('verificationCount updateOne success', verification);
  //   }
  // )

  // 模型models.deleteOne()删除数据
  // Count.deleteOne(
  //   {'pageName':'page-verification'}, //查找条件
  //   /*回调函数*/
  //   (err,verification)=>{
  //     if (err) return console.error(err);
  //     console.log('verificationCount deleteOne success', verification);
  //   }
  // )

});
