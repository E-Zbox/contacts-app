// api
import { fetchContacts } from "../utils/api";
// components
import ContactListItem from "../components/ContactListItem";
// react
import React, { Component } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

const keyExtractor = ({ phone }) => phone;

export default class Contacts extends Component {
    state = {
        contacts: [],
        loading: true,
        error: false,
    };

    handlePress = (payload) => {
        const { navigation } = this.props;

        navigation.navigate("Profile", payload);
    };

    renderContact = ({ item }) => {
        const {
            fullName,
            picture: { large, medium, thumbnail: uri },
            phone,
        } = item;
        return (
            <ContactListItem
                fullName={fullName}
                phone={phone}
                uri={uri}
                handlePress={() => this.handlePress(item)}
            />
        );
    };

    async componentDidMount() {
        try {
            const contacts = await fetchContacts();

            this.setState({
                contacts: contacts && contacts,
                loading: false,
                error: false,
            });
        } catch (e) {
            this.setState({
                loading: false,
                error: true,
            });
        }
    }

    render() {
        const { contacts, error, loading } = this.state;
        const contactsSorted = contacts.sort((a, b) =>
            a.name.last.localeCompare(b.name.last)
        );
        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size={"large"} />}
                {error && <Text>Error...</Text>}
                {!loading && !error && (
                    <FlatList
                        data={contactsSorted}
                        keyExtractor={keyExtractor}
                        renderItem={this.renderContact}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
    },
});
