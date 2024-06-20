import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitarioAppService {

  constructor() { }

  obtenerFechaFormateada(fecha: Date, separator: string): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear().toString();

    return `${dia}${separator}${mes}${separator}${año}`;
  }

  parsearFechaDesdeCadena(fechaStr: string): Date | null {
    const partes = fechaStr.split('/');
    if (partes.length === 3) {
      const [dia, mes, anio] = partes.map((part) => parseInt(part, 10));
      if (!isNaN(dia) && !isNaN(mes) && !isNaN(anio)) {
        return new Date(anio, mes - 1, dia);
      }
    }
    return null;
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        //resolve(base64String);
        const base64Data = base64String.split(',')[1];

        resolve(base64Data);
      };

      reader.readAsDataURL(file);
    });
  }

  obtenerExtensionArchivo(nombreArchivo: string): string {
    const lastDotIndex = nombreArchivo.lastIndexOf('.');
    const extension = lastDotIndex !== -1 ? nombreArchivo.substring(lastDotIndex + 1).toLowerCase() : '';
    return extension;
  }

  validarExtensionArchivo(nombreArchivo: string): boolean {
    const extension = this.obtenerExtensionArchivo(nombreArchivo).toUpperCase();
    const extensionProhibida = ['EXE', 'BAT', 'JS']
    if (extensionProhibida.includes(extension)) {
      return false;
    }
    return true;
  }

  calcularSizeArchivo(tamañoBytes: number): string {
    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;

    if (tamañoBytes < KB) {
      return tamañoBytes + ' bytes';
    } else if (tamañoBytes < MB) {
      return (tamañoBytes / KB).toFixed(2) + ' KB';
    } else if (tamañoBytes < GB) {
      return (tamañoBytes / MB).toFixed(2) + ' MB';
    } else {
      return (tamañoBytes / GB).toFixed(2) + ' GB';
    }
  }

  generarRandomString(cantidad:number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < cantidad; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
