import Button from "components/ui/Button";
import Input from "components/ui/InputLogs";
import Title from "components/ui/Title";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SignInScreen({ navigation }: any) {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 items-center justify-center bg-lightBackground flex px-7">
                <Title title="RealTimeChat" font="LeckerliOne" color="color-textPrimary" />
                <Input label="UserName" isPassword={false} />
                <Input label="Password" isPassword={true} />
                <Button tittle="Sign In" />
                <Text className="text-xl font-ubuntu color-textSecondary">Don&apos;t have account?
                    <Text className="color-primary font-ubuntuBold"
                        onPress={() => {
                            navigation.navigate('SignUp')
                        }}
                    > Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}
