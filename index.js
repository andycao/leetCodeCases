"use strict";
function bubbleSort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = list.length - 1; j > i; j--) {
            if (list[j] < list[j - 1]) {
                const tmp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = tmp;
            }
        }
    }
}
const list = [5, 6, 4, 3, 2, 8, 2, 1, 0];
bubbleSort(list);
console.log(list);
