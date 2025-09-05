# My Express Server

This project is a simple Express.js server that demonstrates the structure and organization of an Express application. It includes routing and controller separation for better maintainability.

## Project Structure

```
my-express-server
├── src
│   ├── app.js          # Entry point of the application
│   ├── routes          # Contains route definitions
│   │   └── index.js    # Main routing file
│   └── controllers     # Contains controller logic
│       └── index.js    # Main controller file
├── package.json        # NPM configuration file
└── README.md           # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the server, use the following command:

```
npm start
```

The server will run on `http://localhost:3000` by default.

## Routes

- `GET /` - Returns a welcome message.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.