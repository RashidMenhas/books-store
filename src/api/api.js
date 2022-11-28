const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kTNjFv3UggLGVIpPD8hG/books/';

const api = {
  addNewBook: async ({ id, title, author }) => {
    await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category: 'books categories',
      }),
    });
  },
  deleteBook: async (bookId) => {
    await fetch(baseURL + bookId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  fetchBooks: async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    const books = Object.entries(data).map(([id, book]) => {
      const { title, author } = book[0];
      return { id, title, author };
    });
    return books;
  },
};

export default api;
