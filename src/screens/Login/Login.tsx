import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Logo} from '../../assets/icons';

export function Login() {
  return (
    <SafeAreaView className="items-center justify-center h-full bg-primary p-5">
      <View className="w-full">
        <View className="flex-row mb-16 justify-center">
          <Logo />
          <View className="ml-5">
            <Text className="text-withe text-2xl font-bold">Fast</Text>
            <Text className="text-pink">Faça seu pedido de forma rápida</Text>
          </View>
        </View>

        <TextInput
          placeholder="Email"
          className="h-14 bg-withe-200 rounded-md mb-8"
        />

        <TextInput
          placeholder="Senha"
          className="h-14 bg-withe-200 rounded-md mb-14"
          secureTextEntry
        />

        <TouchableOpacity className="flex items-center justify-center h-14  rounded-md bg-yellow-200">
          <Text className="text-primary-200 font-bold text-base">Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-withe text-base text-center mt-14">
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
