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
      network: "{{network}}",
      address: "{{address}}",
      abi: "./abis/TablelandTables.json",
      startBlock: {{startBlock}},
      maxBlockRange: 1000
    },
  ],
};
