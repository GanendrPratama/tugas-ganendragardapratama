/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utid7bwfszf7fm4")

  // remove
  collection.schema.removeField("y8k4eepg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afpnl5rv",
    "name": "phoneNumber",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utid7bwfszf7fm4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8k4eepg",
    "name": "phoneNumber",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("afpnl5rv")

  return dao.saveCollection(collection)
})
