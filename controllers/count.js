// count:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
const Count = require('../models/mongodb/Count')


const RESPONSE_SUC = {
    code: '0000',
    message: '请求成功'
}
const RESPONSE_ERR = {
    code: '1111',
    message: '请求失败'
}

const orderCount = { pageName: 'page-verification' }

module.exports = {
    'GET /api/count/verification': async (ctx, next) => {
        let res = RESPONSE_ERR
        let verificationCount = await new Promise((resolve, reject)=>{
            Count.find(orderCount,function(err, arr){
                if (err) return console.error(err);
                if(arr.length){
                    let verificationCount = new Count({
                        pageName: 'page-verification',
                        count: arr[0].count
                    });
                    resolve(verificationCount)  
                }
            })
        })
        res = await new Promise((resolve, reject)=>{
            Count.updateOne(orderCount, {count: verificationCount.count + 1}, function(err, item){
                if (err) return console.error(err);
                res = {
                    ...RESPONSE_SUC,
                    data: {
                        count: verificationCount.count + 1
                    }
                }
                resolve(res)
            })
        })
        
        ctx.body = res

    },

};
