# Nova QnA

This repository contains the source code for a simple web app containing an accordion for questions and answers.

Tech stack:
React Vite
Apollo Client
Cypress

## How to run

Install dependencies

```
npm install
```

Run the mock server which reflects the accordion typedefs in the Contentful backend

```
npm run start:mock
```

Run web app

```
npm run dev
```

## Running tests

Start up the mock server and the web app. Then either run with Cypress GUI with `npm run cy:open` or run tests in terminal with `npm run cy:run`

## Environment

Environment variables and secrets are stored in this repository's settings. Which contains the URL to Contentful backend and the access token.