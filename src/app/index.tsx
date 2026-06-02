import { StyleSheet, Text, View } from 'react-native';

export default function AppEntry() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>System Initialized</Text>
      <Text style={styles.subtitle}>Base Cover Ready for Phase 1 Implementation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});
