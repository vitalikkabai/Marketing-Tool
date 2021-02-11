import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./Carousel.module.scss"


type PropsType = {
    Items: any
    className?: string
}

const CustomCarousel: React.FunctionComponent<PropsType> = ({ Items, className}) => {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        }
    };

    return (
        <div className={classes.outerBox}>
            <Carousel responsive={responsive}
                      className={classes.carouselBox}
                      itemClass={classes.CarouselItem}
                      containerClass={classes.CarouselContainer}>
                {Items.map((item: any) => item)}
            </Carousel>
        </div>
    );
}

export default CustomCarousel;