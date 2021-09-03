var u;

function add(difficulty) {
    var a = [
        ['', '', 3, 4, '', 6, 7, '', ''],
        [7, '', '', 1, '', '', 4, 5, ''],
        [4, 5, '', '', 8, 9, '', '', ''],
        [3, '', 2, 8, 4, 5, '', '', ''],
        ['', 9, 7, '', '', 2, '', 4, 5],
        ['', '', 5, '', 9, '', 3, '', 2],
        [2, 3, 1, 5, '', '', '', 9, ''],
        [9, '', '', 2, 3, '', 5, 7, ''],
        ['', 7, '', '', '', '', '', '', 1]
    ];
    var b = [
        ['', '', '', 1, '', 5, '', '', ''],
        [1, 4, '', '', '', '', 6, 7, ''],
        ['', 8, '', '', '', 2, 4, '', ''],
        ['', 6, 3, '', 7, '', '', 1, ''],
        [9, '', '', '', '', '', '', '', 3],
        ['', 1, '', '', 9, '', '', '', ''],
        ['', '', 7, '', '', '', '', 8, ''],
        ['', 2, '', '', '', '', '', 3, 5],
        ['', '', '', 4, '', 9, '', '', '']
    ];
    var h = [
        ['', '', '', '', 9, '', 8, '', ''],
        ['', '', '', '', 4, '', 9, '', ''],
        ['', '', 5, '', 7, '', '','' , 4],
        ['', '', '', 3, '', '', '', '', 1],
        ['', 5, '', 1, 8, '', 3, '', 2],
        [3, '', '', '', '', 2, '', '', ''],
        [9, '', '', '', 3, '', 5, '', ''],
        ['', '', 3, '', 1, '', '', '', ''],
        ['', '', 6, '', 2, '', '', '', '']
    ];
    if (difficulty == 1) {

        clear();
        renderBoard(a);
    } else if (difficulty == 2) {
        clear();
        renderBoard(b);
    } else {

        clear();

        renderBoard(h);
    }

}

function clear() {
    var c = 0;
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {

            document.querySelector(`#cell-${c} input`).value = '';
            document.querySelector(`#cell-${c} input`).disabled = false;
            document.querySelector(`#cell-${c}`).classList.remove("color");
            document.querySelector(`#cell-${c}`).classList.remove("red");
            document.querySelector(`#cell-${c}`).classList.remove("blue");
            document.querySelector(`#cell-${c}`).classList.remove("blue");
            document.querySelector(`#cell-${c} input`).classList.remove("color");
            document.querySelector(`#cell-${c} input`).classList.remove("red");
            document.querySelector(`#cell-${c} input`).classList.remove("blue");
            document.querySelector(`#cell-${c} input`).classList.remove("light");
            document.querySelector(`#cell-${c} input`).classList.remove("light");
            c++;

        }
    }
}



function renderBoard(board) {
    clear();
    var c = 0;
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (board[i][j] != '') {
                document.querySelector(`#cell-${c} input`).value = board[i][j];
                document.querySelector(`#cell-${c} input`).disabled = true;
                document.querySelector(`#cell-${c}`).classList.add("color");


            }
            c++;
        }
    }
    u = board.slice();

}

function check(r, c) {



    var d = 0;
    var e = document.querySelector(`#cell-${r*9+c} input`).value;
   color(r, c);
    instance(e);
    for (var j = 0; j < 9; j++) {
        if (u[r][j] == e && e != '' && j != c) {

            d++;

        } else {
            document.querySelector(`#cell-${r*9+j} input`).classList.add("light");
        }
    }
    for (var j = 0; j < 9; j++) {
        if (u[j][c] == e && e != '' && j != r) {

            d++;

        } else {
            document.querySelector(`#cell-${j*9+c} input`).classList.add("light");
        }
    }

   x = r;
    y = c;

    var startY = Math.floor(y / 3) * 3;
    for (var y2 = startY; y2 < startY + 3; ++y2) {
        var startX = Math.floor(x / 3) * 3;
        var f = 0;
        for (x2 = startX; x2 < startX + 3; ++x2) {

            if ((x2 != x || y2 != y) && u[x2][y2] == e && e != '') {
                d++;

            } else {
                document.querySelector(`#cell-${x2*9+y2} input`).classList.add("light");

            }
        }

    }

    if (d >= 1) {

        document.querySelector(`#cell-${r*9+c} input `).setAttribute("class", "red");
        document.querySelector(`#cell-${r*9+c} input`).value = '';
        return d;
    } else {
        u[r][c] = e;

        return d;
    }


}


function validate() {

    var f = 0;
    var o = 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            o++;
            if (check(i, j)>1) {
                f = 1;
                break;
            }
        }
        if (f == 1) {
            alert("wrong");
            break;
        }
    }
    document.querySelector(`#cell-${8} input`).removeAttribute("class");
    var d = 0;
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (u[i][j] !== '') {
                d++;
            }
        }
    }
    if (d == 81) {

alert("Congratulation you solved the sudoku puzzle!");
    } else {
        alert("Complete it! you are going in right direction");
    }
}

function color(r, c) {
    var d = r * 9 + c;

    for (var i = 0; i < 81; i++) {
        var z = document.querySelector(`#cell-${i} input`);
        if (i == d) {
            z.setAttribute("class", "blue");

        } else {
            z.removeAttribute("class", "blue");
            z.removeAttribute("class", "red");
            z.removeAttribute("class", "light");
            z.removeAttribute("class", "light");
        }
    }
}

function instance(e) {

    for (var i = 0; i < 81; i++) {
        var z = document.querySelector(`#cell-${i} input`).value;
        if (z == e && e != '') {
            document.querySelector(`#cell-${i} input`).classList.add("light");
        }
    }
}
window.onload = () => {
    add(1);
}
