import React from 'react';
import LottieView from 'lottie-react-native';
import spinner from '../assets/spinner.json';

const LoadingSpinner = ({w, h}) => {
  return (
    <LottieView source={spinner} autoPlay loop style={{width: w, height: h}} />
  );
};

export default LoadingSpinner;
