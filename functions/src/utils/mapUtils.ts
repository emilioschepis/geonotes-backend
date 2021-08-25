import axios from "axios";
import * as functions from "firebase-functions";

export function generateStaticMap(latitude: number, longitude: number) {
  const config = functions.config();
  const key = config.google.maps_api_key;

  return axios.get("https://maps.googleapis.com/maps/api/staticmap", {
    responseType: "arraybuffer",
    params: {
      center: `${latitude},${longitude}`,
      zoom: 15,
      size: "400x200",
      scale: 2,
      markers: `${latitude},${longitude}`,
      style: "feature:poi|visibility:off",
      key,
    },
  });
}
