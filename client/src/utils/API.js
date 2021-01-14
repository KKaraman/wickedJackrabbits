import axios from "axios";

export default {
    // Gets all books
    postUser: function () {
        return axios.post("/api/signup");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

};
