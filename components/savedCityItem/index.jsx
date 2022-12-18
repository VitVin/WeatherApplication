import { View, Text, Image } from 'react-native';
import { styles } from './styles';


export const SavedCityItem = ({ icon, title, infoText }) => {

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <Text style={styles.text}>{infoText}</Text>
        </View>
    );
};