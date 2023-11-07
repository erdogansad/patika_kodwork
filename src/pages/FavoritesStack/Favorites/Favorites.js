import {Text, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Favorites.style';
import FavoriteCard from './components/FavoriteCard/FavoriteCard';
import {removeFavorite} from '../../../redux/slices/favoritesSlice';

const Favorites = ({navigation}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);

  const removeFavoriteHandler = job => {
    dispatch(removeFavorite(job));
  };

  const navigationHandler = job => {
    navigation.navigate('JobDetail', {job});
  };

  if (favorites === null || favorites.length === 0) {
    return (
      <View style={styles.not_found_container}>
        <Text style={styles.not_found_text}>No favorites added yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={favorites}
        renderItem={({item}) => (
          <FavoriteCard
            job={item}
            removeFavoriteHandler={removeFavoriteHandler}
            navigationHandler={navigationHandler}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Favorites;
