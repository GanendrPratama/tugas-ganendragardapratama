/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5m9h1i9ci6u8mk")

  // remove
  collection.schema.removeField("5rvcpofz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lgidv7jt",
    "name": "rating",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5m9h1i9ci6u8mk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5rvcpofz",
    "name": "rating",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("lgidv7jt")

  return dao.saveCollection(collection)
})
