import React from "react";
import PropTypes from 'prop-types'

//Styles
import {Wrapper,Image} from './Actor.style'


const Actor = ({name,character,imgUrl}) => {
    return (
        <Wrapper>
            <Image src={imgUrl} alt='actor'/>
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}


Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Actor