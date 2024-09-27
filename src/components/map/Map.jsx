// src/Map.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Define the style for the map container using Tailwind
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
