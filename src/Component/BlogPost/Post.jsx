import { useState } from 'react'

const Post = () => {

    const [data, setData] = useState({
        title: '',
        description: ''
    });
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        if(!data.title || !data.description){
            alert('Please fill in all fields');
            return;
        }
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title: data.title,
            description: data.description
        }

        setPosts([...posts, newPost]);
        setData({
            title: '',
            description: ''
        });
    }

  return (
    <div className='flex items-center justify-center h-screen gap-10'>
        <div className='border border-gray-600 rounded p-6 w-96 space-y-4'>
            <h2 className='text-lg font-bold text-lg flex justify-center'>Create Post</h2>
            <div>
                <label className='block text-md font-semibold'>Title</label>
                <input type="text" placeholder='Enter Title' className='border border-gray-600 rounded p-1 w-full focus:outline-none' value={data.title} onChange={(e)=>{setData({...data, title:e.target.value})}} />
            </div>
            <div>
                <label className='block text-md font-semibold'>Description</label>
                <input type="text" placeholder='Enter Description' className='border border-gray-600 rounded p-1 w-full focus:outline-none' value={data.description} onChange={(e)=>{setData({...data, description:e.target.value})}} />
            </div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer' onClick={handleSubmit}>Create Post</button>
            </div>
        </div>
        {posts.length > 0 && (
            <div className='border border-gray-600 rounded p-6 w-96 space-y-4'>
            <h2>Post Details</h2>
            {posts.map((post)=>                
                <div key={post.id} className='border border-gray-400 rounded p-4'>
                    <h3 className='text-md font-semibold'>{post.title}</h3>
                    <p>{post.description}</p>
                    <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer' onClick={() => setPosts(posts.filter((p) => p.id !== post.id))}>
                        Delete Post
                    </button>
                </div>
            )}
        </div>
        )}
        
    </div>
  )
}

export default Post