export const candyMachineAddress = "0x93221906eaef9f79994092dea6daa99c5794133a2f3921d2b382610a0b33f52c";
export const collectionName = "TST"; // Case sensitive!
export const collectionCoverUrl = "https://gateway.pinata.cloud/ipfs/QmWZubPbyP51RyqsehevhfyJRcagETvjCjdvRnSqY74zw4";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}