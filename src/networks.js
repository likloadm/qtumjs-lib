module.exports = {
    qtum: {
        messagePrefix: '\x15Arielcoin Signed Message:\n',
        bech32: 'arl',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x3a,
        scriptHash: 0x17,
        wif: 0x80
    },
    qtum_testnet: {
        messagePrefix: '\x15Qtum Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
