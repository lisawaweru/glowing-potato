import input from 'input';


async function main() {
    const shopping = [];
    let finished = false;

    while (!finished) {
        // resp is short for response
        const resp = await input.text('Enter an item (or "finish"')
        if(resp == "finish") {
            finished = true;
        } else {
            shopping.push(resp)
        }
    }
    console.log("Here is your shopping list.");
    console.log(shopping)
}
main()