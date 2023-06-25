const request = require("supertest");
const app = require("./index");

describe("GET /questions", () => {
  it("should return a valid response with status code 200", async () => {
    const response = await request(app).get(
      "/questions?amount=5&category=sports&difficulty=medium"
    );

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(Array.isArray(response.body)).toBe(true);
  }, 20000);
  it("should return an error response with status code 500 when missing query parameters", async () => {
    const response = await request(app).get("/questions");

    expect(response.status).toBe(500);
    expect(response.text).toBe("Error executing query");
  });
});
