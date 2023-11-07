import {Text, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchJobs} from '../../../redux/slices/jobsSlice';
import JobCard from './components/JobCard/JobCard';
import styles from './Jobs.style';
import LoadingSpinner from '../../../components/LoadingSpinner';

const Jobs = ({navigation}) => {
  const dispatch = useDispatch();
  const {jobs, loading, error} = useSelector(state => state.jobs);

  useEffect(() => {
    if (jobs === null) {
      dispatch(fetchJobs());
    }
  }, [dispatch, jobs]);

  const navigateHandler = job => {
    navigation.navigate('JobDetail', {job});
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LoadingSpinner w={48} h={48} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={jobs}
        renderItem={({item}) => (
          <JobCard job={item} navigateHandler={navigateHandler} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Jobs;
