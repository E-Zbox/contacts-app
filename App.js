// expo
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// react
import React from "react";
import { StyleSheet } from "react-native";
// routes
import MainNavigator from "./routes/MainNavigator";
// utils
import { colors } from "./utils/data";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="MainNavigator"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.white01,
                        },
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="MainNavigator"
                        component={MainNavigator}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="light" backgroundColor={colors.blue02} />
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: Constants.statusBarHeight,
    },
});
