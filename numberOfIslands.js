// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;
  const visited = new Array(300);
  for (let m = 0; m < visited.length; m++) {
    visited[m] = new Array(300);
  }

  const isValid = (i, j) => {
    return i >= 0 && j >= 0 && i < rows && j < columns;
  };

  const dfs = (innerGrid, i, j) => {
    // Stop condition
    if (!isValid(i, j)) return;
    if (innerGrid[i][j] === "0" || visited[i][j]) return;

    visited[i][j] = true;
    // Recursion
    dfs(innerGrid, i, j - 1);
    dfs(innerGrid, i, j + 1);
    dfs(innerGrid, i - 1, j);
    dfs(innerGrid, i + 1, j);
  };
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

const inputGrid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];


console.log(numIslands(inputGrid));
