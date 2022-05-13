const express = require('express')

const app = express()

app.use(express.json()) //se indica que se usara json

const port = 3000//puerto a usar

//methods HTTP: get,post, put,delete
app.get('/v1/explorers', (req, res) => { //creando una url 
    //imprime en la terminal la fecha y hora que se accesa a la pagina
    console.log(`GET explorers v1 API ${new Date()}`);
    //creo objetos 
    const explorer0 = { id: 1, name: "Ulises", }
    const explorer1 = { id: 2, name: "Ubaldo", }
    //creo una lista con los objetos
    const lista = [explorer0, explorer1]
    //HTTP CODE STATUS 200
    res.status(200).json(lista)
    /* res.send(lista) */
    //envia una respuesta al cliente con la info de la lista 
})

app.get('/v1/explorers/:id', (req, res) => { //creando una url con parametro
    //imprime en la terminal la fecha y hora que se accesa a la pagina
    console.log(`GET explorers v1 API ${new Date()}`);
    //creo objetos 
    const explorer0 = { id: 1, name: "Ulises", }
    //creo una lista con los objetos
    //HTTP CODE STATUS 200
    res.status(200).json(explorer0)
    /* res.send(lista) */
    //envia una respuesta al cliente con la info de la lista 
})

//get regresar informacion
//post crea 

app.post('/v1/explorers', (req, res) => { //creando una url con parametro
    //imprime en la terminal la fecha y hora que se accesa a la pagina
    console.log(`POST explorers v1 API ${new Date()}`);
    //AGREGAR LALOGICA PARA PERSISTIR
    res.status(201).json({message: "Creado exitosamente"})
})
//PUT actualiza
app.put('/v1/explorers/:id', (req, res) => { //creando una url con parametro
    //imprime en la terminal la fecha y hora que se accesa a la pagina
    console.log(`PUT explorers v1 API ${new Date()}`);
    console.log(req.params.id);
    const requestBody = req.body //parametros del cliente
    console.log(requestBody);
    res.status(200).json({message: "Actualizado exitosamente"})
})

app.delete('/v1/explorers/:id', (req, res) => { //creando una url con parametro
    //imprime en la terminal la fecha y hora que se accesa a la pagina
    console.log(`DELETE explorers v1 API ${new Date()}`);
   //Agrega la logica para eliminar
    res.status(200).json({message: "Eliminado exitosamente"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);   
    //metodo que escucha lo que sucede en el puerto y manda un mensaje en el dezpliegue
})