import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

const CarouselSlide = () => {
  const items = [
    {
      id: "Banner img 1",
      image: "assets/sunset.jpg",
      caption1:"Banner 1",
      caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: "Banner img 2",
      image: "assets/flying-bird.jpg",
      caption1:"Banner 2",
      caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: "Banner img 3",
      image: "assets/city.jpg",
      caption1:"Banner 3",
      caption2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};



export default CarouselSlide;
