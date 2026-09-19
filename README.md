# Network Messaging Simulator

An interactive web-based simulation modeling a distributed client-server network architecture. The project visualizes packet transmission pipelines, centralized routing logic, and transmission queuing between connected clients and a central server using Object-Oriented JavaScript.

---

## Application Preview

<img width="1367" height="865" alt="צילום מסך 2026-09-10 003358" src="https://github.com/user-attachments/assets/92f6b774-3b3e-4f64-bc52-0f1dead352fd" />
<img width="853" height="480" alt="example" src="https://github.com/user-attachments/assets/8825cfa1-90ab-4d93-9e46-7e975c249390" />

## Architecture & Class Design

The application adheres to core Object-Oriented Programming (OOP) and separation-of-concerns principles, modeling network components as independent entities:

* **`Server`**: Acts as the central network hub. Maintains a dynamic `routingTable` mapping client identifiers to transmission lines without holding direct references to the client instances (Decoupling).
* **`Client`**: Represents a network host endpoint capable of composing messages, dispatching packets via its assigned channel, and maintaining an incoming message log.
* **`Cable`**: Encapsulates a bi-directional communication medium between endpoints, managing message transit, channel concurrency, and propagation latency.
* **`Package`**: Represents the discrete network payload containing addressing metadata (`from`, `to`), message payload (`text`), and triggers visual transit animations.

---

## Key Features

* **Centralized Packet Routing:** Packets are inspected and routed by the server to their intended destination based on internal routing tables.
* **Address Resolution & Bounce Handling:** If a destination client does not exist in the routing table, the server generates a bounce notification packet returned directly to the sender.
* **Channel Concurrency Management:** Implements queuing checks (`tryToSend`) to prevent packet collision along an active cable line.
* **Dynamic Node Registration:** Real-time instantiation and dynamic UI rendering of new clients attached to dedicated communication channels.
* **Visual Data Flow:** CSS-driven packet animations illustrating latency and directional flow across network links.

---

## Tech Stack

![JavaScript](https://img.shields.io/badge/Language-JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/Markup-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Styling-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Architecture](https://img.shields.io/badge/Pattern-OOP_Decoupled-blue?style=flat-square)

---

## Getting Started

### Prerequisites

A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge).

### Running Locally

**1. Clone the repository:**
   ```bash
   git clone https://github.com/ShiraSil/network-messaging-simulator.git
   cd network-messaging-simulator
   ```

**2. Open the application:**

Open index.html directly in any browser.

Or run with VS Code's Live Server extension.

## Project Structure

```text
network-messaging-simulator/
│
├── css/
│   └── index.css
├── images/
│   ├── envelopeAnimation.png
│   ├── envelopeIcon.png
│   └── garbage.png
├── js/
│   ├── Cable.js
│   ├── Client.js
│   ├── Package.js
│   ├── Server.js
│   └── main.js
├── index.html
├── .gitignore
└── README.md
```
