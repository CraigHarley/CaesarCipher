import {craig, dragon, matt} from "./index";

const implementations = [
    matt,
    dragon,
    craig,
];
for (let i = 0; i < 3; i++) {
    const cipher = implementations[i];

    describe('Caesar Cipher: ' + implementations[i].name, () => {
        test('adds 0', () => {
            expect(cipher('A', 0)).toBe('A');
            expect(cipher('a', 0)).toBe('a');
            expect(cipher('Z', 0)).toBe('Z');
            expect(cipher('z', 0)).toBe('z');
            expect(cipher('.', 0)).toBe('.');
        });

        test('adds 1', () => {
            expect(cipher('A', 1)).toBe('B');
            expect(cipher('a', 1)).toBe('b');
            expect(cipher('Z', 1)).toBe('A');
            expect(cipher('z', 1)).toBe('a');
            expect(cipher('.', 1)).toBe('.');
        });

        test('adds 2', () => {
            expect(cipher('A', 2)).toBe('C');
            expect(cipher('a', 2)).toBe('c');
            expect(cipher('Z', 2)).toBe('B');
            expect(cipher('z', 2)).toBe('b');
            expect(cipher('.', 2)).toBe('.');
        });

        test('adds 25', () => {
            expect(cipher('e', 25)).toBe('d');
            expect(cipher('E', 25)).toBe('D');
        });

        test('adds 30', () => {
            expect(cipher('A', 30)).toBe('E');
            expect(cipher('a', 30)).toBe('e');
            expect(cipher('Z', 30)).toBe('D');
            expect(cipher('z', 30)).toBe('d');
            expect(cipher('.', 30)).toBe('.');
        });

        test('adds 26', () => {
            expect(cipher('A', 26)).toBe('A');
            expect(cipher('a', 26)).toBe('a');
            expect(cipher('Z', 26)).toBe('Z');
            expect(cipher('z', 26)).toBe('z');
            expect(cipher('.', 26)).toBe('.');
        });

        test('minus 1', () => {
            expect(cipher('A', -1)).toBe('Z');
            expect(cipher('a', -1)).toBe('z');
            expect(cipher('Z', -1)).toBe('Y');
            expect(cipher('z', -1)).toBe('y');
            expect(cipher('.', -1)).toBe('.');
        });

        test('minus 2', () => {
            expect(cipher('A', -2)).toBe('Y');
            expect(cipher('a', -2)).toBe('y');
            expect(cipher('Z', -2)).toBe('X');
            expect(cipher('z', -2)).toBe('x');
            expect(cipher('.', -2)).toBe('.');
        });

        test('minus 30', () => {
            expect(cipher('A', -30)).toBe('W');
            expect(cipher('a', -30)).toBe('w');
            expect(cipher('Z', -30)).toBe('V');
            expect(cipher('z', -30)).toBe('v');
            expect(cipher('.', -30)).toBe('.');
        });
    });
}


const elapsed = {
    craig: [],
    matt: [],
    dragon: [],
};
const RUN_COUNT = 1000000;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < RUN_COUNT; j++) {
        const startTime = performance.now();
        const cipher = implementations[i];

        cipher('The quick brown fox jumps over the lazy dog', 10);

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
