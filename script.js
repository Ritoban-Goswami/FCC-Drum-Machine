play = (str) => {
    document.getElementById(str).play();
document.getElementById('display').innerHTML=str;
}

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'q':
            play('Q');
            break;
        case 'Q':
            play('Q');
            break;
        case 'w':
            play('W');
            break;
        case 'W':
            play('W');
            break;
        case 'e':
            play('E');
            break;
        case 'E':
            play('E');
            break;
        case 'a':
            play('A');
            break;
        case 'A':
            play('A');
            break;
        case 's':
            play('S');
            break;
        case 'S':
            play('S');
            break;
        case 'd':
            play('D');
            break;
        case 'D':
            play('D');
            break;
        case 'z':
            play('Z');
            break;
        case 'Z':
            play('Z');
            break;
        case 'x':
            play('X');
            break;
        case 'X':
            play('X');
            break;
        case 'c':
            play('C');
            break;
        case 'C':
            play('C');
            break;
    }
});