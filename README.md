# Tableland Subgraphs

## Ethereum Mainnet

Build completed: QmfGN5gWQqdTrety92T62dwVF6eNsQUV2FeDhdtTVvxnoX

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum/v1.12


## Ethereum Goerli

Build completed: QmQjmRCuhibYnxwnGvqN645KtHXjWn3gj7dy9ZCZ6HmJrx

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum-goerli/v1.12


## Polygon Mainnet

Build completed: QmXdrXeYW4sfFWCfTcHxsZGZaznhjkyTahpVjBM6eTtnEZ

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-polygon

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-polygon


## Polygon Mumbai Testnet

Build completed: QmPnb6UhZ1gevGtUe2rTmeVWFuSNxv5QoMek78Bk7L9qsa

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland


## Optimism

Build completed: QmW96K48v2HLC2WEeetzNEoyRncEGqVaMp1bi6AbSJweTp

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism


## optimism-goerli

Build completed: QmbLj4j5mwVR4YLLintStojwHSW4QLZtpkBQD73Qow6n13

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli


## arbitrum-one

Build completed: QmSGWJj5ZNRnQe7Dx3WtgA2dtWVPyEd71WiABZWWei4kei

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-arbitrum

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-arbitrum

## arbitrum-goerli

Build completed: QmT4dKzYUcSp8SCPbzPzgNjdj7v1m3RUidpcet2pGZ4BKX

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-arbitrum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-arbitrum-goerli

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
