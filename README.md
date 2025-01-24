# Integrating AndromedaJS with aOS for Custom Frontend Applications

This tutorial walks you through integrating AndromedaJS with the Andromeda Operating System (aOS) to build a custom frontend application. By the end, you'll be able to interact with ADOs, fetch data, and send transactions directly from your app.

---

## **Introduction**
AndromedaJS is a JavaScript library that simplifies interactions with the Andromeda blockchain. This guide is for developers who want to extend their dApps by integrating custom frontends with aOS.

### **What You'll Learn**
1. Setting up AndromedaJS in a Node.js project.
2. Connecting to the aOS testnet.
3. Fetching data from and sending transactions to an ADO.
4. Creating a simple frontend interface.

---

## **Prerequisites**
Before starting, ensure you have:
- Node.js (v16+) and npm installed. [Install Node.js](https://nodejs.org/)
- Access to the Andromeda testnet. [Get started here](https://docs.andromedaprotocol.io/)
- Basic knowledge of JavaScript and HTML.

---

## **Step-by-Step Guide**

### 1. Set Up Your Environment
1. **Initialize a Node.js project**:
    ```bash
    mkdir andromeda-frontend
    cd andromeda-frontend
    npm init -y
    ```
2. **Install AndromedaJS**:
    ```bash
    npm install @andromeda-protocol/andromeda-js
    ```

---

### 2. Connect to the Andromeda Testnet
1. **Import AndromedaJS**:
    ```javascript
    const { AndromedaClient } = require('@andromeda-protocol/andromeda-js');
    ```
2. **Set Up the Client**:
    ```javascript
    const client = new AndromedaClient({
        rpcUrl: 'https://testnet-rpc.andromedaprotocol.io',
    });
    ```
3. **Authenticate with a Wallet**:
    ```javascript
    const mnemonic = 'your test wallet mnemonic here';
    const wallet = await client.createWallet(mnemonic);
    console.log(`Connected to wallet address: ${wallet.address}`);
    ```

---

### 3. Fetch Data from an ADO
1. **Example: Query Metadata**:
    ```javascript
    const adoAddress = 'your-ado-address';
    const metadata = await client.queryAdo(adoAddress, 'metadata');
    console.log('ADO Metadata:', metadata);
    ```

---

### 4. Build a Simple Frontend
1. **HTML File**:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Andromeda Frontend</title>
    </head>
    <body>
        <h1>Andromeda Frontend</h1>
        <button id="fetch">Fetch ADO Data</button>
        <pre id="output"></pre>
        <script src="app.js"></script>
    </body>
    </html>
    ```

2. **JavaScript Logic**:
    ```javascript
    document.getElementById('fetch').addEventListener('click', async () => {
        const data = await client.queryAdo('your-ado-address', 'metadata');
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    });
    ```

---

### **Bonus Content**
- Add screenshots or a flowchart to show how AndromedaJS interacts with the aOS platform.
- Record a short video walkthrough of the setup and functionality.

---

## **Conclusion**
Congratulations! You’ve successfully integrated AndromedaJS with aOS and built a functional frontend. Explore more advanced features by visiting the [official Andromeda documentation](https://docs.andromedaprotocol.io/).
