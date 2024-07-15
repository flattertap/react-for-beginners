import PropTypes from "prop-types";

function MovieDetail({id, year, runtime, rating, coverImg, title, genres}){
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <h3>year : {year} runtime : {runtime} rating : {rating}</h3>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;