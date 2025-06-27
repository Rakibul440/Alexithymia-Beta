import mongoose,{Schema} from "mongoose";

const PostSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    expression : {
        type : String,
        required : true
    },
    author : {
        type : String,
        default : "Anonymous"
    },
    cover : {
        type : String,
        default : "https://i.pinimg.com/1200x/17/5c/60/175c60857b8d2965bfe74e9cef7a2b05.jpg"
    }
})

const Posts = mongoose.model("Posts",PostSchema)

export default Posts ;