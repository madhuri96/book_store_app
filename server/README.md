# Book_Store (Server-side)

### npm start

Runs the app in the development mode.
Open http://localhost:8000 to view it in your browser.

## How to USE?

URL: http://localhost:8000/api/items

### Steps(Postman):

- 1. /register(POST): Register the new user using name,email and password(all requireds).
- 2. /login(POST): Login user using email and password.
     - Generate JWT Token
- 3. / && /:id(GET): Get Book items.
- 4. / (POST): Create a new Book item.
- 5. /:id (PUT): Edit the Book item.
- 6. /:id (DELETE): Delete.
