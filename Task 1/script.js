let widthWindow = 5;
let arrXright = [];
let arrXleft = [];
let xR = 0;
let xL = 0;

for (let i = 0; i <= widthWindow; i++) {
    arrXright.push(i);
}
for (let i = widthWindow; i > 0; i--) {
    arrXleft.push(i);
}

function f1() {
    tRight = setInterval(() => {
        console.log(arrXright[xR])
        xR++;
        if (xR == widthWindow) {
            clearInterval(tRight);
            f2();
            xR = 0;
        }
    }, 1000);
    return tRight;
}

function f2() {
    tLeft = setInterval(() => {
        console.log(arrXleft[xL])
        xL++;
        if (xL == widthWindow) {
            clearInterval(tLeft);
            f1();
            xL = 0;
        }
    }, 1000);
}
f1();