import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name:'movies',
   initialState:{
    nowPlayingMovies:null,
    popularMovies:null,
    trailerVideo:null,
    topratedMoves:null
   },
   reducers:{
     addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload
     },
      addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
     },
     addTrailerVideo:(state,action)=>{
        state.trailerVideo =action.payload
     },
       addTopRatedMovies:(state,action)=>{
        state.topratedMoves =action.payload
     }

   } 
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies} =moviesSlice.actions
export default moviesSlice.reducer
// import { createSlice } from "@reduxjs/toolkit";

// const movieSlice=createSlice({
//     name:'movies',
//     initialState:{
//    nowPlayingMovies:null
//     },
//     reducers:{
//         addNowPlayingMovies:(state,action)=>{
//             state.nowPlayingMovies=action.payload
//         }
//     }

// })
// export const {addNowPlayingMovies} =movieSlice.actions
// export default movieSlice.reducer

