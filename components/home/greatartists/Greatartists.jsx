import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './greatartists.style';
import ArtistCard from '../../common/cards/artist/ArtistCard';

const artists = ["达芬奇", "张大千", "梵高", "吴冠中", "毕加索"];

const Greatartists = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>著名画家</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={artists}
        renderItem={({ item }) => (
          <ArtistCard
            <View style={styles.artistContainer}>
              <Text style={styles.artistName}>{item}</Text>
              <TouchableOpacity style={styles.artistButton}>
                <Text style={styles.artistButtonText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          />
        )}
        keyExtractor={item => item}
      />
      
    </View>
    
  );
}

export default Greatartists;
