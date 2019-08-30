const {craig, dragon, matt} = require("./index");
const {performance,} = require('perf_hooks');

const implementations = [
    matt,
    dragon,
    craig,
];

const elapsed = {
    craig: [],
    matt: [],
    dragon: [],
};
const RUN_COUNT = 100;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < RUN_COUNT; j++) {
        const startTime = performance.now();
        const cipher = implementations[i];

        let k = 0;
        while(k < 10000){
            cipher('The quick brown fox jumps over the lazy dog', 10);
            k++;
        }

        const endTime = performance.now();
        const timeDiff = (endTime - startTime) / 1000;

        elapsed[cipher.name].push(timeDiff);
    }
}

for (let i = 0; i < 3; i++) {
    console.log(
        `${implementations[i].name}: ${elapsed[implementations[i].name].reduce((a, b) => a + b, 0) / RUN_COUNT}`
    );
}
