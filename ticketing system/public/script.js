// fetch("http://localhost:8080/api/login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         "email": "customer2@example.com",
//         "password": "password123"
//     }),
//     credentials: "include"
// })

// fetch("http://localhost:8080/api/ticket", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ "eventId": "6755325fcb62eb49cc60c9d7" }),
//     credentials: "include"
// })

// File: simulation-test.js

class SimulationTester {
    constructor() {
        this.ws = null;
        this.isConnected = false;
    }

    connect() {
        this.ws = new WebSocket('ws://localhost:8080/ws');

        this.ws.onopen = () => {
            console.log('Connected to WebSocket');
            this.isConnected = true;
        };

        this.ws.onmessage = (event) => {
            console.log('Simulation:', event.data);
        };

        this.ws.onclose = () => {
            console.log('WebSocket connection closed');
            this.isConnected = false;
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    startSimulation() {
        if (!this.isConnected) {
            console.error('Not connected to WebSocket');
            return;
        }
        console.log('Starting simulation...');
        this.ws.send('START');
    }
}

// Global instance that can be accessed from browser console
const simulator = new SimulationTester();

// Function to be called from browser console
function run() {
    simulator.connect();
    // Wait for connection before starting
    setTimeout(() => {
        if (simulator.isConnected) {
            simulator.startSimulation();
        }
    }, 1000);
}

// Optional: Auto-cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (simulator.ws) {
        simulator.ws.close();
    }
});