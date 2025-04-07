import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.spacing.lg,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: Theme.spacing.lg,
    padding: Theme.spacing.xs,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  rightSection: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: Theme.spacing.lg,
    padding: Theme.spacing.xs,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeMenu: {
    width: '80%',
    maxWidth: 300,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  themeMenuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  themeMenuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  activeThemeItem: {
    backgroundColor: 'rgba(26, 95, 156, 0.1)',
  },
  themeMenuItemText: {
    fontSize: 16,
  }
}); 