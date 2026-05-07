import { v2 as cloudinary } from 'cloudinary';

import fs from 'fs'

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }

        //upload

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        }) //uploaded
        console.log("File is uploaded Successfully",response.url);

        return response //for user 

        
    } catch (error) {
        //minimun just remove from the server from the temp 
        fs.unlinkSync(localFilePath) //remove the locally saved temp file when got failed
        return null
        
    }
}