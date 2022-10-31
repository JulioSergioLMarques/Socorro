import React from "react";
import { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Pesquisa from "./Teladepesquisa";
import Transacao from "./Teladetransacao";

const Tab = createBottomTabNavigator()

export default class Botao extends Component{
    render(){
        return(
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name = "Pesquisa" component = {Pesquisa}>
                            
                        </Tab.Screen>
                        <Tab.Screen name = "Transação" component = {Transacao}>

                        </Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}