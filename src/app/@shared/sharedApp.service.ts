import { Injectable, inject } from '@angular/core'
import { mensajesToast } from '@constantes';
import { I_ConfirmDialog, I_MessageToast } from '@interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MensajesValidaciones, MensajesValidacionesError } from '../@models/constantesFrm';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from './localStorage.service';
import { variableStorage } from '../config/configApp';

@Injectable({
  providedIn: 'root'
})
export class SharedAppService {
  private serviceConfirmation = inject(ConfirmationService);
  private serviceMessage = inject(MessageService)
  private localStorage = inject(LocalStorageService)

  constructor() { }

  async confirmDialog(objeto: I_ConfirmDialog): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.serviceConfirmation.confirm({
        message: objeto.message ?? '¿Desea guardar el registro?',
        header: objeto.header ?? 'Aviso',
        acceptLabel: objeto.acceptLabel ?? 'Si',
        acceptIcon: objeto.acceptIcon ?? "pi pi-check-circle",
        rejectLabel: objeto.rejectLabel ?? 'No',
        rejectIcon: objeto.rejectIcon ?? "pi pi-times-circle",
        accept: () => {
          resolve(true);
        },
        reject: () => {
          resolve(false);
        }
      });
    })
  }

  messageToast(objeto?: I_MessageToast) {
    this.serviceMessage.clear();
    this.serviceMessage.add({
      severity: objeto?.severity ?? 'error',
      summary: objeto?.summary ?? 'Error',
      detail: objeto?.detail ?? mensajesToast.msgErrorGenerico
    });
  }

  validarCamposConAnidados(form: FormGroup, campos: any, camposAnidados?: any): any {
    let errorEncontrado = null;

    if (Array.isArray(campos)) { // Validar campos específicos
      for (const controlName of campos) {
        const control = form.controls[controlName];
        if (!control || !(control instanceof FormControl) || !control.value || control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          const descripcionError = control.errors ? Object.keys(control.errors)[0] : 'required';
          errorEncontrado = {
            controlName,
            descripcion: descripcionError
          };
          break;
        } else {
          if (camposAnidados) {
            const relacionPadreHijo = camposAnidados.find(x => x.padre === controlName);
            if (relacionPadreHijo) {
              const childControlName = relacionPadreHijo.child;
              const controlHijo = form instanceof FormGroup ? form.get(childControlName) : null;
              if (controlHijo && controlHijo.value === undefined || controlHijo.value === null || controlHijo.value === '') {
                controlHijo.markAsDirty();
                controlHijo.updateValueAndValidity({ onlySelf: true });
                errorEncontrado = {
                  controlName: childControlName,
                  descripcion: "required"
                };
                break;
              }
            }
          }
        }
      }

      if (errorEncontrado) {
        return {
          bValid: false,
          error: errorEncontrado
        };
      } else {
        return {
          bValid: true,
          error: null
        };
      }
    }
  }

  validarFormularioCompleto(form: FormGroup, campos?: any): any {
    let errorEncontrado = null;

    for (const [controlName, control] of Object.entries(form.controls)) {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });

        const descripcionError = Object.keys(control.errors || {})[0];
        errorEncontrado = {
          controlName,
          descripcion: descripcionError
        };

        break;
      } else {
        if (campos) {
          const relacionPadreHijo = campos.find(campo => campo.padre === controlName);
          if (relacionPadreHijo) {
            const childControlName = relacionPadreHijo.child;
            const controlHijo = form instanceof FormGroup ? form.get(childControlName) : null;
            if (controlHijo && controlHijo.value === undefined || controlHijo.value === null || controlHijo.value === '') {
              controlHijo.markAsDirty();
              controlHijo.updateValueAndValidity({ onlySelf: true });
              errorEncontrado = {
                controlName: childControlName,
                descripcion: "required"
              };
              break;
            }
          }
        }
      }
    }

    if (errorEncontrado) {
      return {
        bValid: false,
        error: errorEncontrado
      };
    } else {
      return {
        bValid: true,
        error: null
      };
    }
  }



  validarFormulario(form: FormGroup): any {
    const invalidControls = [];

    Object.entries(form.controls).forEach(([controlName, control]) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
        //invalidControls.push({ formName: form, controlName });
        invalidControls.push(controlName);
      }
    });

    const objeto = {
      bValid: invalidControls.length == 0 ? true : false,
      invalidControls
    }

    return objeto;
  }

  messageErrorCampoForm(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);

    if (!control) {
      return '';
    }

    const errorKeys = Object.keys(control.errors || {});

    return this.getErrorMessagesFrm(errorKeys, control);
  }

  private getErrorMessagesFrm(errorKeys: string[], control: AbstractControl): string {
    const errorMessages: { [key: string]: string } = {
      'required': 'Este campo es obligatorio. ',
      'minlength': `La longitud mínima de ${control.errors?.['minlength']?.requiredLength} dígitos no se cumple. `,
      'maxlength': `La longitud máxima de ${control.errors?.['maxlength']?.requiredLength} dígitos se ha superado. `
    };

    return errorKeys.map(key => errorMessages[key]).join('').trim();
  }

  messageErrorCampoToast(controlFormError: any): string {
    //console.log("controlFormError : ", controlFormError);

    for (const controlName of controlFormError) {
      const error = this.getErrorMsgForControl(controlName);
      //console.log("getMsgErrorForm error : ", error);

      if (error) {
        return error;
      }
    }
    return '';
  }

  messageErrorCampoToastNew(controlFormError: any): string {
    const controlName = controlFormError.controlName;
    const errorType = controlFormError.descripcion;

    const errorMsg = this.getErrorMsgForControlNew(controlName, errorType);
    console.log("Mensaje de error: ", errorMsg);

    if (errorMsg) {
      return errorMsg;
    }

    return '';
  }

  getErrorMsgForControlNew(controlName: string, errorType: string): string | null {
    if (MensajesValidaciones[controlName]) {
      const errorMessages = MensajesValidaciones[controlName];
      return errorMessages[errorType] || null;
    }

    return null;
  }

  private getErrorMsgForControl(controlName: string): string | null {
    return MensajesValidacionesError[controlName] || null;
  }

  grabarDataLocalStorage(procesoHome: boolean, objeto?: any) {
    let data = {};
    if (procesoHome) {
    } else {
      const localStorageKey = variableStorage;
      const objetoExistenteStr = localStorage.getItem(localStorageKey);

      let objetoExistente: Record<string, any> = {};
      if (objetoExistenteStr) {
        try {
          objetoExistente = JSON.parse(objetoExistenteStr);
        } catch (error) { }
      }

      if (objeto && typeof objeto === 'object') {
        Object.keys(objeto).forEach((key) => {
          objetoExistente[key] = objeto[key];
        });
      }

      try {
        data = objetoExistente;
      } catch (error) { }
    }

    this.localStorage.setearData(data);
  }

  obtenerDataLocalStorage() {
    const localStorageKey = variableStorage;
    const objetoExistenteStr = localStorage.getItem(localStorageKey);

    let objetoExistente: Record<string, any> = {};
    if (objetoExistenteStr) {
      try {
        objetoExistente = JSON.parse(objetoExistenteStr);
        //console.log("objetoExistente : ", objetoExistente);

      } catch (error) { }
    }

    return objetoExistente
  }
  getVersionNavegadorValido():boolean{
    const browserVersion:any = this.getBrowserVersion();
    const isMobile = this.detectMobile();

    if (browserVersion.userAgent === 'Chrome' && browserVersion.versionAgent < 85){
      return false;
    }
    return true;
  }

  private getBrowserVersion(): {} {
    const userAgent = window.navigator.userAgent;
    const match = userAgent.match(/(chrome|firefox|safari|edge|opera|trident(?=\/))\/?\s*(\d+)/i);
    if (match && match[1] && match[2]) {
      const navegador =  {
        userAgent: match[1],
        versionAgent: match[2]
      }
      return navegador;
    } else {
      return 'No se puede detectar la versión del navegador.';
    }
  }

  private detectMobile(): boolean {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    return mobileKeywords.some(keyword => userAgent.includes(keyword));
  }
}