import { View, Text } from 'react-native';
import { styles } from './styles';


export const DetailsTitle = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};