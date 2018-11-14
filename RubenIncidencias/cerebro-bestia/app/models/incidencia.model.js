const mongoose= require('mongoose');

const IncidenciaSchema = mongoose.Schema({
    alumne:String,
    profesor:String,
    lloc:String,
    data:Date
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);