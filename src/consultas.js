/* El comando $eq devuelve los valores iguales a los campos especificados. */
db.books.find({author:{$eq:"Alice Kellen"}})
/* El comando $gt devuelve los valores mayores a los campos especificados. */
db.books.find({editingDate: {$gt:2014}})
/* El comando $gte devuelve los valores mayores o iguales a los campos especificados. */
db.books.find({editingDate: {$gte:2018}})
/* El comando $in devuelve los valores iguales del array especificado. */
db.books.find({pages:{$in:[528,352,608]}})
/* El comando $lt devuelve los valores menores a los campos especificados. */
db.books.find({ISBN:{$lt:9788408221951}})
/* El comando $lte devuelve los valores menores o iguales a los campos especificados. */
db.books.find({ISBN:{$lt:9788408221951}})
/* El comando $ne devuelve todos los valores que no pertenecen al campo especificado. */
db.books.find({author:{$ne:"Jane Austin"}})
/* El comando $nin devuelve todos los valores que no pertenecen al array especificado. */ 
db.books.find({genre:{$nin:["romance histórico","juvenil"]}})
/* El comando $and devuelve todos los valores que cumplen los requisitos de ambas cláusulas. 
$and puede ser construido de dos maneras:
    ·Explícito:mostrando el comando.
    ·Implícito:sin mostrar el comando.                                                          */
db.books.find({$and:[{genre:{$eq:romántica}},{pages:{$lte:528}}]})
db.books.find({pages:{$eq:528,$lt:368}})
/* El comando $not devuelve los valores que no coinciden con la expresión consulta. */
db.books.find({editingDate:{$not:{$gt:2010}}})
/* El comando $nor devuelve todos los valores que no coincide con ambas cláusulas. */
db.books.find({$nor:[{author:"Elisabet Benavent"},{genre:"romántica"}]})
/* El comando $or devuelve los de cualquiera de las cláusulas. */
db.books.find({$or:[{pages:{$gte:512}},{editingDate:{$lt:2016}}]})
/* El comando $regex selecciona documentos donde los valores coinciden con una expresión regular especificada. */
db.books.find({ISBN: {$eq: { $regex:"*66*"}}})
