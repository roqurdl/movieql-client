import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const MOVIE_DETAIL = gql`
  query getMovies($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;
export default function Movie() {
  const { id } = useParams();
  const {
    data,
    loading,
    error,
    client: { cache },
  } = useQuery(MOVIE_DETAIL, {
    variables: {
      movieId: id,
    },
  });
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      /**변경사항 정의 */
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      ` /** 어떻게 변경할 것인지 */,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };
  if (loading) {
    return <h1>Fetching movie...</h1>;
  }
  if (error) {
    return <h1>There is some error</h1>;
  }
  return (
    <div>
      <h1>{data?.movie?.title}</h1>
      <img src={data?.movie?.medium_cover_image} />
      <p>rate:{data?.movie?.rating}</p>
      <button onClick={onClick}>
        {data?.movie?.isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
