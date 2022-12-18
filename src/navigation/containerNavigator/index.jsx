import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { DrawerNavigator } from "../drawerNavigator";
import { StackNavigator } from "../stackNavigator";
import { styles } from "./styles";



export const ContainerNavigation = () => {

    return (
        <NavigationContainer >
            <DrawerNavigator />
        </NavigationContainer>
    );
};