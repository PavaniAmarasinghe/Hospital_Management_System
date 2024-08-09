import { object } from "webidl-conversions";
import app from "./app.js";
import clodinary from "cloudinary";

clodinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEYE,
    api_secret:process.env.CLOUDINARY_API_SECRET,

})

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});