import { hashPassword } from './crypto';
import { v4 } from 'uuid';

describe('hashPassword function tests', () => {
    test('generates a valid md5', () => {
        const result = hashPassword(v4(), v4());
        expect(result).toBeDefined();
        expect(result.length).toBe(32);
    })
    test('generates the same hash for the same plain text password and salt', () => {
        const password = v4();
        const salt = v4();
        const hash1 = hashPassword(password, salt);
        const hash2 = hashPassword(password, salt);
        expect(hash1).toEqual(hash2);
    })
    test('generates the different hash for different passwords', () => {
        const salt = v4();
        const password1 = v4();
        const password2 = v4();
        const hash1 = hashPassword(password1, salt);
        const hash2 = hashPassword(password2, salt);
        expect(hash1).not.toEqual(hash2);
    })
})
