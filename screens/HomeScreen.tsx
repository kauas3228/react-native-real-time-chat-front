import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Tab Screens
import RequestScreen from "./RequestScreen";
import ProfileScreen from "./ProfileScreen";
import FriendsScreen from "./FriendsScreen";

export default function HomeScreen() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Request" component={RequestScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Friends" component={FriendsScreen} />
        </Tab.Navigator>
    )
}
