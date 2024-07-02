/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5m9h1i9ci6u8mk")

  // remove
  collection.schema.removeField("pqvxcpar")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5m9h1i9ci6u8mk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pqvxcpar",
    "name": "service",
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

  return dao.saveCollection(collection)
})
