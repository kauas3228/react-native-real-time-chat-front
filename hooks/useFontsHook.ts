import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

export default function useFontsHook() {
    const [fontLoader] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
        Ubuntu_400Regular,
        Ubuntu_700Bold,
        LeckerliOne: require('../assets/fonts/LeckerliOne-Regular.ttf'),
    });

    return fontLoader;
}