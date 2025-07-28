
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import React, { useEffect , useState} from 'react';



function Freebook() {

const [book,setBook]= useState([])
    useEffect(()=>{
       const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
         
          const data= res.data.filter((data) =>data.category === "Free");
          console.log(data);
          setBook(data);
        } catch (error) {
            console.log(error);
        }
       };
  getBook();
    },[]);





    // Filter items where category is "Free"
    
    // This will show the filtered data in the console
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
                        {book.map((item)=> (
                        <Cards item= {item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;