import { isFilledString, isArray, isNumber } from 'typesafe-is';

export const joinString = (delimiter: string) =>
  function joinFn(...items: Array<any>): string {
    const results: Array<string | number> = [];

    for (let index = 0; index < items.length; index++) {
      const item = items[index];

      if (isNumber(item) || isFilledString(item)) {
        results.push(item);
        continue;
      }

      if (isArray(item)) {
        results.push(joinFn(...item));
        continue;
      }
    }

    return results.join(delimiter);
  };

export default joinString;

export const joinClassName = joinString(' ');
