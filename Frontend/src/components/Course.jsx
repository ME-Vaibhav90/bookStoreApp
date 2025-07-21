import React from 'react'
import list from '../list.json';
import Cards from './Cards.jsx';
import {Link} from "react-router-dom";


function Course() {
    return (
        <>
            <div className="max-w-screen-xl container mx-auto md:px-3 px-2">
                <div className=" flex justify-center items-center ">
                    <h1 className="text-2xl  md:text-4xl text-center  mt-35">
                        We are Delighted to have you <span className='text-pink-500'>here! :)</span>
                    </h1>
                </div>
                <div className="text-center mt-8">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae distinctio quis totam modi excepturi tempora
                        explicabo dolore fugit officiis, esse velit ratione ipsa quam quisquam, aut sint delectus nam exercitationem
                        magnam ducimus! Nulla, voluptates inventore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, magni?
                    </p>
                </div>
                <Link to="/">
                 <div className="card-actions justify-center mt-10">
                <div className=" btn  btn-secondary  rounded-full  text-black-900 hover:bg-teal-500 hover:text-white 
                    duration-200 px-5    border-[1px] border-black-900">Back</div>
                    </div>
                </Link>    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 " >
                        {
                            list.map((item)=>(
                                <Cards key={item.id} item={item} />
                            ))
                        }
                    </div>
            </div>
        </>
    )
}

export default Course