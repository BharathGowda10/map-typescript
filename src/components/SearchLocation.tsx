import { Fragment, useState } from "react";
import { Search } from "../api/search";
import type { Place } from "../api/place";

interface SearchClick {
  onHadleClickGo: (place: Place) => void;
}
const SearchLocation = ({ onHadleClickGo }: SearchClick) => {
  const [term, setTerm] = useState<string>("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await Search(term);
    setPlaces(result);
  };
  return (
    <div className="p-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="search" className="font-bold text-xl text-gray-700">
          Search Location
        </label>
        <input
          type="text"
          name="search"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a location"
        />
      </form>
      <h1 className="mt-4 font-bold">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-5 mt-3 w-75 items-center ">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p>{place.name}</p>
              <button
                className="text-white bg-blue-500 px-3 py-1 rounded"
                onClick={() => onHadleClickGo(place)}
              >
                Go
              </button>
              <div className="w-full border-b border-gray-700 col-span-2"></div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SearchLocation;
