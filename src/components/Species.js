import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSpecies = async (pageNumber) => {
  return await axios.get(`https://swapi.dev/api/species/?page=${pageNumber}`);
};

export const Species = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isFetching, error, isError } = useQuery(
    ["Species", pageNumber],
    () => fetchSpecies(pageNumber),
    {
      refetchOnMount: true,
      keepPreviousData: true, //this is used while using pagination . it stop loading when page change
    }
  );

  if (isLoading) return <div className="loader div"></div>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      <h1>Species</h1>
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
      {data?.data?.results.map((specie) => {
        return (
          <div key={specie.name}>
            <p>name: {specie.name}</p>
            <p>skin_colors: {specie.skin_colors}</p>
            <p>eye_colors: {specie.eye_colors}</p>
            <p>classification: {specie.classification}</p>
            <p>designation: {specie.designation}</p>
            <p className="striped-border"></p>
          </div>
        );
      })}
    </div>
  );
};
