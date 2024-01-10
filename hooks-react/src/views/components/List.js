import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Producer from "./Producer";
import useList from "../../hooks/useList";

export default function List({top: Top}) {
  const list = useList();

  return (
    <>
      <Top />
      <View style={styles.list_boxes}>
          <Text style={styles.shops}>Produtores</Text>
          <FlatList 
          data={list} 
          renderItem={({item}) => <Producer {...item} />} 
          keyExtractor={({id}) => id} />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  shops: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  }
});