/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5m9h1i9ci6u8mk")

  // remove
  collection.schema.removeField("3jboibtq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5m9h1i9ci6u8mk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3jboibtq",
    "name": "email",
    "type": "email",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
