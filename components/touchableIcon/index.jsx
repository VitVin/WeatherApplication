import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export const TouchableIcon = ({ onPress, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image source={icon} resizeMode='contain' style={styles.icon} />
        </TouchableOpacity>
    );
};