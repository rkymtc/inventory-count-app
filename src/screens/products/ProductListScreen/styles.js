import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.lg,
    paddingBottom: Theme.spacing.sm,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Theme.borderRadius.sm,
    marginBottom: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.md,
    borderWidth: Theme.borderWidth.regular,
    overflow: 'visible', 
    zIndex: 1,
  },
  searchIcon: {
    marginRight: Theme.spacing.sm,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    height: 46,
    fontSize: 14,
  },
  clearButton: {
    padding: Theme.spacing.sm,
  },
  clearIcon: {
    fontSize: 16,
  },
  productList: {
    paddingBottom: Theme.spacing.lg,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.xl,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: Theme.spacing.md,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptySubText: {
    fontSize: 14,
    textAlign: 'center',
  }
}); 