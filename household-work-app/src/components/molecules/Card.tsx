import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { SquareCard } from '../atoms/card/SquareCard';

type TestArray = {
  id: number;
  title: string;
  subTitle: string;
};

const Array: TestArray[] = [
  {
    id: 0,
    title: 'Apple',
    subTitle: 'Fruits',
  },
  {
    id: 1,
    title: 'Tomato',
    subTitle: 'Vegetables',
  },
  {
    id: 2,
    title: 'water',
    subTitle: 'drink',
  },
];

export const Card: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={Array}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => {
              return <SquareCard title={item.title} subTitle={item.subTitle} />;
            }}
            numColumns={2}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
            }}></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
