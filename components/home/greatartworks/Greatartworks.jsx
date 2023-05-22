import React, { useState } from 'react'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, StyleSheet
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './greatartworks.style'
import { COLORS, SIZES } from '../../../constants'
import ArtworkCard from '../../common/cards/artwork/ArtworkCard'

const artImages = [
  { id: '1', uri: require('../../../assets/images/artworks/Mona_Lisa.jpg') },
  { id: '2', uri: require('../../../assets/images/artworks/shuixiangtu.jpg') },
  { id: '3', uri: require('../../../assets/images/artworks/StarNight.jpg') },
  { id: '4', uri: require('../../../assets/images/artworks/Picasso_The_Weeping_Woman.jpg') },
  { id: '5', uri: require('../../../assets/images/artworks/wanye.jpg') },
  { id: '6', uri: require('../../../assets/images/artworks/Sunflower.jpg') },
  { id: '7', uri: require('../../../assets/images/artworks/zdq_lianou.jpg') },
  // 更多图片...
];

const Greatartworks = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>著名画作</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>出错了</Text>
          ) : (
            <FlatList
                data={artImages}
                renderItem={({ item }) => (
                  <ArtworkCard 
                    item={item}
                 />
                )}
              keyExtractor={item => item.id} // 为每个item生成一个唯一的key
              contentContainerStyle={{columnGap: SIZES.large}}
              horizontal
            />
          )
        }
      
      </View>
    </View>
  )
}

export default Greatartworks