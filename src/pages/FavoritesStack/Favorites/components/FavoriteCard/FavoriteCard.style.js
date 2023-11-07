import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  title_container: {
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  company: {
    fontSize: 16,
    color: '#000',
  },
  location: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 15,
    fontWeight: 'bold',
    backgroundColor: '#ef5350',
  },
  level: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#ef5350',
    fontWeight: 'bold',
  },
  unfavorite_button: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ef5350',
  },
  unfavorite_button_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
