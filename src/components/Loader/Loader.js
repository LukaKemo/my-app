import React from 'react';
import Loader from "react-loader-spinner";

const Loading = () => {
    const style = ""
    return (
        <Loader
        type="ThreeDots"
        color="#e4b43c"
        height={100}
        width={100}
        timeout={900} 
        />
    );
}

export default Loading;