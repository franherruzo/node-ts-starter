import { App } from "../src/App";

describe("App", () => {
  it("should return hey!", () => {
    const app = App();

    expect(app).toBe("hey!");
  });
});
