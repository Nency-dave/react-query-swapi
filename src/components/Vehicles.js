import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchVehicles = async (pageNumber) => {
  return await axios.get(`https://swapi.dev/api/vehicles/?page=${pageNumber}`);
};

export const Vehicles = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error, isError } = useQuery(
    ["vehicles", pageNumber],
    () => fetchVehicles(pageNumber),
    {
      refetchOnMount: true,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <div className="loader div"></div>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      <h1>Vehicles</h1>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>

        {pageNumber}

        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next page
        </button>
      </div>

      {data.data.results.map((vehicle) => {
        return (
          <>
            <div key={vehicle.name}>
              <p>name: {vehicle.name}</p>
              <p>cargo_capacity: {vehicle.cargo_capacity}</p>
              <p>model: {vehicle.name}</p>
              <p>passengers: {vehicle.passengers}</p>

              <p className="striped-border"></p>
            </div>
          </>
        );
      })}
    </div>
  );
};
