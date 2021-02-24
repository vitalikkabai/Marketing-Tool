import React, { useEffect, useRef } from 'react';
import classes from './Carousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as NextArrow } from '../../../assets/images/arrowRight.svg';
import { ReactComponent as PrewArrow } from '../../../assets/images/arrowLeft.svg';

import Slider from 'react-slick';
import Box from '@material-ui/core/Box';

type PropsType = {
    Items: any;
    className?: string;
    position: string;
};

const CustomCarousel: React.FunctionComponent<PropsType> = ({ Items, className, position }) => {
    let slider = useRef() as any;

    const next = () => {
        slider.slickNext();
    };
    const previous = () => {
        slider.slickPrev();
    };

    useEffect(() => {
        if (Items.length > 2) {
            slider.slickNext();
        }
    }, [Items.length]);

    //ToDo fix slick next event on items degrees

    return (
        <div
            style={
                position === 'vertical'
                    ? { flexDirection: 'column' }
                    : { flexDirection: 'row', marginTop: '20px' }
            }
            className={classes.sliderContainer + ' ' + className}>
            <Box width="25px" height="25px">
                <Box
                    onClick={previous}
                    className={
                        classes.sliderArrow +
                        ' ' +
                        (position === 'vertical' ? classes.rotateArrow : '')
                    }
                    style={
                        Items.length === 0 || Items.length < (position === 'vertical' ? 4 : 5)
                            ? { display: 'none' }
                            : {}
                    }>
                    <PrewArrow />
                </Box>
            </Box>
            <Slider
                dots={false}
                infinite={false}
                speed={200}
                slidesToShow={position === 'vertical' ? 3 : 4}
                vertical={position === 'vertical' ? true : false}
                verticalSwiping={position === 'vertical' ? true : false}
                className={
                    position === 'vertical'
                        ? classes.carouselBoxVertical
                        : classes.carouselBoxHorizontal
                }
                arrows={false}
                ref={(c) => (slider = c)}>
                {Items.map((item: any) => item)}
            </Slider>
            <Box width="25px" height="25px">
                <Box
                    onClick={next}
                    className={
                        classes.sliderArrow +
                        ' ' +
                        (position === 'vertical' ? classes.rotateArrow : '')
                    }
                    style={
                        Items.length === 0 || Items.length < (position === 'vertical' ? 4 : 5)
                            ? { display: 'none' }
                            : {}
                    }>
                    <NextArrow />
                </Box>
            </Box>
        </div>
    );
};

export default CustomCarousel;
