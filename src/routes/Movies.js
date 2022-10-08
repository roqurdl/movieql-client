import { useApolloClient, gql } from "@apollo/client";
import { useEffect, useStae } from "react";

export default function Movies() {
  const [movies, setMovies] = useStae();
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
            }
          }
        `,
      })
      .then((result) => {
        setMovies(result.data.allMovies);
      });
  });
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
