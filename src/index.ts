export class LogShade {
  static success(message: string) {
    console.log(`%c ${message}`, "color: green");
  }
  static error(message: string) {
    console.log(`%c ${message}`, "color: red");
  }
  static info(message: string) {
    console.log(`%c ${message}`, "color: blue");
  }
  static warning(message: string) {
    console.log(`%c ${message}`, "color: orange");
  }
}
