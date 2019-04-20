# Devpendent Website 👨🏻‍💻 [![CircleCI](https://circleci.com/gh/devpendent/website/tree/master.svg?style=shield)](https://circleci.com/gh/devpendent/website/tree/master) [![codecov](https://codecov.io/gh/devpendent/website/branch/master/graph/badge.svg)](https://codecov.io/gh/devpendent/website)

👨🏻‍💻 An Open Sourced Platform for Indonesian Election Real Count<br>
💻 [Live site](https://devpendent.netlify.com/)

## Installation

1. Make sure [yarn](https://yarnpkg.com) is installed in your local machine.
2. Clone this project and run `yarn` in the project's root directory.

```sh
$ git clone git@github.com:devpendent/website.git
$ cd website
$ yarn
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

Builds the app for production to the `public` folder.<br>

#### `yarn serve`

Serves the built assets from the `yarn:build` command above.

### Testing

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Formatting

#### `yarn format`

Manually triggers Prettier format & ESLint fix towards all `js` & `json` files.
By default it has to be run automatically on save in your IDE (for Visual Studio Code users, the configurations are already included in this project).

It also will be run each time before you commit (pre-commit hook).
This way, we can prevent unformatted file to be committed to the repository.

## License

© Copyright 2019 Devpendent Team, The MIT License (MIT).

For more information, see the LICENSE file in this directory.
