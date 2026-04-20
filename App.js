import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./component/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}


// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialIcons } from "@expo/vector-icons";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// import CallsScreen from "./phonecalls/CallsScreen";
// import DialPadScreen from "./phonecalls/DialPadScreen";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
          
//           <Tab.Screen
//             name="Calls"
//             component={CallsScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialIcons name="call" size={size} color={color} />
//               ),
//             }}
//           />

//           <Tab.Screen
//             name="DialPad"
//             component={DialPadScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialIcons name="dialpad" size={size} color={color} />
//               ),
//             }}
//           />

//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }