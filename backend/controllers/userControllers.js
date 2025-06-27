import httpStatus from "http-status"
import Posts from "../models/posts.model.js"

export const home = (req,res)=>{
    res.json({
        sms : "Hey from backend"
    })
}

export const allPosts = async (req,res)=>{
    try {
        const posts = await Posts.find({}).sort({_id:-1});
        res.status(httpStatus.FOUND).json(posts);
    } catch (error) {
        res.json(`Error at fatching database : ${error}`)
    }
}

export const createPosts = async (req,res)=>{
    const {title,expression,author,cover} = req.body;
    if(!title || !expression) 
        return res.status(httpStatus.NOT_FOUND).json({
            message : "Please fill all the details!"
        })

    try {
        const newPost = new Posts({
            title : title,
            expression : expression,
            author : author,
            cover : cover
        })

        await newPost.save();
        res.status(httpStatus.CREATED).json({
            message : "Post is created!"
        })
    } catch (error) {
        res.json(`Error at creating post ${error}`)
    }

}

export const deletePost = async (req,res)=>{
    const _id = req.params.id;
    console.log(_id);
    
    try {
        await Posts.deleteOne({_id : _id});
        res.status(httpStatus.OK).json({message: "Post is deleted!"})
        
    } catch (error) {
        res.json(`Error at deleting post ${error}`)
    }
}

export const updatePost = async (req,res)=>{
    const _id = req.params.id;
    console.log(_id);
    
    const {title,expression,author,cover} = req.body;
    if(!title || !expression) return res.status(httpStatus.NOT_MODIFIED).json('Post is not modified!')
    
    try {

        const updatedPost = await Posts.updateOne({_id:_id},{$set : {
            title : title,
            expression : expression,
            author : author,
            cover : cover
        }})

        res.status(httpStatus.OK).json("Post is being Updated!")
        
    } catch (error) {
        res.json(`ERROR at updating post : ${error}`)
    }
}