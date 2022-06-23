/* eslint-disable */
import ItemCounter from "../src/js/movie-list/itemCounter.js";

describe("Item Counter On Header", () => {
    test("The item counter to be 3", () => {
        // Arrange
        const movies = [
            {
                id: 1,
                name: "Movie 1"
            },
            {
                id: 2,
                name: "Movie 2"
            },
            {
                id: 3,
                name: "Movie 3"
            }
        ]
        
        // Act
        const movieCount = ItemCounter(movies); 

        // Assert
        expect(movieCount).toBe(3);
    })
})