type JoinFunction = (...items: any[]) => string;

export const joinString = (delimiter: string): JoinFunction =>
  function joinFn(): string {
    const results: Array<string | number> = [];

    for (let index = 0; index < arguments.length; index++) {
      const item = arguments[index];

      if (!item && item !== 0) continue;

      const itemType = typeof item;

      if (itemType == 'string' || itemType == 'number') {
        results.push(item);
        continue;
      }

      if (Array.isArray(item) && item.length > 0) {
        const innerResult = joinFn.apply(null, item);
        if (innerResult) {
          results.push(innerResult);
        }
      }
    }

    return results.join(delimiter);
  };

export default joinString;

export const joinClassName = joinString(' ');
