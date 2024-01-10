// bai 1
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linkebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(ds) {
    const failureItems = [];
    ds.forEach((item) => {
        failureItems.push(`<li class="text-warning">${item}</li>`);
    });
    return failureItems;
}

const failureList = makeList(result.failure);
console.log(failureList);
// bai 2
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // thay doi code ơ đây
    const [, , ...array] = list;
    return array;
}
const arr = removeFirstTwo(source);
console.log(arr); // ket qua mong muon [3,4,5,6,7,8,9,10];
console.log(source); // ket qua mong muon [1,2,3,4,5,6,7,8,9,10];

// bai 3
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // thay doi code o day

console.log(arr2);
// bai 4
function spread0ut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"]; // thay doi code o day
    return sentence;
}
console.log(spread0ut());
