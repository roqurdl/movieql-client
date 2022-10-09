import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const MOVIE_DETAIL = gql`
  query getMovies($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;
export default function Movie() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(MOVIE_DETAIL, {
    variables: {
      movieId: id,
    },
  });
  if (loading) {
    return <h1>Fetching movie...</h1>;
  }
  if (error) {
    return <h1>There is some error</h1>;
  }
  return <div>{data.movie.title}</div>;
}
