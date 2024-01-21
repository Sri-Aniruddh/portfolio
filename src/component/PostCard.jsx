import React from 'react';
import appwriteService from '../appwrite/config';

function PostCard({ yourSkill, fimg }) {
    const imageUrl = appwriteService.getFilePreview(fimg);
    console.log(imageUrl)
    // Use a try-catch block to handle errors
    try {
        return (
            <div className='w-auto rounded-lg shadow dark:bg-gray-800 dark:text-white'>
                <div className='w-auto justify-center mb-4'>
                    <img
                        src={imageUrl}
                        alt={yourSkill}
                        className='rounded-xl img-thumbnail'
                    />
                    
                </div>
                <h2 className='text-xl font-bold'>{yourSkill}</h2>
            </div>
        );
    } catch (error) {
        console.error('Error loading image:', error);
        return (
            <div className='w-auto bg-gray-400 rounded-xl p-4'>
                <div className='w-auto justify-center mb-4'>
                    <span>Error loading image</span>
                </div>
                <h2 className='text-xl font-bold'>{yourSkill}</h2>
            </div>
        );
    }
}

export default PostCard;

