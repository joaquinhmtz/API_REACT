define({ "api": [
  {
    "type": "post",
    "url": "/photos/create",
    "title": "Añadir fotografía",
    "name": "create",
    "group": "Fotografias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "category",
            "description": "<p>Categoria de la fotografia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripcion de la fotografia.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "photos",
            "description": "<p>Listado de fotos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>Id de usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"msg\": \"Se han subido sus fotografías correctamente\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\",\n  \"msg\" : \"Ocurrio un problema al subir sus fotografias\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Fotografias"
  },
  {
    "type": "post",
    "url": "/photos/update",
    "title": "Editar fotografía",
    "name": "update",
    "group": "Fotografias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "category",
            "description": "<p>Categoria de la fotografia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripcion de la fotografia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Id de usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"msg\": \"Fotografía actulizada correctamente\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\",\n  \"msg\" : \"Ocurrio un problema al actualizar la fotografia\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Fotografias"
  },
  {
    "type": "post",
    "url": "/photos/delete",
    "title": "Editar fotografía",
    "name": "update",
    "group": "Fotografias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la fotografia.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"msg\": \"Fotografía eliminada con éxito.\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\",\n  \"msg\" : \"Ocurrio un problema al eliminar la fotografia\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Fotografias"
  },
  {
    "type": "post",
    "url": "/users/create",
    "title": "Crear usuario",
    "name": "create",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Apellido paterno del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname2",
            "description": "<p>Apellido materno del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\" : \"true\",\n   \"msg\" : \"Usuario registrado con éxito\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\",\n  \"msg\" : \"El usuario no se registro con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/users/update",
    "title": "Actualizar usuario",
    "name": "create",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Apellido paterno del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname2",
            "description": "<p>Apellido materno del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\" : \"true\",\n   \"msg\" : \"Usuario actualizado con éxito\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\",\n  \"msg\" : \"El usuario no se ha podido actualizar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login de usuario",
    "name": "create",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"id\": 3,\n        \"name\": \"JOAQUIN\",\n        \"lastname\": \"HERNANDEZ\",\n        \"lastname2\": \"MARTINEZ\",\n        \"email\": \"joaquin1@gmail.com\",\n        \"creation_date\": \"2021-03-03T22:26:54.000Z\"\n    },\n    \"token\": \"eyJh0wMy0wM1QyMjoyNjo1NC4wMDBaIiwiaWF0IjoxNjE0ODg1MjQ1fQ.Tg5hDVVLRWr9tBdJw5vGEp4Bflhod0FE8iy0CvcsAvc\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\",\n  \"msg\" : \"Credenciales no válidas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/users/list",
    "title": "Obtener listado de usuarios",
    "name": "list",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "object",
            "optional": false,
            "field": "filters",
            "description": "<p>Filtros de busqueda.</p>"
          },
          {
            "group": "Params",
            "type": "object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Objeto de paginacion.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"data\": [\n      {\n         \"id\": 8,\n         \"name\": \"Joaquin\",\n         \"lastname\": \"Hernandez\",\n         \"lastname2\": \"Martinez\",\n         \"email\": \"test5@hotmail.com\",\n         \"fullname\": \"Joaquin undefined Martinez\",\n         \"creation_date\": \"2021-03-04T22:24:17.000Z\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"success\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/documentation.js",
    "groupTitle": "Usuarios"
  }
] });
