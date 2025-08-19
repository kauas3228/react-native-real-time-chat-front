import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Tab Screens
import RequestScreen from "./RequestScreen";
import ProfileScreen from "./ProfileScreen";
import FriendsScreen from "./FriendsScreen";
import colors from "assets/colors/colors";

export default function HomeScreen() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                headerLeft: () => (
                    <View className="ml-3 mr-3">
                        <Image 
                        className="w-12 h-12 rounded-full bg-receivedMessage"
                        source={require('../assets/images/profile.png') } />
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity className="mr-4">
                        <FontAwesomeIcon icon='magnifying-glass' size={22} color={colors.primary} />
                    </TouchableOpacity>
                ),
                tabBarIcon: ({ focused, color, size}) => {
                    const icons: Record<string, any> = {
                        Request: 'bell',
                        Profile: 'user',
                        Friends: 'inbox'
                    }

                    const icon = icons[route.name];

                    return (
                        <FontAwesomeIcon icon={icon} size={25} color={color} />
                    )
                },
                tabBarActiveTintColor: `${colors.primary}`,
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen name="Request" component={RequestScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Friends" component={FriendsScreen} />
        </Tab.Navigator>
    )
}
