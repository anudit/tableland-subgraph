// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Table extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Table entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Table must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Table", id.toString(), this);
    }
  }

  static load(id: string): Table | null {
    return changetype<Table | null>(store.get("Table", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get tableId(): BigInt {
    let value = this.get("tableId");
    return value!.toBigInt();
  }

  set tableId(value: BigInt) {
    this.set("tableId", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get statement(): string {
    let value = this.get("statement");
    return value!.toString();
  }

  set statement(value: string) {
    this.set("statement", Value.fromString(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get created(): BigInt {
    let value = this.get("created");
    return value!.toBigInt();
  }

  set created(value: BigInt) {
    this.set("created", Value.fromBigInt(value));
  }

  get controller(): string {
    let value = this.get("controller");
    return value!.toString();
  }

  set controller(value: string) {
    this.set("controller", Value.fromString(value));
  }

  get txnHash(): string {
    let value = this.get("txnHash");
    return value!.toString();
  }

  set txnHash(value: string) {
    this.set("txnHash", Value.fromString(value));
  }

  get historyCount(): BigInt {
    let value = this.get("historyCount");
    return value!.toBigInt();
  }

  set historyCount(value: BigInt) {
    this.set("historyCount", Value.fromBigInt(value));
  }

  get lastUpdated(): BigInt {
    let value = this.get("lastUpdated");
    return value!.toBigInt();
  }

  set lastUpdated(value: BigInt) {
    this.set("lastUpdated", Value.fromBigInt(value));
  }

  get history(): Array<string> | null {
    let value = this.get("history");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }
}

export class History extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save History entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type History must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("History", id.toString(), this);
    }
  }

  static load(id: string): History | null {
    return changetype<History | null>(store.get("History", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get statement(): string {
    let value = this.get("statement");
    return value!.toString();
  }

  set statement(value: string) {
    this.set("statement", Value.fromString(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get tablePointed(): string {
    let value = this.get("tablePointed");
    return value!.toString();
  }

  set tablePointed(value: string) {
    this.set("tablePointed", Value.fromString(value));
  }

  get actionBy(): string | null {
    let value = this.get("actionBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set actionBy(value: string | null) {
    if (!value) {
      this.unset("actionBy");
    } else {
      this.set("actionBy", Value.fromString(<string>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tablesOwned(): Array<string> | null {
    let value = this.get("tablesOwned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  get tablesControlled(): Array<string> | null {
    let value = this.get("tablesControlled");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }
}
