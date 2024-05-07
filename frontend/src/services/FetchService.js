import axios from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNTA4NDQyMSwiZXhwIjoxNzE1MDg4MDIxfQ.OZelcxVOtcmbVJoXZzlcjw8cShtYdoS81RXN2stSaic"
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Authorization': 'Bearer ' + token
  }
})

export default {
  getBook(id) {
    return apiClient.get('/books/' + id)
  },
  getBooks() {
    return apiClient.get('/books/')
      .then((result) => {
        const books = []
        for (let i = 0; i < result.data.data.length; i++) {
          if (result.data.data[i] !== null) {
            books.push(result.data.data[i])
          }
        }
        return books; // Returning the array of books
      })
      .catch((error) => {
        console.error(error)
        return []; // Return an empty array in case of error
      })
  }
}
