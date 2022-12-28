// components
import TabLinks from "../components/TabLinks";
// navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// react
import React, { useEffect, useState } from "react";
// screen
import Contacts from "../screens/Contacts";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import User from "../screens/User";
// utils
import { tabLinks as _tabLinks } from "../utils/data";

const Stack = createNativeStackNavigator();

const MainNavigator = ({ navigation, route }) => {
    const [tabLinks, setTabLinks] = useState(_tabLinks);

    const handleTabPress = (tabId) => {
        let updatedTabLinks = tabLinks.map(({ id, isSelected, ...others }) => ({
            id,
            isSelected: id === tabId,
            ...others,
        }));
        setTabLinks(updatedTabLinks);
    };

    useEffect(() => {
        let selectedTab = tabLinks.find(({ isSelected }) => isSelected);
        navigation.navigate(selectedTab.name);
    }, [tabLinks]);

    return (
        <>
            <Stack.Navigator
                initialRouteName="Contacts"
                screenOptions={{ headerShown: true }}
            >
                <Stack.Group>
                    <Stack.Screen name="Contacts" component={Contacts} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Group>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Favorites" component={Favorites} />
                    <Stack.Screen name="User" component={User} />
                </Stack.Group>
            </Stack.Navigator>
            <TabLinks handleTabPress={handleTabPress} tabLinks={tabLinks} />
        </>
    );
};

export default MainNavigator;
