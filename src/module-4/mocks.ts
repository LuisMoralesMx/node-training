import { SUPPORTED_COUNTRIES } from "./config";
import { PublicHoliday } from "./types";

export const MOCK_PUBLIC_HOLIDAYS : PublicHoliday[] = [
    {
        counties: SUPPORTED_COUNTRIES,
        countryCode: 'GB',
        date: 'JUN 12, 2023',
        fixed: true,
        global: true,
        launchYear: 2023,
        localName: 'EN',
        name: 'GB',
        types: ['LA', 'AL']
    }
];