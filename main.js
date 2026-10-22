//------- q1 ----------
console.log("------- q1 ----------");

function extractNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("The type sent to the function is not an array");
  }
  return arr.filter((element) => {
    if (typeof element === "number") {
      return true;
    }
  });
}

// console.log(extractNumber([3, 5, "d", 6]));

//------- q2 ----------
console.log("------- q2 ----------");
function sumNumbersSafe(arr) {
  let sum = 0;
  try {
    const valid_nums = extractNumber(arr);
    valid_nums.forEach((num) => {
      sum += num;
    });
  } catch (err) {
    console.error(err.message);
    return sum;
  }
  return sum;
}

// console.log(sumNumbersSafe("hiii"));

//------- q3 ----------
console.log("------- q3 ----------");

function filterLargeSums(arr_list, min_total) {
  let res_arr = [];
  arr_list.forEach((arr) => {
    const sum_ = sumNumbersSafe(arr);
    if (sum_ >= min_total) {
      res_arr.push([arr, sum_]);
    }
  });
  return res_arr;
}

// console.log(
//   filterLargeSums(
//     [
//       [1, 2, 10],
//       [10, "hi", 5],
//     ],
//     8,
//   ),
// );

//------- q4 ----------
console.log("------- q4 ----------");

function summaryState(arr_list) {
  filterLargeSums(arr_list, 10);
  let total_sum = 0;
  let average_ = 0;

  let obj_arr = [];

  arr_list.forEach((arr) => {
    total_sum = sumNumbersSafe(arr);
    average_ = total_sum / extractNumber(arr).length;
    const obj = { sum: total_sum, average: average_ };
    obj_arr.push(obj);
  });
  return obj_arr;
}

// console.log(
//   summaryState([
//     [1, 2, 10],
//     [10, "hi", 5],
//   ]),
// );

//------- q5 ----------
console.log("------- q5 ----------");
function safeCalculator(a, b, operation) {
  try {
    if (typeof a != typeof b) {
      throw new TypeError("a and b are not the same type");
    }
    return operation(a, b);
  } catch (err) {
    console.error(err.message);
  }
}

const multiply = function mult(a, b) {
  return a * b;
};

const adding = function add(a, b) {
  return a + b;
};

console.log(safeCalculator(3, "h", multiply));
