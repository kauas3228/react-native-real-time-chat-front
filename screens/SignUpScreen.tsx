import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

// Components
import Button from "components/ui/Button";
import Input from "components/ui/InputLogs";
import Title from "components/ui/Title";

export default function SignUpScreen({ navigation }: any) {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 items-center justify-center bg-lightBackground flex px-7">
                <Title title="Sign Up" font="ubuntuBold" color="color-textPrimary" />
                <Input label="UserName" isPassword={false} />
                <Input label="First Name" isPassword={false} />
                <Input label="Last Name" isPassword={false} />
                <Input label="Password" isPassword={true} />
                <Input label="Retype Password" isPassword={true} />
                <Button tittle="Sign Up" />
                <Text className="text-xl font-ubuntu color-textSecondary">Already have an account?
                    <Text className="color-primary font-ubuntuBold"
                        onPress={() => {
                            navigation.navigate('SignIn')
                        }}
                    > Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}
