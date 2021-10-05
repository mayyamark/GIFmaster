# GIFmaster

This is a new version of the [GIFster](https://github.com/mayyamark/GIFster) application.
Now [TypeScript](https://www.typescriptlang.org/), [React.js](https://reactjs.org/) and [Next.js](https://nextjs.org/) are the main technologies. The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running Guide

### Using yarn (npm):

1. Clone the repository.
1. Open a new Terminal in the root directory and install the dependencies by running the command:

   ```sh
   yarn install
   ```

   or using npm:

   ```sh
   npm install
   ```

1. Run the application by running the command:

   ```sh
   yarn dev
   ```

   or using npm:

   ```sh
   npm run dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
1. To stop the application hit _Control_ + _C_ in the Terminal.

### Using Docker:

1. Clone the repository.

1. Choose a name for your container. Open a new Terminal in the root directory and run the command:

   ```sh
   docker build -t <name-of-container> .
   ```

1. Run the command:

   ```sh
   docker run -dp 3000:3000 <name-of-container>
   ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
1. To stop the container:
   1. Check the container's ID by running the command:
      ```sh
      docker ps
      ```
   2. Find the container and copy the ID.
   3. Run the command below to stop and remove the container:
      ```sh
      docker rm -f <container-ID>
      ```

## Environment Variables

| Environment variable    | Description                         |
| ----------------------- | ----------------------------------- |
| `GIPHY_API_KEY`         | Key to Giphy API                    |
| `GIPHY_QUERY_BASE_URL`  | The base endpoint for GET requests  |
| `GIPHY_UPLOAD_BASE_URL` | The base endpoint for POST requests |

## File structure

### pages

Next.js pages.

### public

Public files, such as the favicon.

### src

#### - components

The project uses a variation of [Atomic design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/):

- **atoms** - basic building blocks _(input field)_
- **molecules** - 2 or more Atoms together _(input field with label)_
- **organisms** - 2 or more Molecules together _(form of input fields with labels)_
- **pages** - Page components _(Favourites page)_

#### - constants

Files that contain constants, used in the application more than once.

#### - context

Files for managing global React state (favourites, uploaded gifs).

#### - hooks

Files with custom React hooks.

#### - utils

Files with helper functions.

## Tests

End-to-end [Cypress](https://www.cypress.io/) tests are available. To run them, open a Terminal in the root directory use the command below:

```sh
yarn cy:open
```

or using npm:

```sh
npm run cy:open
```
