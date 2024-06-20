import { environment } from "src/environments/environment";

const webApi8 = environment.aplicativosWeb8;
const WebApiDesa1 = environment.aplicativosWebDesa1;

const controllerUbigeo: string = webApi8+'ws.ubigeoDV/ubigeo/';
const controllerSunat: string = webApi8+'ws.denunciajpa/api/sunat/';
const controllerPersona: string = webApi8+'ws.personaDV/';
const controllerMaestro: string = webApi8+'ws.denunciajpa/api/maestro/';
const controllerInspeciones: string = WebApiDesa1+'ws.asistenciaTecnica1/inspeciones/'

export const constantesApiWeb = {
    departamentos: controllerUbigeo + 'departamentos/',
    provincias: controllerUbigeo + 'departamentos/',
    distritos: controllerUbigeo + 'departamentos/',
    validarRUC: controllerSunat + 'validar-ruc',
    persona: controllerPersona + 'personas/',
    tipoDocumentos: controllerMaestro + 'tipoDocumentos',
    materias: controllerMaestro + 'materias',
    guardarAsistenciaTecnica: controllerInspeciones + 'orientacion/asistenciasTecnicas/'
}
