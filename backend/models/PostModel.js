const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a name of a post"],
        trim: true,
        maxLength:[200, "Post name not exceed than 200 characters"]
    },
    description:{
        type:String,
        required:[true, "Please add a description of your post"],
        maxlength:[50000,"Description is can not exceed than 50000 characters"]
    },
    trichdan:{
        type:String,
        required: [true, "Please add a trichdan for your post"],
        maxlength:[4000,"Description is can not exceed than 4000 characters"]
    },
    luat:{
        type:String,
        required: [true, "Please add a luat for your post"],
        maxlength:[100,"Description is can not exceed than 100 characters"]
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],
    category:{
        type: String,
        required:[true,"Please add a category of your post"],
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    createAt:{
        type:Date,
        default: Date.now() 
    }
})

module.exports = mongoose.model("Post",postSchema);