import { View, Text, Image } from 'react-native';
import { styles } from './styles';


export const NoCityBackground = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Choose City to search</Text>
            <Image source={require("../../assets/icons/ArrowUp.png")} resizeMode='contain' style={styles.icon} />
        </View>
    );
};