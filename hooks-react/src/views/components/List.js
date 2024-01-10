import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import shops from '../../service/shops';
import Producer from "./Producer";

export default function List({top: Top}) {
  const [list, setList] = useState([]);

  // por padrão o array vazio no useEffect faz com que o hook seja executado apeans uma vez
  useEffect(() => {
    const owners = shops();
    setList(owners.list)
  }, [])

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