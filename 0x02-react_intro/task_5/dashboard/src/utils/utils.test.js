import { getLatestNotification, getFullYear, getFooterCopy } from './utils'

describe('Basic tests', () => {

	test('FullYear', () => {
		expect(getFullYear()).toBe(new Date().getFullYear());
	});

	test('LatestNotification', () => {
		expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
	});

	test('FooterCopy', () => {
		expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
		expect(getFooterCopy(true)).toBe('Holberton School');
	});
});
