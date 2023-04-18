import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "arbitrum-nova", chainId: 42170, rpcUrl: process.env.ARBITRUM_RPC_URL },
    { name: "filecoin-mainnet", chainId: 314, rpcUrl: process.env.FILECOIN_MAINNET_RPC_URL },
    { name: "filecoin-hyperspace", chainId: 3141, rpcUrl: process.env.FILECOIN_HYPERSPACE_RPC_URL }
  ],
  contracts: [
    {
      name: "TablelandTables",
      network: "arbitrum-nova",
      address: "0x1a22854c5b1642760a827f20137a67930ae108d2",
      abi: "./abis/TablelandTables.json",
      startBlock: 3004125,
    },
    // {
    //   name: "TablelandTables",
    //   network: "filecoin-mainnet",
    //   address: "0x59EF8Bf2d6c102B4c42AEf9189e1a9F0ABfD652d",
    //   abi: "./abis/TablelandTables.json",
    //   startBlock: 2718630,
    // },
    // {
    //   name: "TablelandTables",
    //   network: "filecoin-hyperspace",
    //   address: "0x0B9737ab4B3e5303CB67dB031b509697e31c02d3",
    //   abi: "./abis/TablelandTables.json",
    //   startBlock: 200531,
    //   blockLimit: 1000
    // },
  ],
};
