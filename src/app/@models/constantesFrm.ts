export const MensajesValidacionesError: Record<string, string> = {
    'ruc': "Por favor, ingrese el número de RUC.",
    'razonSocial': "Por favor, seleccione el tipo de documento.",
    'codigoDepartamento': "Por favor, seleccione el departamento de la empresa.",
    'codigoProvincia': "Por favor, seleccione la provincia de la empresa.",
    'codigoDistrito': "Por favor, seleccione el distrito de la empresa.",
    'direccion': 'Por favor, ingrese la dirección de la empresa.',
    'flagMype': "Por favor, seleccione si es una Micro o Pequeña Empresa.",

    'fechaPropuesta': "Por favor, ingrese la fecha de propuesta.",
    'cantidadBeneficiarios': "Por favor, indique la cantidad de beneficiarios de la capacitación.",
    'flagModalidad': "Por favor, seleccione la modalidad de la capacitación.",
    'motivoSolicitud': "Por favor, ingrese el motivo de la solicitud.",

    'codigoTipoDocumento': "Por favor, seleccione el tipo de documento.",
    'numeroDocumentoContacto': "Por favor, ingrese el número de documento.",
    'cargoEmpleador': "Por favor, ingrese el cargo que tiene en la empresa.",
    'emailContacto': "Por favor, ingrese un correo electrónico.",
    'confirmarCorreo': "Por favor, confirme el correo electrónico.",
    'numeroCelular': "Por favor, ingrese un número celular.",
};


export const MensajesValidaciones: Record<string, any> = {
    'ruc': {
        required:  "Por favor, ingrese el número de RUC.",
        minlength: "Por favor, ingrese un número de RUC válido.",
        maxlength: "Por favor, ingrese un número de RUC válido.",
        pattern: "",
    },
    'razonSocial': {
        required: "Por favor, verifique el número de RUC.",
    },
    'codigoDepartamento': {
        required: "Por favor, debe seleccionar el departamento de la empresa.",
        pattern: "Por favor, debe seleccionar el departamento de la empresa.",
    },
    'codigoProvincia': {
        required: "Por favor, debe seleccionar la provincia de la empresa.",
        pattern: "Por favor, debe seleccionar la provincia de la empresa.",
    },
    'codigoDistrito': {
        required: "Por favor, debe seleccionar el distrito de la empresa.",
        pattern: "Por favor, debe seleccionar el distrito de la empresa.",
    },
    'direccion': {
        required: "Por favor, debe ingresar la dirección de la empresa.",
        minlength: 'Por favor, ingrese una dirección válida.',
    },
    'flagMype': {
        required: "Por favor, seleccione si es una Micro o Pequeña Empresa.",
        pattern: "Por favor, seleccione si es una Micro o Pequeña Empresa.",
    },

    'fechaPropuesta': {
        required: "Por favor, ingrese la fecha propuesta.",
    },
    'cantidadBeneficiarios': {
        required: "Por favor, indique la cantidad de beneficiarios de la capacitación.",
        pattern: "Por favor, ingrese una cantidad de beneficiarios válida.",
    },
    'flagModalidad': {
        required: "Por favor, ingrese la modalidad de la capacitación.",
        pattern: "Por favor, ingrese la modalidad de la capacitación.",
    },
    'motivoSolicitud': {
        required: "Por favor, ingrese el motivo de la solicitud.",
        minlength: "El motivo debe tener como mínimo 10 caracteres.",
        maxlength: "El motivo debe tener como maximo 2000 caracteres.",
    },

    'codigoTipoDocumento': {
        required: "Por favor, seleccione el tipo de documento.",
        pattern: "Por favor, seleccione el tipo de documento.",
    },
    'numeroDocumentoContacto': {
        required: "Por favor, ingrese el número de documento.",
        minlength: "Por favor, ingrese un número de documento válido.",
        maxlength: "Por favor, ingrese un número de documento válido.",
        pattern: "Por favor, ingrese un número de documento válido.",
    },
    'nombresContacto': {
        required: "Por favor, verifique el número de su documento.",
    },
    'cargoEmpleador':{
        required: "Por favor, ingrese el cargo que tiene en la empresa.",
        minlength: "Por favor, ingrese un cargo válido.",
    },
    'emailContacto': {
        required: "Por favor, ingrese un correo electrónico.",
        pattern:  "Por favor, ingrese un correo electrónico válido.",
    },
    'confirmarCorreo': {
        required: "Por favor, confirme el correo electrónico.",
        pattern: "Por favor, ingrese un correo electrónico válido.",
    },
    'numeroCelular': {
        required: "Por favor, ingrese un número celular.",
        minlength: "El número celular debe tener como mínimo 9 caracteres.",
        pattern: "Por favor, ingrese un número celular válido.",
    },
};
