class Logger {
  constructor(tag) {
    this.tag = tag;
  }

  info = (message) =>
    console.log(`\x1b[36m[${this.tag}] [INFO] ${message}\x1b[0m`);

  warning = (message) =>
    console.log(`\x1b[33m[${this.tag}] [WARNING] ${message}\x1b[0m`);

  data = (message, data) => {
    console.log(`\x1b[32m[${this.tag}] [DATA] ${message}\x1b[0m`);
    console.log(data);
  };

  error = (error, message) => {
    if (message) {
      console.log(`\x1b[31m[${this.tag}] [ERROR] ${message}\x1b[0m`);
    }
    console.log(`\x1b[31m[${this.tag}] [ERROR] ${error.message}\x1b[0m`);
    console.log(
      `\x1b[31m${error.stack.split(`Error: ${error.message}\n`)[1]}\x1b[0m`
    );
  };
}

module.exports = Logger;
