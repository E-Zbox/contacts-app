import { Image } from "react-native";
import React from "react";

const Avatar = ({ imageStyle, uri }) => {
    return <Image source={{ uri }} style={imageStyle} />;
};

export default Avatar;
