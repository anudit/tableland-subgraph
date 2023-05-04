import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "arbitrum-nova", chainId: 42170, rpcUrl: process.env.ARBITRUM_RPC_URL },
    { name: "filecoin-mainnet", chainId: 314, rpcUrl: process.env.FILECOIN_MAINNET_RPC_URL },
    { name: "filecoin-hyperspace", chainId: 3141, rpcUrl: process.env.FILECOIN_HYPERSPACE_RPC_URL },
    { name: "sepolia", chainId: 11155111, rpcUrl: 'https://rpc.sepolia.org' }
  ],
  contracts: [
    {
      name: "TablelandTables",
      network: "filecoin-mainnet",
      address: "0x59EF8Bf2d6c102B4c42AEf9189e1a9F0ABfD652d",
      abi: "./abis/TablelandTables.json",
      startBlock: 2718630,
      maxBlockRange: 1000
    },
  ],
};
