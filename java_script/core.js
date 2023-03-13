const photoHuman = document.querySelector('[data-photo-human]');
const photoMachine = document.querySelector('[data-photo-machine]');
let human = 0, machine = 0;

document.querySelector('.buttons').addEventListener('click', (event) => {
    const key = event.target.dataset.btn;

    if (key === 'rock') {
        photoHuman.setAttribute('src', 'assets/images/rock_hum.PNG');
        human = 1;
    } else if (key === 'paper') {
        photoHuman.setAttribute('src', 'assets/images/paper_hum.PNG');
        human = 2;
    } else if (key === 'scissors') {
        photoHuman.setAttribute('src', 'assets/images/scissor_hum.PNG');
        human = 3;
    };
});

const humanScore = document.querySelector('[data-human-score]');
const machineScore = document.querySelector('[data-mach-score]');
let humScore = 0, machScore = 0;
document.querySelector('[data-play]').addEventListener('click', () => {
    if (human === 0) {
        alert("You haven't chosen yet");
        return;
    } 
    const loading = document.querySelector('.loading');
    const humanWon = document.querySelector('[data-human]');
    const machWon = document.querySelector('[data-mach]');
    const random = Math.ceil(Math.random() * 3);
    loading.style['display'] = 'flex';
    let key = '';
    machWon.textContent = '';
    humanWon.textContent = '';

    async function main() {
        await new Promise(resolve => {
            setTimeout(() => {
                if (random === 1) {
                    photoMachine.setAttribute('src', 'assets/images/rock_mach.jpg');
                    machine = 1;
                    key = 'Rock';
                    resolve(machine);
                } else if (random === 2) {
                    photoMachine.setAttribute('src', 'assets/images/paper_mach.jpg');
                    machine = 2;
                    key = 'Paper';
                    resolve(machine);
                } else if (random === 3) {
                    photoMachine.setAttribute('src', 'assets/images/scissor_mach.jpg');
                    machine = 3;
                    key = 'Scissor';
                    resolve(machine);
                };
            }, 1000)
        }).then(machine => {
            document.querySelector('#machine-result').textContent = key;
            loading.style['display'] = 'none';
            setTimeout(() => {
                if (machine === human) {
                    alert('Tie');
                } else if (machine === 1 && human === 2) {
                    humanWon.textContent = 'Human won';
                    humScore++;
                } else if (machine === 1 && human === 3) {
                    machWon.textContent = 'Machine won';
                    machScore++;
                } else if (machine === 2 && human === 3) {
                    humanWon.textContent = 'Human won';
                    humScore++;
                } else if (machine === 2 && human === 1) {
                    machWon.textContent = 'Machine won';
                    machScore++;
                } else if (machine === 3 && human === 2) {
                    machWon.textContent = 'Machine won';
                    machScore++;
                } else if (machine === 3 && human === 1) {
                    humanWon.textContent = 'Human won';
                    humScore++;
                }
                humanScore.textContent = humScore;
                machineScore.textContent = machScore;
            }, 100);
        });
    } main();
});