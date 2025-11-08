// Створіть кнопку, яка буде вмикати ліхтарик та вимикати. Виведіть статус ліхтаря.
// 'use client';
import { useState} from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';
import { Flashlight } from 'expo-flashlight';


export default function FlashlightToggle() {
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);

  const toggleFlashlight = () => {
    setIsFlashlightOn((prevState) => !prevState);
  };

  return (<>
    <View style={styles.container}>
      <Button onPress={toggleFlashlight} title={isFlashlightOn ? 'Вимкнути ліхтарик' : 'Увімкнути ліхтарик'} />
      <Text>Статус ліхтаря: {isFlashlightOn ? 'Увімкнено' : 'Вимкнено'}</Text>
    </View>
  </>);
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
