import { Text, TouchableOpacity } from "react-native";


interface buttonProps {
    tittle: string
}
export default function Button({tittle}: buttonProps) {
  return (
    <TouchableOpacity className="my-4 w-full h-16 flex items-center justify-center bg-darkBackground rounded-full">
        <Text className="color-white text-2xl font-ubuntuBold">{tittle}</Text>
    </TouchableOpacity>
  )
}
