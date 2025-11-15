import * as Location from "expo-location";
import { ref, set } from "firebase/database";
import { db } from "./firebase";

export default function useDeliveryLocation(deliveryId) {
  const startSendingLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied");
      return;
    }

    // Location updates every 3 sec
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 3000,
        distanceInterval: 5,
      },
      (loc) => {
        set(ref(db, "delivery/" + deliveryId), {
          lat: loc.coords.latitude,
          lng: loc.coords.longitude,
          updatedAt: Date.now(),
        });
      }
    );
  };

  return { startSendingLocation };
}
