window.onload = function() {
    document.querySelector('.hero').classList.add('show');
    typeTerminal();
    matrixEffect();
    updateSecurityLogs();
};

// Live typing introduction
const terminalText = "Accessing 369emon's Cyber Fortress...\nInitializing Security Protocols...\nWelcome to a world of Cybersecurity & IoT!";
let index = 0;

function typeTerminal() {
    if (index < terminalText.length) {
        document.getElementById("terminalText").innerHTML += terminalText.charAt(index);
        index++;
        setTimeout(typeTerminal, 50);
    }
}

// Matrix-style falling code effect
function matrixEffect() {
    const chars = "0123456789ABCDEF";
    let matrixStr = "";

    for (let i = 0; i < 300; i++) {
        matrixStr += chars[Math.floor(Math.random() * chars.length)];
        if (i % 30 === 0) matrixStr += "\n";
    }

    document.getElementById("matrixRain").innerText = matrixStr;
}

// Security logs cycling dynamically
const securityUpdates = [
    "[369emon]: Monitoring unauthorized access attempts...",
    "[369emon]: IoT Sentinel scanning for vulnerabilities...",
    "[369emon]: CyberShield firewall optimized.",
    "[369emon]: ThreatMatrix AI processing latest risks...",
];

let logIndex = 0;

function updateSecurityLogs() {
    document.getElementById("securityLogs").innerText = securityUpdates[logIndex];
    logIndex = (logIndex + 1) % securityUpdates.length;
}

setInterval(updateSecurityLogs, 3000);

function scrollToRepos() {
    document.querySelector('.repositories').scrollIntoView({ behavior: 'smooth' });
}