const { AndromedaClient } = require('@andromeda-protocol/andromeda-js');

const client = new AndromedaClient({
    rpcUrl: 'https://testnet-rpc.andromedaprotocol.io',
});

const mnemonic = 'your test wallet mnemonic here';

document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const wallet = await client.createWallet(mnemonic);
        console.log(`Connected to wallet address: ${wallet.address}`);

        const adoAddress = 'your-ado-address-here'; // Replace with a valid ADO address
        const metadata = await client.queryAdo(adoAddress, 'metadata');

        document.getElementById('output').textContent = JSON.stringify(metadata, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('output').textContent = 'Error fetching data.';
    }
});
