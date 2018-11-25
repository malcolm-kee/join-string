import { isFilledString, isArray, isNumber } from 'typesafe-is';

export const joinString = (delimiter: string) =>
  function joinFn(...items: Array<any>): string {
    return items
      .filter(item => isFilledString(item) || isNumber(item) || isArray(item))
      .map(item => (isArray(item) ? joinFn(...item) : item))
      .join(delimiter);
  };

export const joinClassName = joinString(' ');
