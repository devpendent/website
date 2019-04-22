# Devpendent Website 👨🏻‍💻

[![CircleCI](https://circleci.com/gh/devpendent/website/tree/master.svg?style=shield)](https://circleci.com/gh/devpendent/website/tree/master)
[![codecov](https://codecov.io/gh/devpendent/website/branch/master/graph/badge.svg)](https://codecov.io/gh/devpendent/website)
[![Maintainability](https://api.codeclimate.com/v1/badges/4ae06bcd4e5e0b47b1f1/maintainability)](https://codeclimate.com/github/devpendent/website/maintainability)
[![Netlify Status](https://api.netlify.com/api/v1/badges/db516646-820d-4deb-8b9b-521483fc40ad/deploy-status)](https://app.netlify.com/sites/devpendent/deploys)

👨🏻‍💻 An Open Sourced Platform for Indonesia Election Real Count<br>
💻 [Live site](https://devpendent.netlify.com/)

## Installation

1. Make sure [yarn](https://yarnpkg.com) is installed in your local machine.
2. Clone this project and run `yarn` in the project's root directory.

```sh
git clone git@github.com:devpendent/website.git
cd website
yarn
```

## Available Scripts

In the project's root directory, you can run:

### Development

#### `yarn develop`

Runs the app in the development mode.<br>
The app will be running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Open the `website` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

#### `yarn start`

Just an alias `yarn develop`, for you who are used to type `yarn start` instead. 😁

### Building

#### `yarn build`

Builds the app for production to the `public` folder.

#### `yarn serve`

Serves the built assets from the `yarn:build` command above.

### Testing

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn test:coverage`

Run test once and return coverage report afterwards.

#### `yarn test:e2e`

Run end-to-end tests using Cypress.

#### `yarn validate`

Validates that all tests are passed properly.

### Formatting

#### `yarn format`

Manually triggers Prettier format & ESLint fix towards all `js` & `json` files.
By default it has to be run automatically on save in your IDE (for Visual Studio Code users, the configurations are already included in this project).

It also will be run each time before you commit (pre-commit hook).
This way, we can prevent unformatted file to be committed to the repository.

## License

© Copyright 2019 Devpendent Team, The MIT License (MIT).

For more information, see the LICENSE file in this directory.
