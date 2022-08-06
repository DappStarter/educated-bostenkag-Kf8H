require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain evil inflict permit fortune street'; 
let testAccounts = [
"0xd6ff4f53a1a9d46b94aae667efbab4565bb05951f1baf40d64ddfb281e515fdd",
"0xe0af964024af01de75c66a49452fee93182d6130ee2e2337eae3cbc1b3dfd3a7",
"0xd0e1dce81f14a49801b705f259032de992b677a0554856a84882984a9aabd967",
"0xc8b555723d8be5ed5b71c0d4e1b97e3910ce679fedfdc221d39beffa524a5303",
"0x557f5639a67fed41b77c4a09d364ece476bce3a70896a80ba0ffb2ee0a8e0cd2",
"0x08671cb74f7ecfb0def7e10a8dc1567b9f55073d5d69e4ef3a0fa65af508f104",
"0x760bd972327db192e772132678a333ca8fd5ff8c6a627677052fb53121caf0e6",
"0x1ab53d53a765891990d71f8f9cb9b9410b714c43425ee92b88399db1fbd893ac",
"0x246a1bc050b28f74c47df108cdf8748d53aaab793d037dde69ac85cf6ea974f3",
"0x08e8a62878209e999c7f67f21c2538367e418805b3c148ac4a71c057db9a148c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

