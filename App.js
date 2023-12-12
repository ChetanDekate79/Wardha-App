import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BottomBar from './src/components/Bottombar';
import TabNavigator from './src/components/TabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Your other components */}
      <TabNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
