import { MapContainer, Marker, TileLayer } from "react-leaflet";
import type { Place } from "../api/place";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";

interface MapToProps {
  place: Place | null;
}
const Map = ({ place }: MapToProps) => {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.lattitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[12.97, 77.59]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.lattitude, place.longitude]} />}
    </MapContainer>
  );
};

export default Map;
