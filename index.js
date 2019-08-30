export const craig = (i, incBy) => {
    // validation
    return i &&
        typeof i === 'string' &&
        typeof incBy === 'number' &&
        i.match(/[a-zA-Z]*/) &&
        i
            .split('') // make the string an array

            // for every letter, map it to something else
            .map(start => {
                // mod 26 because 50 is the same as 24
                incBy = incBy % 26;

                // -5 is the same as + 21
                if (incBy < 0) {
                    incBy = incBy + 26;
                }

                // get character as an ascii number
                let charCode = start.charCodeAt(0);
                let moveTo = charCode + incBy;

                // alias the function to make it shorter
                let s = String.fromCharCode;

                // ascii number boundaries
                let A = 65;
                let Z = 90;
                let a = 97;
                let z = 122;

                // catch anything that's not an english letter
                if (!start.match(/^[a-zA-Z]$/)) {
                    return start;
                }

                // if caps and the result ends up too far forward, knock it back
                if (start.match(/^[A-Z]$/) && (moveTo >= a && moveTo <= z)) {
                    moveTo = moveTo - 26;
                }

                // if the result is valid, return it
                if ((moveTo >= A && moveTo <= Z) || (moveTo >= a && moveTo <= z)) {
                    return s(moveTo);
                }

                // if the result is too big, knock it back and return it
                // don't need to check too small, because of the logic where we make everything a positive number
                if (
                    moveTo > Z ||
                    moveTo > z
                ) {
                    return s(moveTo - 26);
                }
            })

            // make it a string again
            .join('');
};




export const dragon = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const resultArray = [];

    for (let i = 0; i < string.length; i++) {
        const character = string[i],
            parsedNumberField = parseInt(number, 10),
            uppercase = character === character.toUpperCase();

        const position = alphabet.indexOf(character.toLowerCase()),
            positionWithAmount = position + parsedNumberField,
            newCharacterPosition = positionWithAmount % alphabet.length,
            newCharacter = newCharacterPosition >= 0 ?
                alphabet.charAt(newCharacterPosition) :
                alphabet.split('').reverse().join('').charAt(Math.abs(newCharacterPosition) - 1);

        if (!character.match(/^[a-zA-Z]+$/)) {
            resultArray.push(character);
        } else {
            resultArray.push(uppercase ? newCharacter.toUpperCase() : newCharacter);
        }
    }

    return resultArray.join('');
};

export const matt = (txt, inc) => {
    function x(txt, inc) {
        let lc = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let uc = lc.join('').toUpperCase().split('');

        let fin = [];
        for (var i = 0; i < txt.length; i++) {
            if (lc.includes(txt[i]) || uc.includes(txt[i])) {
                let char = txt[i].charCodeAt();
                if (char < 91) {
                    while (char + inc < 65) {
                        char = char + 26;
                    }
                    while (char + inc > 90) {
                        char = char - 26;
                    }
                } else {
                    while (char + inc < 97) {
                        char = char + 26;
                    }
                }
                while (char + inc > 122) {
                    char = char - 26;
                }
                let tmp = String.fromCharCode(char + inc);
                fin[i] = tmp;
            } else {
                fin[i] = txt[i];
            }
        }
        return fin.join('');
    };

    return x(txt, inc);
};
