/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utid7bwfszf7fm4")

  // remove
  collection.schema.removeField("ba61d2da")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utid7bwfszf7fm4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ba61d2da",
    "name": "userPassword",
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
