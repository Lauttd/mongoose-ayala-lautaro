Hola, buenos dias!

¿Que es el populate?
En Mongoose, populate sirve para reemplazar un campo que contiene un ObjectId con el documento completo al que hace referencia (relación entre colecciones).

USO DE POPULATE
Use el populate para traer datos de otra tabla en este caso datos de user con profile.

USO DEL EMBEBIDO: guardas el documento dentro de otro documento
En este caso lo use en games con premiaciones porque los juegos pueden tener premiaciones importantes y es necesario mencionarlos para que asi el usuario pueda valorarlo, el embebido hace que premiaciones aparezca como un subdocumento de games y se obtienen juntos.

USO DEL REFERENCIADO: 
El referenciado lo utilice para relacionar algunos modelos por ejemplo user y perfil relacionados por referencia con el objectId, en el modelo de perfil referencie "user" para luego traerlos con el populate.

¿Como se utiliza el populate desde las colecciones que no tienen referencias?
"populate" en Mongoose sirve para traer datos relacionados entre colecciones, pero solo funciona si existe algún tipo de relación definida. Esto puede ser de dos formas: **directa**, cuando un documento guarda el "ObjectId" de otro y en el esquema se indica con un "ref" o **virtual**, cuando definimos en el esquema una relación inversa aunque ese campo no esté guardado físicamente, por ejemplo, decir que “un autor tiene muchos libros” aunque en realidad son los libros los que guardan la referencia. En ambos casos, "populate" puede resolver la relación y devolver la información combinada en una sola consulta. En cambio, si no existe ninguna relación definida (ni directa ni virtual), "populate" no se puede usar y la única opción es hacer consultas manuales y unir los resultados desde la aplicación.

ELIMINACION LOGICA Y EN CASCADA: }
