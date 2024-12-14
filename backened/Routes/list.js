const router = require('express').Router();
const User = require('../models/User');
const List=require('../models/list');
router.get('/addTask',(req,res)=>{
    res.send("correct working");
})


router.post('/addTask',async(req,res)=>{
    try{
        const{title,body,email}=req.body;
        const existinguser=await User.findOne({email});
        if(existinguser){
            const list=new List({title,body,user:existinguser});
            await list.save().then(()=>res.status(200).json({list}));
            existinguser.list.push(list);
            existinguser.save();
        }
     

    }
    catch(error){
        console.log(error);

    }
});
router.put('/UpdateTask/:id', async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            // Update the task in the list and return the updated task
            const list = await List.findByIdAndUpdate(
                req.params.id,
                { title, body },
                { new: true } // Return the updated document
            );
            
            if (list) {
                res.status(200).json({ message: "Updated", list });
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.delete('/DeleteTask/:id', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            
            const list = await List.findByIdAndDelete(req.params.id);
       
            if (list) {
                existingUser.list = existingUser.list.filter(
                    taskId => taskId.toString() !== req.params.id
                );
                
                await existingUser.save();
                res.status(200).json({ message: "Task deleted successfully", list });
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.get('/GetTask/:id', async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id });
        
        if (list.length > 0) {
            res.status(200).json(list);
        } else {
            res.status(404).json({ message: "No tasks found for this user" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports=router;