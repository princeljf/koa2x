// count:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Count = require('../models/mongodb/Count')

const orderCount = { pageName: 'page-verification' }

const RESPONSE_SUC = {
    code: '0000',
    message: '请求成功'
}
const RESPONSE_ERR = {
    code: '0000',
    message: '请求成功'
}


module.exports = {
    'GET /api/count/verification': async (ctx, next) => {
        let res = RESPONSE_ERR;
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'mongoose connection error:'));
        db.once('open', function() {
            Count.find(orderCount, function(err, arr){
                if (err) return console.error(err);
                if(arr.length){
                    let verificationCount = new Count({
                        pageName: 'page-verification',
                        count: arr[0].count++
                    });
                    verificationCount.save(orderCount, function(err, item){
                        if (err) return console.error(err);
                        res.data = {
                            count: item.count
                        }
                    })
                    
                }
            })
        })
        ctx.body(res); 
    },
};
