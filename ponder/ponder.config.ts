import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "arbitrum-nova", chainId: 42170, rpcUrl: process.env.ARBITRUM_RPC_URL },
  ],
  contracts: [
    {
      name: "TablelandTables",
      network: "arbitrum-nova",
      address: "0x1a22854c5b1642760a827f20137a67930ae108d2",
      abi: "./abis/TablelandTables.json",
      startBlock: 3004125,
    },
  ],
};
