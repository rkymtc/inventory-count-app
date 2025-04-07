import { StyleSheet, Platform } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  card: {
    borderRadius: Theme.borderRadius.md,
    marginVertical: Theme.spacing.sm,
    marginHorizontal: Theme.spacing.lg,
    padding: Theme.spacing.md + 2,
  },
  mainContent: {
    flexDirection: 'row',
  },
  codeSection: {
    marginRight: Theme.spacing.md + 2,
    alignItems: 'center',
  },
  kodBadge: {
    paddingHorizontal: Theme.spacing.sm + 2,
    paddingVertical: Theme.spacing.xs,
    borderRadius: Theme.borderRadius.lg,
    marginBottom: Theme.spacing.sm,
  },
  kodLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  noImageContainer: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Theme.borderRadius.round,
  
  },
  productIcon: {
    fontSize: 28,
  },
  detailsSection: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: Theme.spacing.sm,
    letterSpacing: 0.2,
  },
  detailsContainer: {
    borderRadius: Theme.borderRadius.sm,
    padding: Theme.spacing.sm,
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing.xs + 2,
  },
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  stockItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  stockLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: Theme.spacing.xs,
  },
  stockValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.spacing.xs,
    paddingTop: Theme.spacing.xs,
    borderTopWidth: Theme.borderWidth.regular,
  },
  priceLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },
}); 