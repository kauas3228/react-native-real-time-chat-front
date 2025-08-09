import useFontsLoader from 'hooks/useFontsLoader';
import './global.css';
import Splash from 'screens/Splash';
import { Text } from 'react-native';

export default function App() {
  const fontsLoader = useFontsLoader();

  if(!fontsLoader) {
    return <Text>Carregando</Text>
  }

  return (
    <Splash />
  );
}
