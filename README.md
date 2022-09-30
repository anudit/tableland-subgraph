# Tableland Subgraphs

## ethereum-goerli

Build completed: QmcHuauTV47aNCpPznwWyxRtR7HYxPtosgUSPCnnNjrYRL

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum-goerli/v1.1


## mumbai

Build completed: QmWMndJchbf5VihcuUiFmzgGmWBcGDTVkj2CmZKhE5uPUH

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland


## optimism-goerli

Build completed: QmPtwkrK5YiLyTJMS1a8sUunpjDbAqBhCdC5mcsojmAGxe

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli

## arbitrum-goerli

Build completed: QmWGy3dJkrrrAv2PyoSVT7bFeF4cX9mEJeR1TR6EqyHgfH

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-arbitrum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-arbitrum-goerli
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland-arbitrum-goerli


## Examples

```gql
{
  tables(where: {name: "dtest_80001_2355"}) {
    name
    owner
    tableId
    statement
    tokenURI
    historyCount
    history {
      id
      statement
      time
    }
  }
}
```
