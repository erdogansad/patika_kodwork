import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FavoriteCard.style';

const FavoriteCard = ({job, navigationHandler, removeFavoriteHandler}) => {
  return (
    <TouchableOpacity
      onPress={() => navigationHandler(job)}
      style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <Text style={styles.location}>{job.locations[0].name}</Text>
      </View>
      <Text style={styles.level}>{job.levels[0].name}</Text>
      <TouchableOpacity
        onPress={() => removeFavoriteHandler(job)}
        style={styles.unfavorite_button}>
        <Text style={styles.unfavorite_button_text}>Remove</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
