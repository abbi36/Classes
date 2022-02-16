import input from 'input';

class App {
    constructor(password) {
        this.answer = 'password123';
    }

    async main() {
        const resp = await input.text('What is the password?');
        if (resp == this.answer) {
            console.log('Correct!')
        } else {
            console.log('Incorrect.');
        }

    }
}

const app = new App('password123');
app.main();