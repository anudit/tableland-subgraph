import {
  TablelandTables,
  CreateTable,
  SetController,
  RunSQL,
  Transfer,
  TransferTable
} from "../generated/TablelandTables/TablelandTables"
import { Table, History, User } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts";

export function handleCreateTable(event: CreateTable): void {

  let entity = Table.load(event.params.tableId.toString())
  if (!entity) {
    entity = new Table(event.params.tableId.toString())
  }

  let user = User.load(event.params.owner.toHexString())
  if (!user) {
    user = new User(event.params.owner.toHexString())
    user.save()
  }

  entity.owner = event.params.owner.toHexString();
  entity.tableId = event.params.tableId;
  entity.statement = event.params.statement;
  entity.name = event.params.statement.split(' ')[2].concat(`_${event.params.tableId}`);
  entity.created = event.block.timestamp;
  entity.txnHash = event.transaction.hash.toHexString();

  let contract = TablelandTables.bind(event.address);
  entity.tokenURI = contract.tokenURI(event.params.tableId);
  entity.controller = event.params.owner.toHexString();
  entity.historyCount = BigInt.fromI32(0);

  entity.save();

}

export function handleSetController(event: SetController): void {

  let user = User.load(event.params.controller.toHexString())
  if (!user) {
    user = new User(event.params.controller.toHexString())
    user.save()
  }

  let entity = Table.load(event.params.tableId.toString())
  if (entity) {
    entity.controller = event.params.controller.toHexString();
    entity.save();
  }

}

export function handleTransferTable(event: TransferTable): void {

  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.save()
  }

  let entity = Table.load(event.params.tableId.toString())
  if (entity) {
    entity.owner = event.params.to.toHexString();
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
