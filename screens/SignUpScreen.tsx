import Title from "components/ui/Title";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-lightBackground">
            <View className='animate-bounce'>
                <Title title='SignUpScreen' color="color-textPrimary" font="LeckerliOne" />
            </View>
        </SafeAreaView>
    )
}
