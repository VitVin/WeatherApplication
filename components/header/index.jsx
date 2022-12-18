import { View, Image, TouchableOpacity } from 'react-native';
import { Input } from '../input';
import { styles } from './styles';
import { useState } from 'react';
import { TouchableIcon } from '../touchableIcon';


export const Header = ({ setData, navigation }) => {
    const [searchVisible, setSearchVisible] = useState(false);

    return (
        <View style={styles.container}>
            {searchVisible ? <Input setData={setData} visible={setSearchVisible} /> :
                <>
                    <TouchableIcon icon={require("../../assets/icons/City.png")} onPress={() => navigation.navigate('SavedCitiesScreen')} />
                    <TouchableIcon icon={require("../../assets/icons/Search.png")} onPress={() => setSearchVisible(true)} />
                </>
            }
        </View >
    );
}