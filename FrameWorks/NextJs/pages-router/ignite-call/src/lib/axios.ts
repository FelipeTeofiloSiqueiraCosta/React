import axios from 'axios'

export const api = axios.create({
  // o axios entender que vai ser https://localhost:3000/api
  // ele pega a url do projeto
  baseURL: `/api`,
})
