import { environment } from "src/environments/environment";

const webApi8 = environment.aplicativosWeb8;
const WebApiDesa1 = environment.aplicativosWebDesa1;
const webApiLocal = environment.localAplicativoWeb

const constrollerServicios: string = webApi8 + 'ws.sunafilEnLinea/servicios/'
// const constrollerServiciosLocal: string = webApiLocal + 'ws.sunafilEnLinea/servicios/'

export const constantesApiWeb = {

    serviciosEmpleador: constrollerServicios+'empleadores',
    serviciosTrabajador: constrollerServicios+'trabajadores'
    
}
