import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Splash() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-black">
            <StatusBar barStyle={'light-content'} />
            <View>
                <Text className="text-2xl font-bold text-zinc-50">
                    React Real Time Chat
                </Text>
            </View>
        </SafeAreaView>
    )
}
