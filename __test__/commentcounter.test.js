/* eslint-disable */

import { CountComments } from "../src/js/comment-pop-up/modules/countData.js";

describe('Counter Tests', () => {
    test('Comments counter to be returning 3', () => {
        // Arrange
        const mockComments = [
            {
                creation_date: '23/06/2022',
                username: 'Rito',
                comment: 'Test 1',
            },
            {
                creation_date: '23/06/2022',
                username: 'Cyril',
                comment: 'Test 2',
            },
            {
                creation_date: '23/06/2022',
                username: 'System',
                comment: 'Test 2',
            }
        ];

        // Act
        const counterFnc = CountComments(mockComments);

        // Assert
        expect(counterFnc).toBe(3);

    })
})