// icons
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// react
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
// utils
import { colors } from "../utils/data";

const DetailListItem = ({ icon, subtitle, title }) => {
    return (
        <TouchableHighlight
            activeOpacity={0.85}
            underlayColor="#333d3f3c"
            style={styles.container}
            onPress={() => {}}
        >
            <>
                <MaterialIcons name={icon} size={24} />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.subtitleText}>{subtitle}</Text>
                </View>
            </>
        </TouchableHighlight>
    );
};

export default DetailListItem;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "white",
        borderBottomColor: colors.white02,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 15,
    },
    titleText: {
        fontSize: 18,
        fontFamily: "Roboto",
        letterSpacing: 0.3,
    },
    subtitleText: {
        fontSize: 14,
        color: colors.blue01,
    },
});
