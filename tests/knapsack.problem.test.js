import { expect, test } from '@jest/globals';
import knapsackProblem from "../src/knapsack.problem";

function transformArrayIntoItemArray(values) {
  return values.map((value, index) => ({
    value,
    id: index.toString(),
    isSelected: false,
  }));
}

test('all match', () => {
  const qoutes = [3, 5, 2];
  const inputItems = transformArrayIntoItemArray(qoutes);
  const [resultSum, resultItems] = knapsackProblem(11, inputItems);

  expect(resultSum).toEqual(10);
  expect(qoutes.sort()).toEqual(resultItems.map(i => i.value).sort());
});
