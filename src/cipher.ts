
/**
Caesar Cipher, by Al Sweigart al@inventwithpython.com
Do you want to (e)ncrypt or (d)ecrypt?
> e
Please enter the key (0 to 25) to use.
> 4
Enter the message to encrypt.
> Meet me by the rose bushes tonight.4
QIIX QI FC XLI VSWI FYWLIW XSRMKLX.
Full encrypted text copied to clipboard.

Caesar Cipher, by Al Sweigart al@inventwithpython.com
Do you want to (e)ncrypt or (d)ecrypt?
> d
Please enter the key (0 to 26) to use.
> 4
Enter the message to decrypt.
> QIIX QI FC XLI VSWI FYWLIW XSRMKLX.
MEET ME BY THE ROSE BUSHES TONIGHT.
Full decrypted text copied to clipboard.
**/

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

function encryptInput (userString: string, encryptKey: number): string {
    const newSymbols = new Map();
    const encryptedString = []
    for (let i = 65; i <= 90; i++) {
        let newNumber = i + encryptKey;
        if (newNumber > 90) {
            newNumber = newNumber - 26;
        }
        newSymbols[String.fromCharCode(i)] = String.fromCharCode(newNumber);
    }
    // console.log(newSymbols);
    for (const c of userString.toUpperCase()) {
        if (newSymbols[c]) {
            encryptedString.push(newSymbols[c]);
        } else {
            encryptedString.push(c);
        }
    }

    return encryptedString.join('');
}

function decryptInput (userString: string, encryptKey: number): string {
    const newSymbols = new Map();
    const decryptedString = []
    for (let i = 65; i <= 90; i++) {
        let newNumber = i + encryptKey;
        if (newNumber > 90) {
            newNumber = newNumber - 26;
        }
        newSymbols[String.fromCharCode(newNumber)] = String.fromCharCode(i);
    }

    for (const c of userString.toUpperCase()) {
        if (newSymbols[c]) {
            decryptedString.push(newSymbols[c]);
        } else {
            decryptedString.push(c);
        }
    }

    return decryptedString.join('');
}

async function getInput(): Promise<void> {
    const rl = readline.createInterface({input, output});
    let readyToExit = false;
    while (true) {
        const answer = await rl.question('Do you want to (e)ncrypt or (d)crypt ? ');
        switch (answer.toLowerCase()) {
            case 'e':
                let enMessage = await rl.question('Please enter the message to encrypt \n')
                let enKey = await rl.question('Please enter the key (0 to 25) to use \n')
                console.log(encryptInput(enMessage, parseInt(enKey)));
                break;
            case 'd':
                let deKey = await rl.question('Please enter the key (0 to 25) to use \n')
                let deMessage = await rl.question('Please enter the message to dencrypt \n')
                console.log(decryptInput(deMessage, parseInt(deKey)));
                break;
            case 'exit':
                readyToExit = true;
                break;
        }

        if (readyToExit) {
            break;
        }
    }
    rl.close();
}

async function main() {
    await getInput();
}

main();
