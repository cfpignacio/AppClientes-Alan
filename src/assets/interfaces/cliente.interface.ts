export interface ICliente {
	id?: number;
	nombre: string;
	apellido: string;
	telefono: number;
	cuit: number | string;
	pais: string;
	localidad: string;
	codpostal: string;
	direccion: string;
}
