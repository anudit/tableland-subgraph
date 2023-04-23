import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "arbitrum-nova", chainId: 42170, rpcUrl: process.env.ARBITRUM_RPC_URL },
    { name: "filecoin-mainnet", chainId: 314, rpcUrl: process.env.FILECOIN_MAINNET_RPC_URL },
    { name: "filecoin-hyperspace", chainId: 3141, rpcUrl: process.env.FILECOIN_HYPERSPACE_RPC_URL },
    { name: "sepolia", chainId: 11155111, rpcUrl: 'https://rpc.sepolia.org', pollingInterval: 10_000 }
  ],
  contracts: [
    {
      name: "TablelandTables",
      network: "sepolia",
      address: "0xc50C62498448ACc8dBdE43DA77f8D5D2E2c7597D",
      abi: "./abis/TablelandTables.json",
      startBlock: 3334951,
      maxBlockRange: 10000
    },
  ],
};
