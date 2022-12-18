import { View, Text, Image } from 'react-native';
import { styles } from './styles';


export const DetailItem = ({ icon, title, infoText }) => {

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image source={icon} resizeMode='contain' style={styles.icon} />
                <Text style={styles.text}>{title}</Text>
            </View>
            <Text style={styles.text}>{infoText}</Text>
        </View>
    );
};