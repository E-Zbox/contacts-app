// components
import Avatar from "../components/Avatar";
// constants
import Constants from "expo-constants";
// icons
import { MaterialIcons } from "@expo/vector-icons";
// react
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// utils
import { fetchRandomContact } from "../utils/api";
import { colors } from "../utils/data";

const size = 150;

const User = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        if (Object.entries(data).length == 0) {
            setIsLoading(true);
            fetchRandomContact()
                .then((res) => setData(res))
                .catch((err) => console.log(err));
        }
    }, []);

    useEffect(() => {
        if (Object.entries(data).length > 0) {
            setIsLoading(false);
        }
    }, [data, setData]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Me</Text>
            </View>
            {isLoading ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <>
                    <Avatar
                        imageStyle={styles.image}
                        uri={data.picture?.large}
                    />
                    <Text style={styles.name}>{data.fullName}</Text>
                    <Text style={styles.phone}>{data.phone}</Text>
                </>
            )}
        </View>
    );
};

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue01,
        marginTop: Constants.statusBarHeight,
    },
    header: {
        height: 60,
        width: "100%",
        top: 0,
        position: "absolute",
        justifyContent: "center",
        paddingHorizontal: 15,
        backgroundColor: colors.blue01,
        shadowColor: "#000",
        elevation: 15,
    },
    headerText: {
        fontSize: 20,
        color: colors.white01,
    },
    image: {
        width: size,
        height: size,
        borderRadius: Number(0.75 * size),
        marginBottom: 30,
    },
    name: {
        fontSize: 20,
        fontWeight: "900",
    },
    phone: {
        fontSize: 16,
    },
});
