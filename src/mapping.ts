import {
  TablelandTables,
  CreateTable,
  SetController,
  RunSQL
} from "../generated/TablelandTables/TablelandTables"
import { Table, History } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts";

export function handleCreateTable(event: CreateTable): void {

  let entity = Table.load(event.params.tableId.toString())
  if (!entity) {
    entity = new Table(event.params.tableId.toString())
  }

  entity.owner = event.params.owner;
  entity.tableId = event.params.tableId;
  entity.statement = event.params.statement;
  entity.name = event.params.statement.split(' ')[2].concat(`_${event.params.tableId}`);
  entity.created = event.block.timestamp;
  entity.txnHash = event.transaction.hash.toHexString();

  let contract = TablelandTables.bind(event.address);
  entity.tokenURI = contract.tokenURI(event.params.tableId);
  entity.controller = event.params.owner;
  entity.historyCount = BigInt.fromI32(0);

  entity.save();

}

export function handleSetController(event: SetController): void {

  let entity = Table.load(event.params.tableId.toString())
  if (entity) {
    entity.controller = event.params.controller;
    entity.save();
  }

}

export function handleRunSql(event: RunSQL): void {

  let entity = Table.load(event.params.tableId.toString())
  if (entity) {
    entity.historyCount = entity.historyCount.plus(BigInt.fromI32(1));

    let history = new History(event.transaction.hash.toHexString());
    history.statement = event.params.statement;
    history.time = event.block.timestamp;
    history.tablePointed = event.params.tableId.toString();
    history.save();

    entity.save();
  }

}
