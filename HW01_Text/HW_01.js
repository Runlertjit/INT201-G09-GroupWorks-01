function StringWay(num) {
    const text = 'Hello World';
    let Vowals = ['a', 'e', 'i', 'o', 'u'];
    let newAns1 = "";
    let text1 = text.toLowerCase();
    if (num == 1) {
        for (var x = text.length - 1; x >= 0; x--) {
            newAns1 += text[x];
        }
        return newAns1;
    } else if (num == 2) {
        let ans2 = '';
        for (let x = 0; x < text.length; x++) {
            if (Vowals.includes(text1[x])) {
                ans2 += '*';
            } else {
                ans2 += text[x];
            }
        }
        return ans2;
    } else if (num == 3) {
        var count = 0;
        for (let x = 0; x < text1.length; x++) {
            if (Vowals.includes(text1[x]) == true) {
                count++;
            }
        }
        return count;
    }
}

      

