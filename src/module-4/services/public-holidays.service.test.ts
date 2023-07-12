import axios from 'axios';
import { checkIfTodayIsPublicHoliday, getListOfPublicHolidays, getNextPublicHolidays } from './public-holidays.service';
import { MOCK_PUBLIC_HOLIDAYS } from '../mocks';

describe('Validate getListOfPublicHolidays', () => {
    test('It should return list of public holidays', async () => {
        // Mock response from API
        jest.spyOn(axios, 'get').mockImplementation(() => {
            return new Promise((resolve, reject) => {
                return resolve({
                    data: MOCK_PUBLIC_HOLIDAYS
                })
            })
        });

        const publicHolidayList = await getListOfPublicHolidays(2023, 'GB');
        expect(publicHolidayList).toHaveLength(1);
        expect(publicHolidayList[0].name).toEqual('GB');
        expect(publicHolidayList[0].localName).toEqual('EN');
        expect(publicHolidayList[0].date).toEqual('JUN 12, 2023');
    });

    test('it should throw an error if an exception has ocurred', async () => {
        await expect(getListOfPublicHolidays(2020, 'USA')).rejects.toThrow(new Error('Country provided is not supported, received: USA'));
    })
});

describe('Validate checkIfTodayIsPublicHoliday', () => {
    test('It should check if today is a holiday', async () => {
        // Mock response from API
        jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ status: 200, data: {} }));

        const isTodayHoliday = await checkIfTodayIsPublicHoliday('GB');
        expect(isTodayHoliday).toBeTruthy();
    });

    test('it should throw an error if an exception has ocurred', async () => {
        jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject({ status: 300, data: {} }));

        const isTodayHoliday = await checkIfTodayIsPublicHoliday('GB');
        expect(isTodayHoliday).toBeFalsy();
    });
});

describe('Validate getNextPublicHolidays', () => {
    test('It should return next public holidays', async () => {
        // Mock response from API
        jest.spyOn(axios, 'get').mockImplementation(() => {
            return new Promise((resolve, reject) => {
                return resolve({
                    data: MOCK_PUBLIC_HOLIDAYS
                })
            })
        });

        const nextPublicHoliday = await getNextPublicHolidays('GB');
        expect(nextPublicHoliday).toHaveLength(1);
        expect(nextPublicHoliday[0].name).toEqual('GB');
        expect(nextPublicHoliday[0].localName).toEqual('EN');
        expect(nextPublicHoliday[0].date).toEqual('JUN 12, 2023');
    });

    test('it should throw an error if an exception has ocurred', async () => {
        jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject({ data: [] }));

        const nextPublicHoliday = await getNextPublicHolidays('GB');
        expect(nextPublicHoliday).toHaveLength(0);
    });
});