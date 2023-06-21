/*
Name: Luis Morales
Date: Thursday 15, 2023

This monitor.js runs a command that displays in real time a summary of the current processes
running in the OS.
*/

const childProcess = require('child_process');
const os = require('os');

const spawnProcess = (command) => {
    childProcess.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(stdout);
    });
};

const runMonitor = () => {
    spawnProcess('ps -A -o %cpu,%mem,comm | sort -nr | head -n 1');
}

setInterval(() => {
    let command = '';

    if (process.platform === 'darwin') { // MacOs
        command = 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1'
    }
    runMonitor(command);
}, 1000, 5);