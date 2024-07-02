/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utid7bwfszf7fm4")

  // remove
  collection.schema.removeField("kqozaffv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8k4eepg",
    "name": "phoneNumber",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utid7bwfszf7fm4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kqozaffv",
    "name": "phoneNumber",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("y8k4eepg")

  return dao.saveCollection(collection)
})
