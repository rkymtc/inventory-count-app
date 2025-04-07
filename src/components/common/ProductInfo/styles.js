import { StyleSheet } from 'react-native';

const createStyles = (colors) => StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  }
});

export default createStyles; 