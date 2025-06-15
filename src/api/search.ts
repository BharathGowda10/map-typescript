import type { Place } from "./place";

interface DataResults {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      display_name: string;
      place_id: number;
    };
  }[];
}

export const Search = async (term: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layes=address&limit=5`
  );
  const data: DataResults = await response.json();
  const place: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      lattitude: feature.geometry.coordinates[1],
    };
  });
  return place;
};
