import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  button: {
    height: 48,
    borderRadius: Theme.borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg,
    marginVertical: Theme.spacing.sm,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: Theme.spacing.sm,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
}); 