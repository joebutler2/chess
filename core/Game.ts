export interface Logger {
  log: (message: string) => void;
}

export class Game {
  constructor(logger: Logger) {
    logger.log("new game created");
  }
}
