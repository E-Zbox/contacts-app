// icons
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// react
import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ContactThumbnail = (props) => {
    let { picture, name, phone } = props;

    return (
        <View style={styles.container}>
            <Image source={{ uri: picture?.large }} style={styles.image} />
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.phoneContainer}>
                <MaterialIcons name={"phone"} size={20} color={"white"} />
                <Text style={styles.phoneText}>{phone}</Text>
            </View>
        </View>
    );
};

export default ContactThumbnail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    nameText: {
        color: "white",
        fontSize: 20,
        fontWeight: "900",
        marginTop: 15,
    },
    phoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 5,
    },
    phoneText: {
        color: "white",
        fontSize: 18,
        fontWeight: "200",
    },
});
