/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    const degree = new Array(n).fill(0);
    for (const road of roads) {
        degree[road[0]] += 1;
        degree[road[1]] += 1;
    }

    // Step 2: Sort cities by degree in descending order
    const cities = Array.from({ length: n }, (_, index) => index);
    cities.sort((a, b) => degree[b] - degree[a]);

    // Step 3: Assign values based on degree
    const value = new Array(n);
    let currentValue = n;
    for (const city of cities) {
        value[city] = currentValue;
        currentValue -= 1;
    }

    // Calculate the total importance of all roads
    let totalImportance = 0;
    for (const road of roads) {
        totalImportance += value[road[0]] + value[road[1]];
    }

    return totalImportance;
};