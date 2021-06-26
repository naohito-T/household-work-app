import React from 'react';
import { Card } from 'react-native-elements';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

interface Props {
  title: string;
  subTitle: string;
}

export const SquareCard: React.FC<Props> = (props: Props) => {
  return (
    <Card
      containerStyle={styles.containerStyle}
      wrapperStyle={styles.wrapperStyle}>
      <Card.Image
        source={{
          uri: 'https://source.unsplash.com/random',
        }}>
        <View style={styles.viewStyle}>
          <Text>{props.title}</Text>
          <Text>{props.subTitle}</Text>
        </View>
      </Card.Image>
    </Card>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width; // 端末画面横幅を取得しCardをその半分以下に指定
const styles = StyleSheet.create({
  containerStyle: {
    width: ITEM_WIDTH / 2.3,
    height: ITEM_WIDTH / 2.3,
    margin: 10,
    borderRadius: 8,
    padding: 0,
  },
  imageStyle: {
    flex: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
  },
  imageWrapperStyle: {
    flex: 1,
  },
  wrapperStyle: {
    flex: 1,
    padding: 0,
  },
  viewStyle: {
    padding: 10,
    flex: 1,
  },
});
