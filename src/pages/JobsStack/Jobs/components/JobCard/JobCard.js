import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './JobCard.style';

const JobCard = ({job, navigateHandler}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateHandler(job)}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <Text style={styles.location}>{job.locations[0].name}</Text>
      </View>
      <Text style={styles.level}>{job.levels[0].name}</Text>
    </TouchableOpacity>
  );
};

export default JobCard;
