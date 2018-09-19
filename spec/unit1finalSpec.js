let functions = require("../lib/unit1final");
let counter = functions.counter;
let doubler = functions.doubler;
let noDups = functions.noDups;
let getAverageAge = functions.getAverageAge;

describe("myEach", () => {
  beforeEach( () => {
    callback = x => res.push(2 * x);
    array = [1, 2, 3];
  });

  it("it passes each element into a callback", () => {
    res = [];
    array.myEach(callback);
    expect(res).toEqual([2,4,6]);
  });

  it("returns the original array", () => {
    expect(array.myEach(callback)).toEqual([1, 2, 3]);
  });
});

describe('Array#myReduce', () => {
  let myArray;
  const noOp = (accum, el) => accum;

  const spy = {
    sum: (accum, el) => accum + el
  };

  it("calls the callback, passing in the accumulator and each element", () => {
    myArray = [1, 2, 3];
    spyOn(spy, "sum").and.callThrough();

    myArray.myReduce(spy.sum);

    expect(spy.sum).toHaveBeenCalledWith(1, 2);
    expect(spy.sum).toHaveBeenCalledWith(3, 3);
  });

  it("works with a sum callback", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(spy.sum)).toEqual(10);
  });

  it("works with a multiplier callback", () => {
    myArray = [4, 4, 4];
    const times = (accum, el) => accum * el;

    expect(myArray.myReduce(times)).toEqual(64);
  });

  it("uses the first item as the accumulator", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp)).toEqual(1);
  });

  it("does not call Array.prototype.reduce", () => {
    myArray = [1, 2, 3, 4];
    spyOn(myArray, "reduce");

    myArray.myReduce(spy.sum);

    expect(myArray.reduce).not.toHaveBeenCalled();
  });
});


describe('myEvery', () => {
  beforeEach( () => {
    a = [2, 4, 6];
  });

  it("returns true if all elements match the block", () => {
    const callback = x => x % 2 === 0;
    expect(a.myEvery(callback)).toBe(true);
  });

  it("returns false if not all elementes match the block", () => {
    const callback = x => x % 3 === 0;
    expect(a.myEvery(callback)).toBe(false);
  });
});



describe("#counter", () => {
  it("solves a simple example", () => {
    expect(counter("snakes")).toEqual({ s: 2, n: 1, a: 1, k: 1, e: 1 });
  });

  it("ignores spaces", () => {
    expect(counter('hello world')).toEqual({ h: 1, e: 1, l: 3, o: 2, r: 1, d: 1 });
  });

  it("case insensitve", () => {
    expect(counter("aaAbc")).toEqual({ a: 3, b: 1, c: 1 });
  });

  it('returns {} when empty string is passed', () => {
    expect(counter('')).toEqual({});
  });
});


describe("#doubler", () => {
  beforeEach(() => {
    array = [1, 2, 3];
  });

  it("doubles the elements of the array", () => {
    expect(doubler(array)).toEqual([2, 4, 6]);
  });

  it("does not modify the original array", () => {
    const dupArray = array.slice(0);

    doubler(array);
    expect(array).toEqual(dupArray);
  });
});


describe("#noDups", () => {
  beforeEach(() => {
    array = [1, 2, 3, 1, 1, 2, 4];
  });
  it("removes all duplicats", () => {
    expect(noDups(array)).toEqual([1, 2, 3, 4]);
  });

  it("does not modify the original array", () => {
    const dupArray = array.slice(0);
    noDups(array)
    expect(array).toEqual(dupArray);
  });

});

describe("#getAverageAge", () => {
  it("find the average age", () => {
    expect(getAverageAge([
  { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.',  age: 32, language: 'Python' },
])).toEqual(31);
  });

  it("rounds to the nearest intger", () => {
    expect(getAverageAge([
  { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
])).toEqual(33);
  });

});
