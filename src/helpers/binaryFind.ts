export const binaryFind = (table: Array<any>, UserId: string) => {
  const userId = parseInt(UserId);
  let start = 0;
  let end = table.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (table[middle].id === userId) {
      return table[middle];
    }

    if (table[middle].id > userId) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
};
