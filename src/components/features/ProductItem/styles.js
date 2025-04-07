import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listItem: {
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  productInfo: {
    flex: 1,
  },
  productCode: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 12,
    marginVertical: 4,
    fontWeight: 'bold',
  },
  productAmount: {
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    marginRight: 8,
    padding: 4,
  },
  acceptButton: {
    padding: 4,
  },
}); 