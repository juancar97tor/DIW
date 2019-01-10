const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Investigador Vacio..." 
        });
    }

    // Aprovechando que javascript tiene tipado dinamico
    // sobreescribimos el valor de req.body.tipoAmonA que
    // viene como "string" para que sea un booleano.
    if (req.body.tipoAmonA =='marcado'){
        req.body.tipoAmonA = true;
    }else{
        req.body.tipoAmonA = false;
    }



    const incidencia = new Incidencia({
        alumne: req.body.alumne || "Sin Nombre",
        profesor: req.body.profesor || "Sin profesion",
        lloc: req.body.lloc || "Sin lugar",
        data: req.body.data || "Sin data",
        grupo: req.body.grupo || "Sin grupo",
        horario: req.body.horario || "Sin horario",
        hora: req.body.hora || "Sin hora",
        cambio: req.body.cambio || "Sin cambio",
        incidentegrave: req.body.incidentegrave || "Sin incidentgrave",
        tip_42_a: req.body.tip_42_a || "Sin Nombre",
        tip_42_b: req.body.tip_42_b || "Sin Nombre",
        tip_42_c: req.body.tip_42_c || "Sin Nombre",
        tip_42_d: req.body.tip_42_d || "Sin Nombre",
        tip_42_e: req.body.tip_42_e || "Sin Nombre",
        tip_42_f: req.body.tip_42_f || "Sin Nombre",
        tip_42_g: req.body.tip_42_g || "Sin Nombre",
        tip_42_h: req.body.tip_42_h || "Sin Nombre",
        tip_42_i: req.body.tip_42_i || "Sin Nombre",
        tip_42_j: req.body.tip_42_j || "Sin Nombre",
        tip_42_k: req.body.tip_42_k || "Sin Nombre",
        tip_42_l: req.body.tip_42_l || "Sin Nombre",
        tip_42_m: req.body.tip_42_m || "Sin Nombre",
        tip_42_n: req.body.tip_42_n || "Sin Nombre",
        tip_42_o: req.body.tip_42_o || "Sin Nombre",
        tip_42_p: req.body.tip_42_p || "Sin Nombre",
        leve: req.body.leve || "Sin Nombre",
        tipoAmonA: req.body.tipoAmonA || false,
        tipoAmonB: req.body.tipoAmonB || false,
        tipoAmonC: req.body.tipoAmonC || false,
        tipoAmonD: req.body.tipoAmonD || false,
        tipoAmonE: req.body.tipoAmonE || false,
        dies: req.body.dies || "Sin dies",
        tipoAmonG: req.body.tipoAmonG || false,
        tasques: req.body.tasques || "Sin tasques",
        tasque: req.body.tasque || "Sin tasque",
        dies1: req.body.dies1 || "Sin dies1",
        horari: req.body.horari || "Sin horari",
        extracolars: req.body.extracolars || "Sin extracolars",
        tipoAmonH: req.body.tipoAmonH || false,
        suspensio: req.body.suspensio || "Sin suspensio",
        tipoAmonI: req.body.tipoAmonI || false,
        assistencia: req.body.assistencia || "Sin assistencia",
        desde: req.body.desde || "Sin desde",
        fina: req.body.fina || "Sin fina",
        incidente: req.body.incidente || "Sin incidente",
        tip_35_a: req.body.tip_35_a || "Sin Nombre",
        tip_35_b: req.body.tip_35_b || "Sin Nombre",
        tip_35_c: req.body.tip_35_c || "Sin Nombre",
        tip_35_d: req.body.tip_35_d || "Sin Nombre",
        tip_35_e: req.body.tip_35_e || "Sin Nombre",
        tip_35_f: req.body.tip_35_f || "Sin Nombre",
        tip_35_g: req.body.tip_35_g || "Sin Nombre",
        tip_35_h: req.body.tip_35_h || "Sin Nombre",
        tip_35_i: req.body.tip_35_i || "Sin Nombre",
        tip_35_j: req.body.tip_35_j || "Sin Nombre",
        tip_35_k: req.body.tip_35_k || "Sin Nombre",
        tip_35_l: req.body.tip_35_l || "Sin Nombre",
        tip_35_m: req.body.tip_35_m || "Sin Nombre",
        tip_35_n: req.body.tip_35_n || "Sin Nombre",
        tip_35_o: req.body.tip_35_o || "Sin Nombre",
        tip_35_p: req.body.tip_35_p || "Sin Nombre",
        tip_35_q: req.body.tip_35_q || "Sin Nombre",
        tip_35_r: req.body.tip_35_r || "Sin Nombre",
        tip_35_s: req.body.tip_35_s || "Sin Nombre",
        telefon: req.body.telefon || "Sin telefon",
        correu: req.body.correu || "Sin Nombre",
        alum: req.body.alum || "Sin Nombre",
        tutor: req.body.tutor || "Sin Nombre",
        conductes: req.body.conductes || "Sin Nombre",
        paiporta: req.body.paiporta || "Sin paiporta",
        de: req.body.de || "Sin de",
        anio: req.body.anio || "Sin anio",
        director: req.body.director || "Sin director"
        




        
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Incidencia"
        });
    });
};

// Obtener todos los investigadores
exports.findAll = (req,res) => {

        Incidencia.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    Investigador.findById(req.params.investigadorId)
    .then(investigador=>{
        if (!investigador){
            return res.status(404).send({
                message: "Investigador NOT FOUND con ID " +req.params.investigadorId
            });
            }
            res.send(investigador);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" +req.params.investigadorId
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
            message: "Investigador vacio"
        });
    }

    // Find note and update it with the request body
    Investigador.findByIdAndUpdate(req.params.investigadorId, {
        alumne: req.body.alumne || "Sin Nombre",
        profesor: req.body.profesor || "Sin profesion",
        lloc: req.body.lloc || "Sin lugar",
        data: req.body.data || "Sin data",
        grupo: req.body.grupo || "Sin grupo",
        horario: req.body.horario || "Sin horario",
        hora: req.body.hora || "Sin hora",
        cambio: req.body.cambio || "Sin cambio",
        incidentegrave: req.body.incidentegrave || "Sin incidentgrave",
        tip_42_a: req.body.tip_42_a || "Sin Nombre",
        tip_42_b: req.body.tip_42_b || "Sin Nombre",
        tip_42_c: req.body.tip_42_c || "Sin Nombre",
        tip_42_d: req.body.tip_42_d || "Sin Nombre",
        tip_42_e: req.body.tip_42_e || "Sin Nombre",
        tip_42_f: req.body.tip_42_f || "Sin Nombre",
        tip_42_g: req.body.tip_42_g || "Sin Nombre",
        tip_42_h: req.body.tip_42_h || "Sin Nombre",
        tip_42_i: req.body.tip_42_i || "Sin Nombre",
        tip_42_j: req.body.tip_42_j || "Sin Nombre",
        tip_42_k: req.body.tip_42_k || "Sin Nombre",
        tip_42_l: req.body.tip_42_l || "Sin Nombre",
        tip_42_m: req.body.tip_42_m || "Sin Nombre",
        tip_42_n: req.body.tip_42_n || "Sin Nombre",
        tip_42_o: req.body.tip_42_o || "Sin Nombre",
        tip_42_p: req.body.tip_42_p || "Sin Nombre",
        leve: req.body.leve || "Sin Nombre",
        tipoAmonA: req.body.tipoAmonA || false,
        tipoAmonB: req.body.tipoAmonB || false,
        tipoAmonC: req.body.tipoAmonC || false,
        tipoAmonD: req.body.tipoAmonD || false,
        tipoAmonE: req.body.tipoAmonE || false,
        dies: req.body.dies || "Sin dies",
        tipoAmonG: req.body.tipoAmonG || false,
        tasques: req.body.tasques || "Sin tasques",
        tasque: req.body.tasque || "Sin tasque",
        dies1: req.body.dies1 || "Sin dies1",
        horari: req.body.horari || "Sin horari",
        extracolars: req.body.extracolars || "Sin extracolars",
        tipoAmonH: req.body.tipoAmonH || false,
        suspensio: req.body.suspensio || "Sin suspensio",
        tipoAmonI: req.body.tipoAmonI || false,
        assistencia: req.body.assistencia || "Sin assistencia",
        desde: req.body.desde || "Sin desde",
        fina: req.body.fina || "Sin fina",
        incidente: req.body.incidente || "Sin incidente",
        tip_35_a: req.body.tip_35_a || "Sin Nombre",
        tip_35_b: req.body.tip_35_b || "Sin Nombre",
        tip_35_c: req.body.tip_35_c || "Sin Nombre",
        tip_35_d: req.body.tip_35_d || "Sin Nombre",
        tip_35_e: req.body.tip_35_e || "Sin Nombre",
        tip_35_f: req.body.tip_35_f || "Sin Nombre",
        tip_35_g: req.body.tip_35_g || "Sin Nombre",
        tip_35_h: req.body.tip_35_h || "Sin Nombre",
        tip_35_i: req.body.tip_35_i || "Sin Nombre",
        tip_35_j: req.body.tip_35_j || "Sin Nombre",
        tip_35_k: req.body.tip_35_k || "Sin Nombre",
        tip_35_l: req.body.tip_35_l || "Sin Nombre",
        tip_35_m: req.body.tip_35_m || "Sin Nombre",
        tip_35_n: req.body.tip_35_n || "Sin Nombre",
        tip_35_o: req.body.tip_35_o || "Sin Nombre",
        tip_35_p: req.body.tip_35_p || "Sin Nombre",
        tip_35_q: req.body.tip_35_q || "Sin Nombre",
        tip_35_r: req.body.tip_35_r || "Sin Nombre",
        tip_35_s: req.body.tip_35_s || "Sin Nombre",
        telefon: req.body.telefon || "Sin telefon",
        correu: req.body.correu || "Sin Nombre",
        alum: req.body.alum || "Sin Nombre",
        tutor: req.body.tutor || "Sin Nombre",
        conductes: req.body.conductes || "Sin Nombre",
        paiporta: req.body.paiporta || "Sin paiporta",
        de: req.body.de || "Sin de",
        anio: req.body.anio || "Sin anio",
        director: req.body.director || "Sin director"
    }, {new: true})
    .then(investigador => {
        if(!investigador) {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.investigadorId
            });
        }
        res.send(investigador);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.investigadorId
            });                
        }
        return res.status(500).send({
            message: "Error updating Investigador with id " + req.params.investigadorId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    Investigador.findByIdAndRemove(req.params.investigadorId)
    .then(investigador => {
        if(!investigador) {
            return res.status(404).send({
                message: "Investigador no encontrado " + req.params.investigadorId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.investigadorId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Investigador with id " + req.params.investigadorId
        });
    });
};

