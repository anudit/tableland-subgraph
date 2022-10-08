# Tableland Subgraphs

## ethereum-goerli

Build completed: QmWDDYqFPJ14ZeNX34xdAGyhAcBBCobGFEhkJkfJxZuoC9

Deployed to https://thegraph.com/studio/subgraph/tableland-ethereum-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/tableland-ethereum-goerli/v1.3


## mumbai

Build completed: QmaH1dAeNWc4vtonb5hk3jR6hQ5MP5Ru3BmUQBhx3aokLK

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland


## optimism-goerli

Build completed: QmeYbt3nqFKh6MYgXzsBv3puMB1Kad7AB2zHjBqACbb8GV

Deployed to https://thegraph.com/explorer/subgraph/anudit/tableland-optimism-goerli

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/tableland-optimism-goerli

## arbitrum-goerli

Build completed: QmULqPWCcSH7nzBzYcZnc1MZnuqrDmmCEnuyXCHzQeiafG

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
