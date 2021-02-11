import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./Carousel.module.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


type PropsType = {
    Items: any
    className?: string
}

type ArrowPropsType = {
    onClick?: any
}

const arrowStyle = {
    background: "transparent",
    border: 0,
    color: "#fff",
    fontSize: "80px"
};

const CustomRight: React.FunctionComponent<ArrowPropsType> = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
        <ArrowForwardIcon style={{ fontSize: "50px" }} />
    </button>
);

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
                      containerClass={classes.CarouselContainer}
                      customRightArrow={<CustomRight />}>
                {Items.map((item: any) => item)}
            </Carousel>
        </div>
    );
}

export default CustomCarousel;