const jwt = require("jsonwebtoken");
const { Users } = require("../models");

module.exports = async (req, res, next) => {
    try{
        const bearerToken = req.headers.authorization;
        if(!bearerToken) {
            return res.status(401).json({
                status: "Failed",
                message: "Your token is missing!",
                isSuccess: false
            })
        }
        
        const token = bearerToken.split("Bearer ")[1];

        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Users.findByPk(payload.userId);
        if(!user){
            return res.status(404).json({
                status: "Failed",
                message: "User not found",
                isSuccess: false
            })
        }
        console.log(user);
        req.user = user;
        next();
    } catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false
        })
    }
}