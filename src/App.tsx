import { useState } from "react";
import type { Place } from "./api/place";
import Map from "./components/Map";
import SearchLocation from "./components/SearchLocation";

function App() {
  const [place, setPlace] = useState<Place | null>(null);
  const onClickHandleGo = (place: Place) => {
    setPlace(place);
  };
  return (
    <div className="grid grid-cols-12 h-screen w-screen gap-2">
      <div className="md:col-span-3 col-span-12">
        <SearchLocation onHadleClickGo={onClickHandleGo} />
      </div>
      <div className="md:col-span-9 col-span-12">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
