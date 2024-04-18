/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  const backgroundStyle = 'bg-neutral-100 dark:bg-slate-900 w-full h-full';

  return (
    <SafeAreaView className={backgroundStyle}>
      <Text className="bg-green-300 p-4 text-green-900 m-10 border border-solid border-green-900 rounded">
        Tailwind CSS in React Native (Nativewind)
      </Text>
    </SafeAreaView>
  );
}

export default App;
