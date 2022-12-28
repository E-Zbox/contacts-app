// components
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
// react
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// utils
import { fetchRandomContact } from "../utils/api";
import { colors } from "../utils/data";

export default class Profile extends Component {
    state = {
        contact: {},
    };

    async componentDidMount() {
        if (this.state.contact) {
            const contact = await fetchRandomContact();
            this.setState({ contact });
        }
    }

    render() {
        // const { cell, email, fullName, phone, picture } = this.state.contact;
        const {
            route: {
                params: { cell, email, fullName, phone, picture },
            },
        } = this.props;

        console.log(">>>> render profile >>>>>>");

        return (
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <ContactThumbnail
                        name={fullName}
                        picture={picture}
                        phone={phone}
                    />
                </View>
                <View style={styles.detailsSection}>
                    <DetailListItem
                        icon="mail"
                        title="Email"
                        subtitle={email}
                    />
                    <DetailListItem
                        icon="phone"
                        title="Work"
                        subtitle={phone}
                    />
                    <DetailListItem
                        icon="smartphone"
                        title="Personal"
                        subtitle={cell}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue01,
    },
    detailsSection: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white"',
    },
});
