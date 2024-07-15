import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const {id} = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
          year={movie.year}
          rating={movie.rating}
          runtime={movie.runtime}
        />
      )}
    </div>
  );
}
export default Detail;