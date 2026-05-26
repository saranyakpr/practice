import React, { useState } from 'react'

const ArticleSorting = () => {

    const articleList = [
        {
            id: 1,
            title: 'Article 1',
            date: '2023-01-01',
            count: 15,
        },
        {
            id: 2,
            title: 'Article 3',
            date: '2023-03-01',
            count: 8,
        },
        {
            id: 3,
            title: 'Article 2',
            date: '2023-02-01',
            count: 20,
        },
    ]

    const [article, setArticle] = useState(articleList);

    const sortType = (type) => {
        let sortArticle = [...article];

        if(type === 'date') {
            sortArticle.sort((a, b)=>new Date(a.date) - new Date(b.date));
        }
        else if(type === 'count') {
            sortArticle.sort((a, b) =>a.count - b.count);
        }
        setArticle(sortArticle);
    }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div>
            <div className='flex justify-between mb-4'>
                <button className='cursor-pointer border-green-300 bg-green-700 text-white px-3 py-1 rounded' type='button' onClick={()=>sortType('date')}>Sort By Date</button>
                <button className='cursor-pointer border-blue-300 bg-blue-700 text-white px-3 py-1 rounded' type='button' onClick={()=>sortType("count")}>Sort By Count</button>
            </div>
            <table className='border-collapse border border-gray-400'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 px-4 py-2'>Title</th>
                        <th className='border border-gray-300 px-4 py-2'>Date</th>
                        <th className='border border-gray-300 px-4 py-2'>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {article.map((item) => (
                        <tr key={item.id}>
                            <td className='border border-gray-300 px-4 py-2'>{item.title}</td>
                            <td className='border border-gray-300 px-4 py-2'>{item.date}</td>
                            <td className='border border-gray-300 px-4 py-2'>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ArticleSorting