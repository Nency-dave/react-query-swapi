import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = () => {
  return axios.get(`https://swapi.dev/api/planets`);
};

export const Planets = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["planets"],
    fetchPlanets,
    {
      cacheTime: 0,
    }
  );

  if (isLoading) return <div className="loader div"></div>;
  if (isError) return <h1>{error.message}</h1>;

  console.log(data?.data?.results, "log");
  return (
    <div>
      <h1>Planets</h1>

      {data?.data?.results.map((planet) => {
        return (
          <div>
            <p>{planet.name}</p>
          </div>
        );
      })}
    </div>
  );
};
