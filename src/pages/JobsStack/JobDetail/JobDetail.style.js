import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  detail_container: {
    gap: 5,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  location: {
    textAlign: 'center',
  },
  location_title: {
    fontWeight: 'bold',
    color: '#ef5350',
  },
  location_text: {
    color: 'black',
    fontWeight: 'bold',
  },
  job: {
    textAlign: 'center',
  },
  job_title: {
    fontWeight: 'bold',
    color: '#ef5350',
  },
  job_text: {
    color: 'black',
    fontWeight: 'bold',
  },
  job_detail: {
    flex: 1,
  },
  job_detail_title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ef5350',
    paddingVertical: 10,
  },
  job_detail_text: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  button_submit: {
    flexBasis: '47%',
    backgroundColor: '#ef5350',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button_submit_text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  button_favorite: {
    flexBasis: '47%',
    backgroundColor: '#ef5350',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button_favorite_text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
