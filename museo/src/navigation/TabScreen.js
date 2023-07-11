import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import Items from "../screens/Items";
import Escanear from "../screens/Escanear";
import Perfil from "../screens/Perfil";
import InfoScreen from "../screens/InfoScreen";

const Tab = createBottomTabNavigator();

const TabScreen = () =>{
    return(
        <Tab.Navigator 
        initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{
                    height:75,
                    borderTopEndRadius:20,
                    borderTopStartRadius:20,
                }
            }}>  
            <Tab.Screen 
                name="Home"
                component={InfoScreen}
                options={{
                    tabBarIcon: ({color})=>(
                        <Ionicons name = "home" size = {27} color = {color}/>
                    )
                }}
            />

        <Tab.Screen 
                name="Items"
                component={Items}
                options={{
                    tabBarIcon: ({color})=>(
                        <Ionicons name = "list-outline" size = {27} color = {color}/>
                    )
                }}
            />
        <Tab.Screen 
            name="Escanear"
            component={Escanear}
            options={{
                tabBarIcon: ({color})=>(
                    <Ionicons name = "qr-code-outline" size = {27} color = {color}/>
                )
            }}
        />

        <Tab.Screen 
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({color})=>(
                        <Ionicons name = "person-outline" size = {27} color = {color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabScreen;