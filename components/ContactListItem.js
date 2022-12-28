// react
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
// utils
import { colors } from "../utils/data";

const ContactListItem = (props) => {
    let { fullName, phone, uri, handlePress } = props;
    return (
        <TouchableHighlight
            activeOpacity={0.85}
            underlayColor={colors.blue011}
            onPress={handlePress}
            style={styles.contact}
        >
            <>
                <Image style={styles.image} source={{ uri }} />
                <View style={styles.textCard}>
                    <Text style={styles.nameText}>{fullName}</Text>
                    <Text style={styles.phoneText}>{phone}</Text>
                </View>
            </>
        </TouchableHighlight>
    );
};

export default ContactListItem;

const styles = StyleSheet.create({
    contact: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomColor: colors.white02,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 30,
    },
    textCard: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 10,
    },
    nameText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    phoneText: {
        color: colors.blue01,
    },
});
