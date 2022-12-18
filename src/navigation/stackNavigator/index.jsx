import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../../../Screens/searchScreen";



export const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
};