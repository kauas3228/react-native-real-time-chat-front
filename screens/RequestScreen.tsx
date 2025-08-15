import Title from "components/ui/Title";
import { SafeAreaView, View } from "react-native";

export default function RequestScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-lightBackground">
            <View className='animate-bounce'>
                <Title title='Request' color="color-textPrimary" font="LeckerliOne" />
            </View>
        </SafeAreaView>
    )
}
