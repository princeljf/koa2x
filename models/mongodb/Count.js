
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义一个schema
const countSchema = new Schema({
    pageName: { type: String, unique:true },
    count: Number,
    date: { type: Date, default: Date.now },
});

// 创建一个 model
const Count = mongoose.model('Count', countSchema);
module.exports = Count;