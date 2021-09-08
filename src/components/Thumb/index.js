import React from "react";
import {Link} from 'react-router-dom'

//Styles
import { Image } from "./Thumb.style";

const Thumb = ({image,movieId,clickable}) => {
    return(
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt='thumb'/>
                </Link>
            ) : (
                <Image src={image} alt='thumb'/>
            )
            }
        </div>
    )
}

export default Thumb