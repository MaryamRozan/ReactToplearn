import React from 'react';
import { Img } from 'react-image';
import config from '../../services/config.json';
import ScaleLoader from "react-spinners/ScaleLoader";
 

const ShowImage = ({image}) => {
    return (
        <Img src={[`${config.toplearnapi}/${image}`,
        "https://via.placeholder.com/150*100"
    ]}
    loader={
        <ScaleLoader loading={true} color="#2aaf27"/>
    }
    />
      );
}
 
export default ShowImage;