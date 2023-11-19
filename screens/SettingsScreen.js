import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Pantalla Settings</Text>
      <TouchableOpacity onPress={goToHome}>
        <Text>Ir a Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
