const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Incidencia vacia ..." 
        });
    }

    const incidencia = new Incidencia({
        alumne: req.body.alumne || "Sin nombre",
        profesor: req.body.profesor || "Sin profesor",
        lloc: req.body.lloc || "Sin lugar",
        data: req.body.data || "Sin fecha"
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Incidencia"
        });
    });
};



// Obtener todos los incidencia
exports.findAll = (req,res) => {

        Incidencias.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un incidencia por Id
exports.findOne = (req,res) => {
    Incidencia.findById(req.params.investigadorId)
    .then(incidencia=>{
        if (!incidencia){
            return res.status(404).send({
                message: "Incidencia NOT FOUND con ID " +req.params.investigadorId
            });
            }
            res.send(incidencia);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Incidencia no encontrado con ese id :" +req.params.investigadorId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.investigadorId
             });
        });
    };




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Incidencia vacio"
        });
    }

    // Find note and update it with the request body
    Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
        alumne: req.body.alumne|| "Sin nombre",
        grup: req.body.grupo || "Sin grupo",
        professor: req.body.profesor || "Sin profesion",
        horariAtencio: req.body.horariAtencio || "Sin horario",
        dataIncidencia: req.body.dataIncidencia || "Sin fecha",
        horaIncidencia: req.body.horaIncidencia || "Sin hora",
        lloc: req.body.lloc || "Sin lugar",
        descripcio: req.body.descripcio || "Sin descripcion",
        incidenciaLeve: req.body.incidenciaLeve || "Sin incidencia leve"
        
        
        
        
    }, {new: true})
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaId
            });
        }
        res.send(incidencia);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "Error updating Incidencia with id " + req.params.incidenciaId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    Incidencia.findByIdAndRemove(req.params.incidenciaId)
    .then(incidencia => {
        if(!incidencia){
            return res.status(404).send({
                message: "Incidencia no encontrado " + req.params.incidenciaId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Investigador with id " + req.params.Incidencia
        });
    });
};