import axios from 'axios';

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params: {
    api_key: "a5663582fbb13297153c04f5fbde69f8",
    language: "ko-KR"
  }
})

export default instance;