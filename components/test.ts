function getFirstItemOrDefault<T>(array: T[], defaultValue?: T): T | undefined {
  if (array.length === 0) {
    return defaultValue;
  }
  return array[0];
}

const numbers: number[] = [1, 2, 3];
const firstNumber = getFirstItemOrDefault(numbers); // Type of firstNumber is inferred as 'number'
const firstNumberWithDefault = getFirstItemOrDefault(numbers, 0); // Type of firstNumberWithDefault is inferred as 'number'

const strings: string[] = ["hello", "world"];
const firstWord = getFirstItemOrDefault(strings); // Type of firstWord is inferred as 'string'
const firstWordWithDefault = getFirstItemOrDefault(strings, "default"); // Type of firstWordWithDefault is inferred as 'string'
