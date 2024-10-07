/*
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, useWindowDimensions } from 'react-native';
import { getCategories } from '../../lib/fetchProducts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CategoryItem } from '../molecules/CategoryItem';

type Category = {
  id: number,
  name: string,
  image: string,
  creationAt: string,
  updatedAt: string,
};

export default function DonationScreenPage() {
  const insets = useSafeAreaInsets();

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CategoryItem category={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row} // alinear columnas
        key={(categories.length > 0) ? 'fixed-columns' : 'dynamic-columns'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  //importante
  row: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});*/