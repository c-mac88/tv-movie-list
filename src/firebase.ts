import firebase from "firebase/app";
import "firebase/firestore";
import { ref, onUnmounted, Ref } from "vue";
import { Movie } from "@/api/omdb";

const config = {
  apiKey: "AIzaSyAe-1jp_1Ql3D8UVYugoreXuYmKyJ45v8w",
  authDomain: "tv-movie-list.firebaseapp.com",
  databaseURL: "https://tv-movie-list-default-rtdb.firebaseio.com",
  projectId: "tv-movie-list",
  storageBucket: "tv-movie-list.appspot.com",
  messagingSenderId: "112537591127",
  appId: "1:112537591127:web:096a22990c310c4ae5f212"
};

export interface MovieRecord extends firebase.firestore.DocumentData {
  id?: string;
  imdbId?: string;
  title?: string;
  dateCreated?: Date;
  dateUpdated?: Date | null;
  complete?: boolean;
  never?: boolean;
}

export interface MovieRequest {
  id?: string;
  imdbId?: string;
  title?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  complete?: boolean;
  never?: boolean;
}

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const moviesCollection = db.collection("movies");

export const useMoviesCollection = () => {
  const movies: Ref<{
    id: string;
    complete?: boolean;
    imdbId?: string;
    title?: string;
  }[]> = ref([]);
  const movieRecord: Ref<MovieRecord | null> = ref(null);
  const id: Ref<string> = ref("");

  const close = moviesCollection.onSnapshot(snapshot => {
    movies.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);

  const createMovie = (
    movie: MovieRequest,
    complete: boolean,
    never: boolean
  ) => {
    movie.complete = complete;
    movie.never = never;
    return moviesCollection.add(movie);
  };

  const updateMovie = (
    movie: MovieRecord | null,
    complete: boolean,
    never: boolean
  ) => {
    if (movie) {
      movie.complete = complete;
      movie.never = never;
      movie.dateUpdated = new Date();
      return moviesCollection.doc(id.value).update(movie);
    }
  };

  const getNewMovieRequest = (movie: Movie | undefined): MovieRequest => {
    return {
      imdbId: movie?.imdbID,
      title: movie?.Title,
      dateCreated: new Date(),
      dateUpdated: new Date(),
      complete: false,
      never: false
    };
  };

  const getMovie = async (imdbId: string) => {
    const movie = await moviesCollection.where("imdbId", "==", imdbId).get();
    movie.forEach(movie => {
      id.value = movie.id ? movie.id : "";
      movieRecord.value = movie.exists ? movie.data() : null;
    });
  };

  return {
    movies,
    movieRecord,
    createMovie,
    updateMovie,
    getMovie,
    getNewMovieRequest
  };
};
