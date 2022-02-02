import input from 'input';
async function main() {
    const myAge = 19
    const age = await input.text(' What is your age?');
    const hasLicense = await input.confirm('Do you have your License?');
    if (myAge >= 19) {
        console.log('You can drive!');
    } else {
        console.log ('You cannnot drive!'); 
        if (!hasLicense) {
            console.log("Go get your license!")
        } else {
            console.log('You are not old enough!');
        }
    }
}

main();
