import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider, Checkbox} from 'react-native-paper';

import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const SettingsScreen = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);

  const saveStorage = (key, value) => {
    storage.set(key, value);
  };

  return (
    <View>
      <Text variant="headlineLarge" style={{margin: 8, fontSize: 24}}>
        Pantalla Settings
      </Text>
      <TouchableOpacity onPress={goToHome} style={{margin: 8}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Ir a Home</Text>
      </TouchableOpacity>

      <Divider />

      <Text variant="bodyLarge" style={{margin: 8, fontSize: 24}}>
        Options
      </Text>

      <View style={{margin: 8, flexDirection: 'row'}}>
        <Text variant="bodyLarge" style={{margin: 8, fontSize: 16}}>
          Option 1:
        </Text>
        <Checkbox
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
            saveStorage('option1', !checked1 ? 'true' : 'false');
          }}
        />
      </View>

      <View style={{margin: 8, flexDirection: 'row'}}>
        <Text variant="bodyLarge" style={{margin: 8, fontSize: 16}}>
          Option 2:
        </Text>
        <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked2(!checked2);
            saveStorage('option2', !checked2 ? 'true' : 'false');
          }}
        />
      </View>

      <View style={{margin: 8, flexDirection: 'row'}}>
        <Text variant="bodyLarge" style={{margin: 8, fontSize: 16}}>
          Option 3:
        </Text>
        <Checkbox
          status={checked3 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked3(!checked3);
            saveStorage('option3', !checked3 ? 'true' : 'false');
          }}
        />
      </View>

      <View style={{margin: 8, flexDirection: 'row'}}>
        <Text variant="bodyLarge" style={{margin: 8, fontSize: 16}}>
          Option 4:
        </Text>
        <Checkbox
          status={checked4 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked4(!checked4);
            saveStorage('option4', !checked4 ? 'true' : 'false');
          }}
        />
      </View>

      <View>
        <Text variant="bodyLarge" style={{margin: 8, fontSize: 16}}>
          Storage:
        </Text>
        <Text variant="bodyLarge" style={{margin: 8, fontSize: 16}}>
          Option1: {JSON.stringify(storage.getString('option1'))}
          Option2: {JSON.stringify(storage.getString('option2'))}
          Option3: {JSON.stringify(storage.getString('option3'))}
          Option4: {JSON.stringify(storage.getString('option4'))}
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
