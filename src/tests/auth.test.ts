import { expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

test("getAPIKey returns the API key when the Authorization header is valid", () => {
  const headers = { authorization: "ApiKey valid-api-key" };
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe("valid-api-key");
});

test("getAPIKey returns null when the Authorization header is missing", () => {
  const headers = {};
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe(null);
});

test("getAPIKey returns null when the Authorization header does not start with 'ApiKey'", () => {
  const headers = { authorization: "Bearer invalid-api-key" };
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe(null);
});

test("getAPIKey returns null when the Authorization header has fewer than 2 parts", () => {
  const headers = { authorization: "ApiKey" };
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe(null);
});

// test("getAPIKey returns the API key when the header value has leading or trailing spaces", () => {
//   const headers = { authorization: "   ApiKey test-api-key   " };
//   const apiKey = getAPIKey(headers);
//   expect(apiKey).toBe("test-api-key");
// });
