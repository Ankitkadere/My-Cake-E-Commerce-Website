import React, { useState } from "react";
import "../Catslide/style.css";
import "../../Productlist/Small";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
 
 
const CardCollection = () => {
  // Array of card data
  const cards = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7nNHraaq4PUDS2ZIR8qSWTJU_3NXqyFP-A&s",
      name: "John Doe",
      profession: "Architect & Engineer",
    },
    {
      imgSrc:
        "https://www.shutterstock.com/image-photo/birthday-cake-blue-ganache-drip-600nw-2273525387.jpg",
      name: "Jane Smith",
      profession: "Web Developer",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepoT5WxNMu4ZyZuHo6c1-7JFjMCTwR6C2Vw&s",
      name: "Alice Johnson",
      profession: "Graphic Designer",
    },
    {
      imgSrc:
        "https://previews.123rf.com/images/maxpayne222/maxpayne2221210/maxpayne222121000040/15703284-chocolate-cake-isolated-on-white-background.jpg",
      name: "Robert Brown",
      profession: "Software Engineer",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu356AVjOvblOrHFX9QWo1r1m1EY_QWnQ6hw&s",
      name: "Emily Davis",
      profession: "Project Manager",
    },
    {
      imgSrc:
        "https://thumbs.dreamstime.com/b/tasty-chocolate-cake-isolated-white-tasty-chocolate-cake-isolated-white-plate-chocolate-heart-top-110703608.jpg",
      name: "Michael Wilson",
      profession: "Data Scientist",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU1_hXAxlENzLUBpvniIaTwSwLTaSjkS5TA&sg",
      name: "Emily Davis",
      profession: "Project Manager",
    },
    {
      imgSrc:
        "https://t4.ftcdn.net/jpg/02/40/14/69/360_F_240146987_izbtAnW3ftcWSF3CsWI4PLtCEeyZae18.jpg",
      name: "Michael Wilson",
      profession: "Data Scientist",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGMAw0p773UoAS89sc9t6gWwy8Mfp7XqCkw&s",
      name: "Emily Davis",
      profession: "Project Manager",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpwq0HKQnlQNfW-WXSUlA_Nb_8Om7Q2V5OQ&s",
      name: "Michael Wilson",
      profession: "Data Scientist",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9VF_gn29LQB1kAeEEMGwGVa0flznOIYTqw&s",
      name: "Emily Davis",
      profession: "Project Manager",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Rqb2tnU56SG-_CUoJLEskHOTfDGOVaAavw&s",
      name: "Michael Wilson",
      profession: "Data Scientist",
    },
    {
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/032/873/716/non_2x/cake-isolated-on-white-background-generative-ai-photo.jpg",
      name: "Emily Davis",
      profession: "Project Manager",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgrV3SUwe_wUD2lIISHenTNxcUBkStGfC-A&s",
      name: "Michael Wilson",
      profession: "Data Scientist",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide Left function (move 10% to the left)
  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Slide Right function (move 10% to the right)
  const slideRight = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="card-slider ">
        <div className="containergrid popularproducts  ">
          <div className="flex justify-end space-x-0 mb-0 ms-0">
            <a className="text-green-600">Popular Categery</a>
          </div>
          <div className="flex justify-end space-x-4 mb-4">
            <a className="text-gray-900">
           <IoIosArrowDropleft  className="arroesbutton" onClick={slideLeft} />
            </a>
            <a className="text-gray-900">
            <IoIosArrowDropright  className="arroesbutton" onClick={slideRight} />
            </a>
          </div>
        </div>
       
        <div
          className="cardtype"
          style={{ transform: `translateX(-${currentIndex * 12.5}%)` }}
        >
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.imgSrc} alt={card.name} />
              <h3>{card.name}</h3>
              <p>{card.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardCollection;
