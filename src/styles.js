import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainView: { flex: 1, padding: 20, innerWidth: '100%' },
	maxQuoteView: { flexDirection: 'row', marginBottom: 20 },
	edit: { flex: 1, borderWidth: 1, padding: 10 },
	itemList: { flex: 1 },
	item: { padding: 20, backgroundColor: '#f0f0f0', marginVertical: 5 },
	itemSelect: { padding: 20, backgroundColor: '#5b81ae', marginVertical: 5 },
	addItemView: { flexDirection: 'row', marginTop: 20 },
});

export default styles;
