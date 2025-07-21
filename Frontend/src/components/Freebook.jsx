import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../list.json';
import Slider from "react-slick";
import Cards from './Cards';



function Freebook() {
    // Filter items where category is "Free"
    const filterData = list.filter(item => item.category === "Free");
    console.log(filterData); // This will show the filtered data in the console
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-xl container mx-auto md:px-5 px-2">
                <div>
                    <h1 className="font-semibold text-xl pb-5">Free Offered Courses</h1>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam.
                        Tempora amet atque expedita, quae corrupti totam sed pariatur corporis dsioa lucan migtata sushi</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item)=> (
                        <Cards item= {item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;