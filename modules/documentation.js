/** ------ USERS LIST ------- **/
/**
 * @api {post} /users/list Obtener listado de usuarios
 * @apiName list
 * @apiGroup Usuarios
 *
 * @apiParam (Params) {object} filters Filtros de busqueda.
 * @apiParam (Params) {object} pagination Objeto de paginacion.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "data": [
 *        {
 *           "id": 8,
 *           "name": "Joaquin",
 *           "lastname": "Hernandez",
 *           "lastname2": "Martinez",
 *           "email": "test5@hotmail.com",
 *           "fullname": "Joaquin undefined Martinez",
 *           "creation_date": "2021-03-04T22:24:17.000Z"
 *       }
 *    ]
 *  }
 *
 * @apiError error
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "success": "false"
 *     }
 */

 /** ------ USER CREATE ------- **/

 /**
  * @api {post} /users/create Crear usuario
  * @apiName create
  * @apiGroup Usuarios
  *
  * @apiParam {String} email Email del usuario.
  * @apiParam {String} password Password del usuario.
  * @apiParam {String} name Nombre del usuario.
  * @apiParam {String} lastname Apellido paterno del usuario.
  * @apiParam {String} lastname2 Apellido materno del usuario.
  *
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *        "success" : "true",
  *        "msg" : "Usuario registrado con éxito"
  *      }
  *
  *
  * @apiError error
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "success": "false",
  *       "msg" : "El usuario no se registro con éxito"
  *     }
  */

  /** ------ USER EDITION ------- **/

  /**
   * @api {post} /users/update Actualizar usuario
   * @apiName create
   * @apiGroup Usuarios
   *
   * @apiParam {String} email Email del usuario.
   * @apiParam {String} password Password del usuario.
   * @apiParam {String} name Nombre del usuario.
   * @apiParam {String} lastname Apellido paterno del usuario.
   * @apiParam {String} lastname2 Apellido materno del usuario.
   *
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "success" : "true",
   *        "msg" : "Usuario actualizado con éxito"
   *      }
   *
   *
   * @apiError error
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "success": "false",
   *       "msg" : "El usuario no se ha podido actualizar"
   *     }
   */

   /** ------ USER LOGIN ------- **/

   /**
    * @api {post} /users/login Login de usuario
    * @apiName create
    * @apiGroup Usuarios
    *
    * @apiParam {String} email Email del usuario.
    * @apiParam {String} password Password del usuario.
    *
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *         "user": {
    *             "id": 3,
    *             "name": "JOAQUIN",
    *             "lastname": "HERNANDEZ",
    *             "lastname2": "MARTINEZ",
    *             "email": "joaquin1@gmail.com",
    *             "creation_date": "2021-03-03T22:26:54.000Z"
    *         },
    *         "token": "eyJh0wMy0wM1QyMjoyNjo1NC4wMDBaIiwiaWF0IjoxNjE0ODg1MjQ1fQ.Tg5hDVVLRWr9tBdJw5vGEp4Bflhod0FE8iy0CvcsAvc"
    *      }
    *
    *
    *
    * @apiError error
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "success": "false",
    *       "msg" : "Credenciales no válidas"
    *     }
    */


    /** ------ ADD PHOTO ------- **/

    /**
     * @api {post} /photos/create Añadir fotografía
     * @apiName create
     * @apiGroup Fotografias
     *
     * @apiParam {Object} category Categoria de la fotografia.
     * @apiParam {String} description Descripcion de la fotografia.
     * @apiParam {Array} photos Listado de fotos.
     * @apiParam {Number} idUser Id de usuario.
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         "success": true,
     *         "msg": "Se han subido sus fotografías correctamente"
     *      }
     *
     *
     *
     * @apiError error
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "success": "false",
     *       "msg" : "Ocurrio un problema al subir sus fotografias"
     *     }
     */

     /** ------ EDIT PHOTO ------- **/

     /**
      * @api {post} /photos/update Editar fotografía
      * @apiName update
      * @apiGroup Fotografias
      *
      * @apiParam {Object} category Categoria de la fotografia.
      * @apiParam {String} description Descripcion de la fotografia.
      * @apiParam {String} IdUser Id de usuario.
      *
      *
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
      *         "success": true,
      *         "msg": "Fotografía actulizada correctamente"
      *      }
      *
      *
      *
      * @apiError error
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 404 Not Found
      *     {
      *       "success": "false",
      *       "msg" : "Ocurrio un problema al actualizar la fotografia"
      *     }
      */

      /** ------ DELETE PHOTO ------- **/

      /**
       * @api {post} /photos/delete Editar fotografía
       * @apiName update
       * @apiGroup Fotografias
       *
       * @apiParam {String} id Id de la fotografia.
       *
       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *     {
       *         "success": true,
       *         "msg": "Fotografía eliminada con éxito."
       *      }
       *
       *
       *
       * @apiError error
       *
       * @apiErrorExample Error-Response:
       *     HTTP/1.1 404 Not Found
       *     {
       *       "success": "false",
       *       "msg" : "Ocurrio un problema al eliminar la fotografia"
       *     }
       */
