import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
  TouchableOpacity 
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const [activeScreen, setActiveScreen] = useState("Home");

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <HomeScreen />;
      case "Second":
        return <SecondScreen />;
      case "Third":
        return <ThirdScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View
      style={[
        styles.container,
        styles.navigationContainer,
        styles.drawerContainer,
      ]}
    >
    
      <Text style={styles.drawerTitle}>Navigation</Text>
      
      <View style={styles.menuItem}>
        <Icon name="home" size={20} />
        <Button title="Home" onPress={() => { setActiveScreen('Home'); drawer.current.closeDrawer(); }} />
      </View>
      <View style={styles.menuItem}>
        <Icon name="view-agenda" size={20} />
        <Button title="Second" onPress={() => { setActiveScreen('Second'); drawer.current.closeDrawer(); }} />
      </View>
      <View style={styles.menuItem}>
        <Icon name="layers" size={20} />
        <Button title="Third" onPress={() => { setActiveScreen('Third'); drawer.current.closeDrawer(); }} />
      </View>
     
     
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Icon name="menu" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{activeScreen} Screen</Text>
        </View>
        {renderActiveScreen()}
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  drawerTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 15
  },
  menuButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
  },
});
