import mongoose from "mongoose";
const resetPasswordSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true, "Reset password token is required."]
    }, 
    expiresAt:{
        type:Date,
        default: function() { return Date.now() + 3600000; } // 1 hour from now
    },
    isUsed:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, "User ID is required."],
        ref:"User"
    }
});
export default mongoose.model("ResetPassword", resetPasswordSchema);
