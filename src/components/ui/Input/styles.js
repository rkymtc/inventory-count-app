import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.xs,
  },
  labelContainer: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  multilineLabel: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  separator: {
    marginLeft: Theme.spacing.xs,
    marginRight: Theme.spacing.xs,
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: Theme.borderWidth.regular,
    paddingBottom: Theme.spacing.xs + 2,
    paddingTop: Theme.spacing.xs,
  },
  disabledInputWrapper: {
    borderRadius: Theme.borderRadius.xs,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingVertical: Theme.spacing.xs + 1,
  },
  rightContent: {
    marginLeft: Theme.spacing.sm + 2,
    padding: Theme.spacing.xs + 1,
  },
  calendarButton: {
    padding: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.xs
  },
}); 