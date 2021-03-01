import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, imageRank, title }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Rank: {imageRank}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ImageDetail;
