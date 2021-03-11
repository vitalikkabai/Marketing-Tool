import React from 'react';
import Slider from "react-slick";
import {makeStyles} from "@material-ui/core";

type PropsType = {
    Items: any[];
    className?: string;
};

const DashboardCarousel = (props: PropsType) => {
    const useStyles = makeStyles({
        '&.slick': {
            '& .slick-list': {
                overflow: 'visible',
                margin: '0 -25px',
                '& .slick-track': {
                    display: 'flex',
                    alignItems: 'center',
                    '& .slick-slide': {
                        margin: '0 25px',
                    }
                }
            }
        },
        '&.ul': {
            position: 'absolute',
            bottom: '-36px',
            display: 'block',
            width: '100%',
            padding: '0',
            listStyle: 'none',
            textAlign: 'center',

            '& li.slick-active': {
                '& button:before': {
                    content: '"●"'
                }
            },

            '& li': {
                position: 'relative',
                display: 'inline-block',
                width: '20px',
                height: '20px',
                padding: '0',
                cursor: 'pointer',

                '& button': {
                    fontSize: '0',
                    lineHeight: '0',
                    display: 'block',
                    width: '10px',
                    height: '10px',
                    padding: '5px',
                    cursor: 'pointer',
                    color: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    outline: 'none',
                    background: 'transparent',

                    '&:before': {
                        fontSize: '24px',
                        lineHeight: '20px',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '20px',
                        height: '20px',
                        content: '"○"',
                        textAlign: 'center',
                        color: '#4285F4',
                        '-webkit-font-smoothing': 'antialiased'
                    }
                }
            }
        }
    });

    const styles = useStyles();

    const settings = {
        dots: true,
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider className={styles["&.slick"]} dotsClass={styles["&.ul"]} {...settings}>
            {props.Items.map((item: any) => item)}
        </Slider>
    );
};

export default DashboardCarousel;
