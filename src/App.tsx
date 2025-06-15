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
    <div className="h-screen w-screen">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-12 gap-2 h-full">
        <div className="col-span-3">
          <SearchLocation onHadleClickGo={onClickHandleGo} />
        </div>
        <div className="col-span-9">
          <Map place={place} />
        </div>
      </div>
      {/* Mobile layout */}
      <div className="grid md:hidden grid-cols-1 gap-2 h-full">
        <div>
          <Map place={place} />
        </div>
        <div>
          <SearchLocation onHadleClickGo={onClickHandleGo} />
        </div>
      </div>
    </div>
  );
}

export default App;
