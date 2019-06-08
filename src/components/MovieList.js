import React, { Component } from "react";


export default class MovieList extends Component {


  render() {

    const {movies} = this.props;
   return(
     <>
   {movies.map(movie => <p>{movie.title}</p>)}
   </>
    )
  }
}


// const movieList = movies.map(movie => {
//   return (
//     <p key={movie.id}>
//       <button onClick={() => this.favouriteMovie(movie.id)}>
//         {//Check if favourite
//         movie.isFavourite ? <>X</> : <>&hearts;</>}
//       </button>{" "}
//       {movie.title}
//     </p>
//   );
// });