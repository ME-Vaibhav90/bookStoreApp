import React from 'react'

function Cards({ item }) {
    console.log(item)
    return (
        <>
            <div className="mt-5 my-4 p-3" >
                <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           {item.name}
                            <div className="badge badge-secondary px-3 py-2 hover:bg-pink-500 hover:text-white duration-800">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className=" badge-outline rounded-full bw-1 hover:bg-pink-500 hover:text-white duration-200 px-4 py-1 border-[1px] border-gray-400">${item.price}</div>
                            <div className="badge-outline rounded-full hover:bg-pink-500 hover:text-white duration-200 px-3 py-1 border-[1px] border-gray-400">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards