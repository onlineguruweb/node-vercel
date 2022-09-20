const mongoose = require('mongoose');

const Schema = mongoose.schema;

const UserModel = new Schema(
    {
        title:{
            type:String,
            require:true
        },
        body:{
            type:String,
            require:true
        },
        image:{
            type:String
        },
        user_id:{
            type:objectId
        }
    },
    {
        timestamps:true
    }

);  