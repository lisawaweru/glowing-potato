import input from 'input';
async function main() {
    const drivingAge = 18
    let tocontinue = true;

    while (true) {
        const age = await input.text(' What is your age?');
        const hasLicense = await input.confirm('Do you have your License?');
        if (age>= drivingAge && hasLicense) {
            console.log('You can drive!');
        } else {
            console.log ('You cannnot drive!'); 
            if (!hasLicense) {
                console.log("Go get your license!")
            } else {
                console.log('You are not old enough!');
            }
        }
        tocontinue = await input.confirm('Do you wamt to continue?');
    
    }
}

main();
    
    



