import { MOCK_PUBLIC_HOLIDAYS } from "./mocks";
import { shortenPublicHoliday, validateInput } from "./helpers";

describe("Validate validateInput", () => {
  test("It should return true if country is available", () => {
    const countryYear = validateInput({ country: "GB", year: 2023 });
    expect(countryYear).toBeTruthy();
  });

  test("It should return false if country is not available", () => {
    expect(() => {
      validateInput({ country: "USA", year: 2023 });
    }).toThrow();
  });

  test("It should return false if year is not available", () => {
    expect(() => {
      validateInput({ country: "GB", year: 1999 });
    }).toThrow();
  });
});

describe("Validate shortenPublicHoliday", () => {
  test("It should return true if country is available", () => {
    const shortenList = shortenPublicHoliday(MOCK_PUBLIC_HOLIDAYS[0]);
    expect(shortenList).toBeTruthy();
    expect(shortenList.name).toEqual('GB');
    expect(shortenList.localName).toEqual('EN');
    expect(shortenList.date).toEqual('JUN 12, 2023');
  });
});


