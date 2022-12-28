// icons
import { MaterialIcons } from "@expo/vector-icons";
// react
import { StyleSheet, View } from "react-native";
import React from "react";
// utils
import { colors } from "../utils/data";

const TabLinks = ({ handleTabPress, tabLinks }) => {
    return (
        <View style={styles.tabContainer}>
            {tabLinks.map(({ id, icon, isSelected }) => (
                <MaterialIcons
                    key={id}
                    name={icon}
                    size={24}
                    color={isSelected ? colors.blue011 : colors.white03}
                    onPress={() => handleTabPress(id)}
                />
            ))}
        </View>
    );
};

export default TabLinks;

const styles = StyleSheet.create({
    tabContainer: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-around",
        backgroundColor: colors.white01,
        shadowColor: "#002",
        elevation: 8,
    },
});
