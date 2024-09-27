/**
 * Solves the knapsack problem for a given maximum quota and a list of items.
 *
 * @param {number} maxQuote - The maximum quota (capacity) of the knapsack.
 * @param {Array<{value: number, id: string, isSelected: boolean}>} items - An array of items, each with a value and an id.
 * @returns {Array<{value: number, id: string, isSelected: boolean}>} An array of item ids representing the optimal selection.
 */
const knapsackProblem = (maxQuote, items) => {
  /**
   * Internal recursive function to solve the knapsack problem.
   *
   * @param {number} min - The minimum remaining quota.
   * @param {Array<string>} selected - Array of currently selected item ids.
   * @returns {Array<[{ value: number, id: string }]>} The optimal selection of item ids for the given state.
   */
  function internal(selectedSum, selected) {
    return items
      .filter(item => !selected.has(item.id))
      .filter(item => item.value + selectedSum <= maxQuote)
      .map(item => internal(selectedSum + item.value, new Set([...selected, item.id])))
      .reduce((prev, item) => {
        if (prev[0] >= item[0]) {
          return prev;
        }

        return item;
      }, [selectedSum, selected]);
  }

  const [resultSum, selected]  = internal(0, new Set());

  return [
    resultSum,
    items.map(item => ({
      ...item,
      isSelected: selected.has(item.id),
    }))
  ];
};

export default knapsackProblem;
