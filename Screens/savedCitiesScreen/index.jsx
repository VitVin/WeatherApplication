import { StatusBar, ScrollView, View, Text } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { DetailsTitle } from '../../components/detailsTitle';
import { useState } from 'react';
import { SavedCityItem } from '../../components/savedCityItem';
import { Input } from '../../components/input';
import { FlatList } from 'react-native-gesture-handler';

export const SavedCitiesScreen = ({ navigation }) => {
    const [cityData, setCityData] = useState();
    const [data, setData] = useState({});
    const [savedCities, setSavedCities] = useState([])

    const qyq = () => {
        const arr = [{ name: 'john', age: 10 }, { age: 25 }]
        return (
            arr.map(item => (<SavedCityItem title={item.name} infoText={item.age} />))
        )
    }

    const createNewItem = () => {
        return (
            arr.map(item => (<SavedCityItem title={item.name} infoText={item.age} />))
        )
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['rgb(12,40,226)', 'rgb(42,179,234)']}
                style={styles.container}>



                <StatusBar hidden={true} />
                <DetailsTitle title={'Saved Cities'} />

                <View style={{ height: '7%', width: '100%' }}>
                    <Input setData={setData} />
                </View>

              
              
            </LinearGradient >
        </ScrollView>
    );
};