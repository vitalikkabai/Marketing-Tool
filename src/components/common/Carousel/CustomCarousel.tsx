import React, {useEffect, useRef} from "react";
import classes from "./Carousel.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as NextArrow} from "../../../assets/images/arrowRight.svg"
import {ReactComponent as PrewArrow} from "../../../assets/images/arrowLeft.svg"

import Slider from "react-slick";
import Box from "@material-ui/core/Box";


type PropsType = {
    Items: any
    className?: string
}


const CustomCarousel: React.FunctionComponent<PropsType> = ({Items, className}) => {

    let slider = useRef() as any;

    const next = () => {
        slider.slickNext();
    }
    const previous = () => {
        slider.slickPrev();
    }

    useEffect(()=>{
        if(Items.length > 3) {
            slider.slickNext();
        }
    },[Items.length]);

    return (
        <div className={classes.sliderContainer + " " + className}>
            <Box onClick={previous} className={classes.sliderArrow} style={Items.length === 0 || Items.length < 4? {display: "none"}:{}}>
                <PrewArrow/>
            </Box>
            <Slider dots={false} infinite={false} slidesToShow={3}
                    className={classes.carouselBox} arrows={false}
                    ref={c => (slider = c)}>{Items.map((item: any) => item)}</Slider>
            <Box onClick={next} className={classes.sliderArrow} style={Items.length === 0 || Items.length < 4? {display: "none"}:{}}>
                <NextArrow/>
            </Box>
        </div>

    );
}

export default CustomCarousel;
