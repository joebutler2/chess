import {Game, Logger} from "./Game";

describe("Game", () => {
  let logger: Logger;
  beforeAll(() => {
    logger = {log: jest.fn()};
  });

  it("should be able to log messages", () => {
    new Game(logger);
    expect(logger.log).toHaveBeenCalledWith("new game created");
  });
});
