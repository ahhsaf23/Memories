const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    posttitle:{
        type: String,
        required: true,
        unique: true,
    },
    desc:{
        type: String,
        required: true,
    },
    postimg:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
    },
    category:{
        type:Array,
        required: false
    }
},{timestamp:true}
);

module.exports =mongoose.model('Post',PostSchema);