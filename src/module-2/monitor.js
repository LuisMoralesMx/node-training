/*
Name: Luis Morales
Date: Thursday 22, 2023

This monitor.js runs a command that displays in real time a summary of the current processes
running in the OS.

To run the monitor type in console: node monitor.js
*/

const childProcess = require('child_process');
const COMMAND_WIN = 'powershell "Get-Process | Sort-Object CPU -Descending | Select-Object -Property Name, CPU, WorkingSet -First 1 | ForEach-Object { $_.Name + \' \' + $_.CPU + \' \' + $_.WorkingSet }"';
const COMMAND_UNIX_BASE = 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1';

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

const runMonitor = (command) => {
    spawnProcess(command);
}

setInterval(() => {
    let command = '';

    switch (process.platform) {
        case 'win32':
            command = COMMAND_WIN; // Windows Platform
            break;
        default:
            command = COMMAND_UNIX_BASE; // Unix Base Platforms
    }

    runMonitor(command);
}, 1000, 10);