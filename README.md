# Tableland Subgraphs

## Ethereum Mainnet

Build completed: QmTpr4vQfDoJzNwCaMtGut8C5i2s6BdWdn1DnLxNUKxQUb

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum/v1.9


## Ethereum Goerli

Build completed: QmcucXZ4e7CNaQTPE5bwev1DGXKKXJm2WEJGmudY2ateCu

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum-goerli/v1.9


## Polygon Mainnet

Build completed: QmT7oQmboLV5wBojYPSYSpx8xLAdnuavfJhbuNhjj8RvvP

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-polygon

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-polygon


## Polygon Mumbai Testnet

Build completed: QmWVRuskY6YYdQhChAPtuC9cd1eQ8vVLb7wktximtjUdd9

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland


## Optimism

Build completed: QmTZjPH9C6JDVznYYBmxasZ7FeRTyzvmMWyxG9EY59GHKD

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism


## optimism-goerli

Build completed: QmSLqXvdLHa8uStVZQfPqCY8D6rEn3jkFsXSQ3i4SqCRkz

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli


## arbitrum-goerli

Build completed: QmRHwhgJuj4sP33pwcCkSqdsFNxowW7VyGY7ym3Y5WopZi

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
