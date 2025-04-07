import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: Theme.spacing.lg,
  },
  formContainer: {
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.xl,
    marginTop: Theme.spacing.xl,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: Theme.spacing.xl,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  inputsContainer: {
    marginBottom: Theme.spacing.xl,
  },
  buttonsContainer: {
    gap: Theme.spacing.md,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logoWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  userInfo: {
    fontSize: 14,
    marginBottom: 6,
  },
  dateInfo: {
    fontSize: 14,
    marginBottom: 6,
  },
  versionInfo: {
    fontSize: 14,
  },
}); 