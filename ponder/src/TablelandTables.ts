import { ponder } from "@/generated";

ponder.on("TablelandTables:CreateTable", async ({ event, context }) => {
  const { Table, User } = context.entities;

  const user = await User.upsert({
    id: event.params.owner.toLowerCase(),
    create: {},
    update: {}
  })

  let cleanName= event.params.statement.slice(12).trim().split(' ')[0];
  if (cleanName.includes('(')) cleanName = cleanName.split('(')[0];

  const table = await Table.create({
    id: event.params.tableId.toString(),
    data: {
      owner : event.params.owner.toLowerCase(),
      tableId : event.params.tableId,
      statement : event.params.statement,
      lastUpdated : event.block.timestamp,
      name: cleanName.concat(`_${event.params.tableId}`),
      created: event.block.timestamp,
      txnHash: event.transaction.hash,
      tokenURI: `https://tableland.network/api/v1/tables/${event.transaction.chainId}/${event.params.tableId}`,
      controller: event.params.owner.toLowerCase(),
      historyCount: BigInt(0)
    }
  });
});

ponder.on("TablelandTables:RunSQL", async ({ event, context }) => {
  const { Table, User, History } = context.entities;

  const user = await User.upsert({
    id: event.transaction.from.toLowerCase(),
    create: {},
    update: {}
  })

  const table = await Table.findUnique({id:event.params.tableId.toString()})

  if (table){

    await History.create({
      id: event.transaction.hash,
      data: {
        statement: event.params.statement,
        time: event.block.timestamp,
        tablePointed: event.params.tableId.toString(),
        actionBy: event.transaction.from.toLowerCase(),
      }
    })

    await Table.update({
      id: event.params.tableId.toString(),
      data: {
        historyCount: BigInt(parseInt(table.historyCount.toString())+1),
        lastUpdated: event.block.timestamp
      }
    });
  }
});

ponder.on("TablelandTables:TransferTable", async ({ event, context }) => {
  const { Table, User, History } = context.entities;

  const user = await User.upsert({
    id: event.params.to.toLowerCase(),
    create: {},
    update: {}
  })

  const table = await Table.findUnique({id:event.params.tableId.toString()})

  if (table){

    await Table.update({
      id: event.params.tableId.toString(),
      data: {
        owner: event.params.to,
      }
    });
  }
});

ponder.on("TablelandTables:SetController", async ({ event, context }) => {
  const { Table, User, History } = context.entities;

  const user = await User.upsert({
    id: event.params.controller.toLowerCase(),
    create: {},
    update: {}
  })

  const table = await Table.findUnique({id:event.params.tableId.toString()})
  if (table){
    await Table.update({
      id: event.params.tableId.toString(),
      data: {
        controller: event.params.controller.toLowerCase(),
      }
    });
  }
});