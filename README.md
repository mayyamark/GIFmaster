# GIFmaster

This is a new version of the [GIFster](https://github.com/mayyamark/GIFster) application.
Now [TypeScript](https://www.typescriptlang.org/), [React.js](https://reactjs.org/) and [Next.js](https://nextjs.org/) are the main technologies. The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running Guide

1. Clone the repository.
1. Open a new Terminal in the root directory and install the dependencies by running the command:

   ```sh
   yarn install
   ```

1. Run the application by running the command:

   ```sh
   yarn dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

| Environment variable    | Description                         |
| ----------------------- | ----------------------------------- |
| `GIPHY_API_KEY`         | Key to Giphy API                    |
| `GIPHY_QUERY_BASE_URL`  | The base endpoint for GET requests  |
| `GIPHY_UPLOAD_BASE_URL` | The base endpoint for POST requests |

## File structure

### 1. pages

React pages.

### 2. public

Public files, such as the favicon.

### 3. src

#### 3.1. components

The project uses a variation of [Atomic design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/):

- **atoms** - basic building blocks (input field)
- **molecules** - 2 or more Atoms together ( input field with label )
- **organisms** - 2 or more Molecules together (form of input fields with labels)
- **pages** - Page components (Favourites page)

#### 3.2. constants

Files that contain constants, used in the application more than once.

#### 3.3. context

Files for managing global React state (favourites, uploaded gifs).

#### 3.4. hooks

Files with custom React hooks.

#### 3.5. utils

Files with helper functions.
