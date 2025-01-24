const { AndromedaClient } = require('@andromeda-protocol/andromeda-js');

const client = new AndromedaClient({
    rpcUrl: 'https://testnet-rpc.andromedaprotocol.io',
});

const mnemonic = 'vibrant trophy sibling heavy ordinary flame convince series era tilt misery observe'; // Replace with your wallet mnemonic

document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const wallet = await client.createWallet(mnemonic);
        console.log(`Connected to wallet address: ${wallet.address}`);

        const adoAddress = 'andr10k0x64jlssupgfpxldvrsrcz97dwgqmn44av5q'; // Replace with a valid ADO address
        const metadata = await client.queryAdo(adoAddress, 'metadata');

        document.getElementById('output').textContent = JSON.stringify(metadata, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('output').textContent = 'Error fetching data.';
    }
});
