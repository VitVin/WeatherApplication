import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainScreen } from "../../../Screens/mainScreen";
import { SavedCitiesScreen } from "../../../Screens/savedCitiesScreen";
import { DrawerScreen } from "../../../Screens/drawerScreen";

export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={() => <DrawerScreen />}
            screenOptions={{ headerShown: false, overlayColor: 'transparent', drawerStyle: { backgroundColor: 'transparent' } }}
        >
            <Drawer.Screen name="MainScreen" component={MainScreen} />
            <Drawer.Screen name="SavedCitiesScreen" component={SavedCitiesScreen} />
        </Drawer.Navigator>
    );
};