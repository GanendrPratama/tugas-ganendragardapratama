/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fmt8ovb18r6s8sk",
    "created": "2024-07-02 14:50:54.322Z",
    "updated": "2024-07-02 14:50:54.322Z",
    "name": "reservations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qn8tctxt",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "cjdldh8a",
        "name": "username",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gnntbpou",
        "name": "service",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Haircuts and styling",
            "Manicure and pedicure",
            "Facial treatments"
          ]
        }
      },
      {
        "system": false,
        "id": "0luzhsqo",
        "name": "time",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "09.00-10.00",
            "10.00-11.00",
            "11.00-12.00",
            "12.00-13.00",
            "13.00-14.00",
            "14.00-15.00",
            "15.00-16.00",
            "16.00-17.00",
            "17.00-18.00",
            "18.00-19.00",
            "19.00-20.00",
            "20.00-21.00"
          ]
        }
      },
      {
        "system": false,
        "id": "rrbaekss",
        "name": "isDone",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fmt8ovb18r6s8sk");

  return dao.deleteCollection(collection);
})
