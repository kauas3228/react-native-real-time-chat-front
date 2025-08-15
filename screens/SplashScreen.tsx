import Title from "components/ui/Title";
import { SafeAreaView, StatusBar, View} from "react-native";

export default function SplashScreen() {

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-lightBackground">
            <StatusBar barStyle={'light-content'} />
            <View className='animate-bounce'>
                <Title title='RealTimeChat' color="color-textPrimary" font="LeckerliOne"/>
            </View>
        </SafeAreaView>
    )
}
