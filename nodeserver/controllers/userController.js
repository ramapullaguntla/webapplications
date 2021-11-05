const user = require('../models/user-model');
const bcrypt = require('bcryptjs');

createUser = (req, res) =>
{
    var body = req.body;

    if(!body)
    {
        return res.status(400).json(
            {
                detail: "The request message is empty",
                title: "Bad Request"
            }
        )
    }

    const userdetail = new user(body);

    if(!userdetail)
    {
        return res.status(400).json(
            {
                detail: "The request message is not a user",
                title: "Bad Request"
            }
        )
    }

    userdetail
    .save()
    .then(() =>
    {
        return res.status(201).json(
            {
                userid: userdetail._id,
                username: userdetail.username
            }
        )
    })
    .catch( (err) =>
    {
        return res.status(500).json(
            {
                detail: err,
                title: "Internal server error"
            }
        )
    });
};

//Get users
getUsers = (req, res) =>
{   

    user.find({}, (err, users) =>
    {
        if(err)
        {
            return res.status(500).json(
                {
                    detail: err,
                    title: "Internal server error"
                }
            )
        }

        if(users)
        {
            
            return res.status(200).json(users);                           
        }
    }).catch( err => console.log(err));

};

loginUser = async (req, res) => {
    var body = req.body;
    var founduser = await user.findOne({ username: body.username});
    
    
    if(founduser)
    {        
        // bcrypt.compare(body.password, founduser.password, function(err, isMatch) 
        //     {
        //         // if (err) 
        //         // {
        //         //     return res.status(401).json(
        //         //         {
        //         //             "message" : err
        //         //         });
        //         // }
        //         if(isMatch)
        //         {
        //             return res.status(200).json(
        //                 {
        //                     "message" : "success"
        //                 });
        //         }
        //         else
        //         {
        //             return res.status(401).json(
        //                 {
        //                     "message" : "Invalid password"
        //                 });
        //         }               
        //     });  
        
        if(await founduser.comparePassword(body.password))
        {
            return res.status(200).json(
            {
                "message" : "success"
            });
        }
        else
        {
            return res.status(401).json(
                {
                    "message" : "Invalid password"
                });
        }
        
    }

    
};

module.exports = {
    createUser,
    getUsers,
    loginUser
}