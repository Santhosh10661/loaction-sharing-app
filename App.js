import { View, Text, Button } from "react-native";
import useDeliveryLocation from "./src/useDeliveryLocation";

export default function App() {
  const { startSendingLocation } = useDeliveryLocation("DELIVERY_123");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Delivery Partner App
      </Text>
      <Button title="Start Sharing Location" onPress={startSendingLocation} />
    </View>
  );
}
