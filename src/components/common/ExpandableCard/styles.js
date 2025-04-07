import { StyleSheet } from 'react-native';

const createStyles = (colors) => StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    padding: 16,
    paddingTop: 0,
  }
});

export default createStyles; 