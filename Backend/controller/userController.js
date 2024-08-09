import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {User} from "..//models/userSchema.js"
import { Message } from "../models/messageSchema.js";

export const patientRegister = catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        nic,
        dob,
        role
    } = req.body;

    if(
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !nic ||
        !dob ||
        !role){
            return next(new ErrorHandler("Please Fill Full Form!",400));
        }
        let user = await User.findOne({email});
        if(user){
            return next(new ErrorHandler("User already Registerd!",400));
        }
        user = a2wait User.create({
            firstName,
            lastName,
            email,
            phone,
            password,
            gender,
            nic,
            dob,
            role
        })
      res.status  (200).json({
        success:true,
        Message:"user Registered!",
      });
});