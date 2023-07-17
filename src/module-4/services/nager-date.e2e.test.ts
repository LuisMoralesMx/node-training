import request from "supertest";

const NAGER_API = "https://date.nager.at/api/v3";

describe("Nager API - Country Information", () => {
  test("should return 200 and response data", async () => {
    const { status, body } = await request(NAGER_API).get("/CountryInfo/GB");

    expect(status).toEqual(200);
    expect(body).toEqual({
      commonName: expect.any(String),
      officialName: expect.any(String),
      countryCode: expect.any(String),
      region: expect.any(String),
      borders: [
        {
          commonName: expect.any(String),
          officialName: expect.any(String),
          countryCode: expect.any(String),
          region: expect.any(String),
          borders: expect.any(Object),
        },
      ],
    });
  });

  test("should return 404", async () => {
    const { status } = await request(NAGER_API).get("/CountryInfo/TEST");
    expect(status).toEqual(404);
  });
});

describe("Nager API - Available Countries", () => {
    test("should return 200 and response data", async () => {
      const { status, body } = await request(NAGER_API).get("/AvailableCountries");
  
      expect(status).toEqual(200);
      expect(body.length > 0).toBeTruthy();
    });
  });
