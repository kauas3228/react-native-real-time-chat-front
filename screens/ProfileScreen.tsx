import Title from "components/ui/Title";
import { SafeAreaView, View } from "react-native";

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-lightBackground">
            <View className='animate-bounce'>
                <Title title='Profile' color="color-textPrimary" font="LeckerliOne" />
            </View>
        </SafeAreaView>
    )
}
