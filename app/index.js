import { useState } from 'react';
import { View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Greatartists, Greatartworks, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: ""

                }}
            />
            <FlatList
                contentContainerStyle={{ padding: SIZES.medium }}
                data={[
                    { key: 'Welcome', component: <Welcome /> },
                    { key: 'Greatartworks', component: <Greatartworks /> },
                    { key: 'Greatartists', component: <Greatartists /> },
                ]}
                renderItem={({ item }) => item.component}
            />



            {/* <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ 
                        flex: 1, 
                        padding: SIZES.medium 
                    }}
                >
                    <Welcome 

                    />
                    
                    <Greatartworks />
                    
                    <Greatartists />
                    
                </View>
            </ScrollView> */}

        </SafeAreaView>
    );
}

export default Home;