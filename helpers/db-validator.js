const { default: mongoose } = require('mongoose');
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol){
        throw new Error(`El rol ${rol} no está registrado en la DB`)
    }
}

const emailExiste = async ( correo = '') => {

    // verificar si el correo existe
    const existEmail = await Usuario.findOne({ correo });
    if( existEmail ){
        throw new Error(`El correo: ${correo}, ya está registrado`)
    }
}

const existeUsuarioPorId = async ( id ) => {

    // verificar si el correo existe
    if (mongoose.Types.ObjectId.isValid(id)) {
        const existId = await Usuario.findById(id);
     if (!existId) {
        throw new Error(`El id  ${id}  no existe en la BD`);
        }
    } 
    // else{
    //     throw new Error(`El id ${id} no es válido`);
    // }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}