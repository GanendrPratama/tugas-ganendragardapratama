/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fmt8ovb18r6s8sk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j2xbiphb",
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
  const collection = dao.findCollectionByNameOrId("fmt8ovb18r6s8sk")

  // remove
  collection.schema.removeField("j2xbiphb")

  return dao.saveCollection(collection)
})
