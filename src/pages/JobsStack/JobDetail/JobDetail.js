import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RenderHTML} from 'react-native-render-html';
import styles from './JobDetail.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../../redux/slices/favoritesSlice';

const JobDetail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {job} = route.params;
  const {favorites} = useSelector(state => state.favorites);
  const [isFavorited, setFavorited] = useState(false);

  useEffect(() => {
    if (favorites.some(favorite => favorite.id === job.id)) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [favorites, job.id]);

  const favoriteHandler = j => {
    if (favorites.some(favorite => favorite.id === j.id)) {
      dispatch(removeFavorite(j));
    } else {
      dispatch(addFavorite(j));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: job.name,
    });
  }, [navigation, job]);

  return (
    <View style={styles.container}>
      <View style={styles.detail_container}>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.location}>
          <Text style={styles.location_title}>Locations: </Text>
          <Text style={styles.location_text}>{job.locations[0].name}</Text>
        </Text>
        <Text style={styles.job}>
          <Text style={styles.job_title}>Job Level: </Text>
          <Text style={styles.job_text}>{job.levels[0].name}</Text>
        </Text>
      </View>
      <View style={styles.job_detail}>
        <Text style={styles.job_detail_title}>Job Detail</Text>
        <ScrollView style={styles.job_detail_text}>
          <RenderHTML
            contentWidth={Dimensions.get('window').width}
            source={{html: job.contents}}
          />
        </ScrollView>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.button_submit}>
          <Ionicons name="log-in" size={24} color="white" />
          <Text style={styles.button_submit_text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => favoriteHandler(job)}
          style={styles.button_favorite}>
          <Ionicons
            name={isFavorited ? 'heart-dislike' : 'heart'}
            size={24}
            color="white"
          />
          <Text style={styles.button_favorite_text}>
            {isFavorited ? 'Unfavorite' : 'Favorite'} Job
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetail;
