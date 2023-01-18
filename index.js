require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});

const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };
  
  const unexpectedErrorHandler = (error) => {
    console.log(error);
    exitHandler();
  };
  
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);
