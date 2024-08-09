class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }
    if(err.name === "JsonWebTokenError"){
        const message = "Json Web Token is invalid,Try Again!";
        err = new ErrorHandler(message,400);

    }
    if(err.name === "TokenExpiredError"){
        const message = "Json Web Token is Expired,Try Again!";
        err = new ErrorHandler(message,400);

    }
    if(err.name === "CastError"){
        const message =`Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }
    return res.status(err.statusCode)({
        success:false,
        message:err.message,
    });

};