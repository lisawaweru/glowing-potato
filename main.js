import input from 'input';
async function main() {
    const myAge = 19
    const age = await input.text(' What is your age?');

if (myAge >= 19) {
console.log('You can drive!');
} else {
console.log ('You cannnot drive!'); 
}
}
main();
