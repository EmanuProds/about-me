import { View, Image } from "react-native";

import { styles } from "./styles"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/perfil.png")} style={styles.logo}/>
      </View>
    </View>

  )
}