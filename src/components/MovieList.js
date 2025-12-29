import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null; // or a loader

  return (
    <div className="p-6">
      <h1 className="text-3xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((ele, i) => (
            <MovieCard key={i} posterpath={ele.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
