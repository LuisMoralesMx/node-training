/*
Name: Luis Morales
Date: Thursday 15, 2023

This monitor.js runs a command that displays in real time a summary of the current processes
running in the OS.
*/


const childProcess = require('child_process');
const commandWin = 'powershell "Get-Process | Sort-Object CPU -Descending | Select-Object -Property Name, CPU, WorkingSet -First 1 | ForEach-Object { $_.Name + \' \' + $_.CPU + \' \' + $_.WorkingSet }"';
const commandMacOs = 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1';

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
        process.stdout.write(stdout + "\r");
    });
};

const runMonitor = () => {
    spawnProcess('ps -A -o %cpu,%mem,comm | sort -nr | head -n 1');
}

setInterval(() => {
    let command = '';

    switch (process.platform) {
        case 'darwin':
            command = commandMacOs; // MacOs Platform
            break;
        case 'win32':
            command = commandWin; // Windows Platform
            break;
        default:
            command = commandMacOs; // Linux Like Platforms
    }

    runMonitor(command);
}, 1000, 10);