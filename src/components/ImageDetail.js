import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>Image Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ImageDetail;
