let canBe = [
    'Desenvolvedor',
    'Programador',
    'Competidor'
];
let canBeIndex = 0;
let canBeLetters = 0;
const sleep = (miliseconds) => new Promise((resolve, reject) => {
    setTimeout(resolve, miliseconds);
})
const typeEl = document.getElementById('hero-title');
let typing = false;
const type = async () => {
    let word = canBe[canBeIndex % canBe.length];
    typeEl.textContent = word.slice(0, canBeLetters);
    if (canBeLetters === 0) {
        typing = !typing;
        canBeIndex++;
        await sleep(300);
    } else if (canBeLetters === word.length) {
        typing = !typing;
        await sleep(900);
    }
    if (typing) {
        canBeLetters++;
        await sleep(200)
    } else {
        canBeLetters--;
        await sleep(100);
    }
    type();
}

type();