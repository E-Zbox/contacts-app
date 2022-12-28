// components
import Avatar from "../components/Avatar";
// expo
import Constants from "expo-constants";
// react
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    PixelRatio,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
// utils
import { fetchContacts } from "../utils/api";
import { colors } from "../utils/data";

const itemMargin = 30;
const { width } = Dimensions.get("window");

const size = PixelRatio.roundToNearestPixel(width / 3 - itemMargin);

const Favorites = ({ navigation }) => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const handlePress = (payload) => {
        navigation.navigate("Profile", payload);
    };

    useEffect(() => {
        if (data.length == 0) {
            console.log("data.length is 0 but makes no sense", data);
            setLoading(true);
            fetchContacts(30)
                .then((res) => setData(res))
                .catch((err) => console.log(err));
        }
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            setLoading(false);
        }
    }, [data]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favorites</Text>
            {loading && <ActivityIndicator size={"large"} />}
            {!loading && data && (
                <ScrollView style={styles.scrollerContainer}>
                    <View style={styles.scroller}>
                        {data.map(({ picture, ...other }, index) => (
                            <TouchableHighlight
                                key={index}
                                style={styles.image}
                                onPress={() =>
                                    handlePress({ picture, ...other })
                                }
                            >
                                <Avatar
                                    imageStyle={styles.image}
                                    uri={picture.large}
                                />
                            </TouchableHighlight>
                        ))}
                    </View>
                </ScrollView>
            )}
        </View>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    text: {
        color: colors.white01,
        backgroundColor: colors.blue02,
        padding: 10,
        fontSize: 18,
    },
    scrollerContainer: {
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    scroller: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-around",
    },
    image: {
        width: size,
        height: size,
        borderRadius: 100,
        marginBottom: 30,
    },
});
