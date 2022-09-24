import {
  TablelandTables,
  CreateTable,
  SetController
} from "../generated/TablelandTables/TablelandTables"
import { Table } from "../generated/schema"

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

  entity.save();

}

export function handleSetController(event: SetController): void {

  let entity = Table.load(event.params.tableId.toString())
  if (entity) {
    entity.controller = event.params.controller;
    entity.save();
  }

}
