import {
  TablelandTables,
  CreateTable
} from "../generated/TablelandTables/TablelandTables"
import { Table } from "../generated/schema"

export function handleCreateTable(event: CreateTable): void {

  let entity = Table.load(event.transaction.hash.toHexString())
  if (!entity) {
    entity = new Table(event.transaction.hash.toHexString())
  }

  entity.owner = event.params.owner;
  entity.tableId = event.params.tableId;
  entity.statement = event.params.statement;
  entity.name = event.params.statement.split(' ')[2].concat(`_${event.params.tableId}`);

  let contract = TablelandTables.bind(event.address);
  entity.tokenURI = contract.tokenURI(event.params.tableId);

  entity.save();

}
