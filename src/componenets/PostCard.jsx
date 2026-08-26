import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredimg }) {
    
    return (
        <Link to={`/post/${$id}`} className="block h-full">
            <div className="
                w-full
                h-full
                bg-gray-100
                rounded-2xl
                overflow-hidden
                border
                border-gray-200
                hover:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
            ">
                
                {/* Image */}
                <div className="w-full h-52 overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(featuredimg)}
                        alt={title}
                        className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-300
                            hover:scale-105
                        "
                    />
                </div>

                <div className="p-5">
                    <h2 className="text-xl font-bold leading-snug">
                        {title}
                    </h2>
                </div>

            </div>
        </Link>
    )
}

export default PostCard