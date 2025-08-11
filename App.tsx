import useFontsHook from 'hooks/useFontsHook';
import './global.css';
import Splash from 'screens/Splash';
import { Text } from 'react-native';

export default function App() {
  const fontsLoader = useFontsHook();

  if (!fontsLoader) {
    return <Text>Carregando</Text>
  }

  return (
    <Splash />
  );
}
