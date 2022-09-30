# Tableland Subgraphs

## ethereum-goerli

Build completed: QmeEtrftWXYebxdc1syku1xUndu79dgj8Cw9WYSuziSN1R

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum-goerli/v1.2


## mumbai

Build completed: QmTQE4tLN7ZrJ2U6GL2wgMWvuTwZ25HmuMF9WrfnP5vuVc

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland


## optimism-goerli

Build completed: Qma64NYfc3NrBo3GSwVDWXn8uUMSHFif8GTFc2Zmfaoobz

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli

## arbitrum-goerli

Build completed: QmPDxMQVem9WSnThmTiMjbkTWMce2TRSk94AC6sGMBGPaG

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
