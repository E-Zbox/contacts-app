// navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screen
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const ContactsProfileNavigator = () => (
    <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
);

export default ContactsProfileNavigator;
