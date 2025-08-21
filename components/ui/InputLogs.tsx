import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "assets/colors/colors";

interface inputProps {
  label: string,
  isPassword: boolean
}

export default function Input({ label, isPassword }: inputProps) {
  const [hidePassword, setHidePassword] = useState(isPassword);

  return (
    <View className="w-full py-4 flex gap-2">
      <Text className="px-3 text-xl font-ubuntuBold">{label}</Text>
      <TextInput
        secureTextEntry={hidePassword}
        className="p-4 text-2xl bg-receivedMessage h-auto w-full font-ubuntuBold rounded-full color-textPrimary"
      >
      </TextInput>


      {/* Show and Hide Passowrd */}

      {isPassword && (
        <TouchableOpacity
          className="absolute right-4 bottom-9 translate-y-1"
          onPress={() => setHidePassword(!hidePassword)}
        >
          {hidePassword ? (
            <FontAwesomeIcon icon={'eye'} size={24} color={colors.textPrimary} />
          ) : (
            <FontAwesomeIcon icon={'eye-slash'} size={24} color={colors.textPrimary} />
          )}
        </TouchableOpacity>
      )}

    </View>
  )
}
