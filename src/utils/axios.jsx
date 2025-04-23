import axios from 'axios';

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzQ0YzI3NTJiNmYyZDU1OWM2NjQyNmE3ZWIyZDk5ZiIsIm5iZiI6MTc0NTI5NDYxNS44NDksInN1YiI6IjY4MDcxNTE3YjZjNjNkMjcwZmFhNzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_2cuiP5IdcOOtnLV0dx0n-7JaDxtZymyhBvZzrqkQM'
      },
});
export default instance;