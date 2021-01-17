import axios from "axios";

export default {
    // Gets all books
    getAgent: function () {
      return axios.get("/api/agent_data");
    }
  ,
    // Gets the book with the given id
    postSignUp: function (data) {
        return axios.post("/api/signup");
    },
    // // Deletes the book with the given id
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    // },
    // // Saves a book to the database
    // saveBook: function (bookData) {
    //     return axios.post("/api/books", bookData);
    // }
};
