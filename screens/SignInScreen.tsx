import Title from "components/ui/Title";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-lightBackground">
            <View className='animate-bounce'>
                <Title title='SignInScreen' color="color-textPrimary" font="LeckerliOne" />
            </View>
        </SafeAreaView>
    )
}
