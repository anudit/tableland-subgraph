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

## Ethereum Sepolia

Build completed: QmZTnMaGFtLLyR63GTVYGcTMjEbUagZodiCV9zAD1xk4T5

Deployed to https://thegraph.com/studio/subgraph/tablescan-ethereum-sepolia

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tablescan-ethereum-sepolia/v1.12

## Polygon Mainnet

Build completed: QmXdrXeYW4sfFWCfTcHxsZGZaznhjkyTahpVjBM6eTtnEZ

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-polygon

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-polygon


## Polygon Mumbai Testnet

Build completed: QmcZLiHyto62YR5ivCn5cTxMfxMTAQ7X3XjsVZvinF8W4i

Deployed to https://thegraph.com/studio/subgraph/tablescan-polygon-mumbai

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tablescan-polygon-mumbai/v1.12


## Optimism

Build completed: QmW96K48v2HLC2WEeetzNEoyRncEGqVaMp1bi6AbSJweTp

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism


## optimism-goerli

Build completed: QmfRuh2Z35fs3QusXAF5SkWacadPQ4se9tPeeBhhz5uqVY

Deployed to https://thegraph.com/studio/subgraph/tablescan-optimism-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tablescan-optimism-goerli/v1.12


## arbitrum-one

Build completed: QmQSuZjd6fbmnnmX91WX3ggkafmukKjrCjMgE8aLMjPvrW

Deployed to https://thegraph.com/studio/subgraph/tablescan-arbitrum

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tablescan-arbitrum/v1.13.2

## arbitrum-goerli

Build completed: Qmd2LTuHUTythTwSLe9K2mZdCU9p5xwFiaWP8ptvwV6DwB

Deployed to https://thegraph.com/studio/subgraph/tablescan-arbitrum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tablescan-arbitrum-goerli/v1.12

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
