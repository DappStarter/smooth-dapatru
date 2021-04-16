require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict hidden swift trip lizard rate magic around inner neck equal giant'; 
let testAccounts = [
"0x6f15f19ba97de6158829c6f0b4117309a54d819eaf4da661661dc7e73bf33a9f",
"0x6b8d9f4dfc0072cb07bcee0137fa95b9d1b4c17f841952612c0af1c1af07d140",
"0x30b92d49f076e3f0fe4a55d0bf34a9a35405f54e37cdeb2acf7c61772c8fd78b",
"0xd35e012878c01d01851beea89ffdbd01e65c9d9339431735cd10cd50376a4b03",
"0xffc2a5c25e74b480ca00a0e9bb478462814c964066a61e66797875bcdb2254b7",
"0x1d17038d63eb5f6d573bb59c5957863fe45c2a67279040df00bac1d48b1e5935",
"0x3cafef66e66417b2198652104d1a7ee4eb8a248add4c4a025efe0b6ff5625373",
"0x90931b4ce5e2a4c60f91fa71f0cf14f67c135a5c84ca785dbc21e9dc802c11c7",
"0xd6d6bbb3586ddffdb61d042f215c3895fc95040bdc6107d048beb61215334474",
"0x767f7dba981162f2cf6cfe5e3bad4b108c04a100c64ffcdcc231f82548c206ab"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

