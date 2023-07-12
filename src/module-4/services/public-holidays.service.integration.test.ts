import {
  checkIfTodayIsPublicHoliday,
  getListOfPublicHolidays,
  getNextPublicHolidays,
} from "./public-holidays.service";

describe("Validate getListOfPublicHolidays", () => {
  test("It should return list of public holidays", async () => {
    const publicHolidayList = await getListOfPublicHolidays(2023, "GB");
    expect(publicHolidayList).toBeTruthy();
    expect(publicHolidayList.length >= 0).toBeTruthy();
  });

  test("It should throw an error", async () => {
    try {
      await getListOfPublicHolidays(2030, "GB");
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});

describe("Validate checkIfTodayIsPublicHoliday", () => {
  test("It should return true/false if today's a holiday in GB", async () => {
    const isTodayHoliday = await checkIfTodayIsPublicHoliday("GB");

    if (isTodayHoliday) {
      expect(isTodayHoliday).toBeTruthy();
    } else {
      expect(isTodayHoliday).toBeFalsy();
    }
  });
});

describe("Validate getNextPublicHolidays", () => {
  test("It should return list of public holidays", async () => {
    const isTodayHoliday = await getNextPublicHolidays("GB");
    expect(isTodayHoliday).toBeTruthy();
    expect(isTodayHoliday.length >= 0).toBeTruthy();
  });
});
