import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


       
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localfilepath) => {
    try {
        if(!localfilepath){
            return null
        }
        //uploading file on cloudinary
        const res = await cloudinary.uploader.upload(localfilepath, { resource_type:  'auto' })

        console.log("File is uploaded on Cloudinary", res.url);
        
        //returning response to the user
        return res;
    } catch (error) {
        fs.unlinkSync(localfilepath); // removes the local file if error comes
        console.log("CLoudinary Error: ", error);
        return null
    }
}

