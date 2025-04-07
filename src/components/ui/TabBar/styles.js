import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#9c1a1a',
    ...Theme.shadows.large,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 54,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Theme.spacing.sm,
    position: 'relative',
  },
  activeTab: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  iconText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  activeIconText: {
    color: '#fff',
  },
  tabText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginTop: Theme.spacing.xs,
    fontWeight: 'normal',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    height: Theme.borderWidth.thick + 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: Theme.borderRadius.xs,
    borderTopRightRadius: Theme.borderRadius.xs,
  }
}); 