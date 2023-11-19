import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Divider,
  TextInput,
  RadioButton,
  Dialog,
  Portal,
  Icon,
  Snackbar,
} from 'react-native-paper';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const [checked, setChecked] = React.useState('first');

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [visibleSB, setVisibleSB] = React.useState(false);

  const onToggleSnackBar = () => setVisibleSB(!visible);

  const onDismissSnackBar = () => setVisibleSB(false);

  storage.set('user', 'Rodrigo');
  console.log(storage.getString('user'));

  return (
    <ScrollView>
      <View>
        <Text variant="headlineLarge" style={{margin: 8, fontSize: 24}}>
          Pantalla Home
        </Text>
        <TouchableOpacity onPress={goToSettings} style={{margin: 8}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Ir a Settings</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 16, fontWeight: 'bold', margin: 8}}>
          Un Boton
        </Text>
        <Button
          icon="account"
          mode="contained"
          style={{margin: 8}}
          onPress={showDialog}>
          Abre un dialogo
        </Button>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Atencion</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">
                  Esta informacion es muy importante!!!!
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cerrar</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>

        <Divider />

        <Text style={{fontSize: 16, fontWeight: 'bold', margin: 8}}>
          Un Input
        </Text>
        <TextInput
          label="un label"
          mode="outlined"
          style={{margin: 8}}
          placeholder="escribe aqui"
        />

        <Divider />

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', margin: 8}}>
            Un Radio Button
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 8,
            }}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
        </View>

        <Divider />

        <Text style={{fontSize: 16, fontWeight: 'bold', margin: 8}}>
          Un icono grande
        </Text>
        <Icon source="camera" color={'black'} size={48} />

        <Divider />

        <Text style={{fontSize: 16, fontWeight: 'bold', margin: 8}}>
          Un Snackbar
        </Text>
        <View style={{margin: 8}}>
          <Button onPress={onToggleSnackBar} mode="contained">
            {visible ? 'Ocultar' : 'Mostrar snackbar'}
          </Button>
          <Snackbar
            visible={visibleSB}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Cerrar',
              onPress: () => {
                // Do something
              },
            }}>
            Un aviso muy importante...
          </Snackbar>
        </View>

        <Divider />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
