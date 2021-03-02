import React from 'react';

type CustomProps = {
    color: string
}

const LogOutConfirmIcon: React.FC<any> = (props: CustomProps) => {
    return (
        <svg width="187" height="186" viewBox="0 0 187 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M168.667 93.7525C171.616 91.3515 171.616 86.8485 168.667 84.4476L132.059 54.6353C129.917 52.8916 126.768 53.2138 125.024 55.3551C123.281 57.4963 123.603 60.6457 125.744 62.3894L151.645 83.4819H52.51C49.0624 83.4819 46.2676 86.2767 46.2676 89.7243C46.2676 93.1718 49.0624 95.9666 52.51 95.9666H150.112L125.744 115.811C123.603 117.554 123.281 120.704 125.024 122.845C126.768 124.986 129.917 125.308 132.059 123.565L168.667 93.7525Z" fill={props.color} />
            <circle cx="93" cy="93" r="88" stroke={props.color} strokeWidth="10"/>
        </svg>
    );
};

export default LogOutConfirmIcon;
