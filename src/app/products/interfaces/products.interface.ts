export interface Products {
    detalle:    string;
    AProductos: AProducto[];
    estatus:    number;
    message:    string;
    msystem:    string;
}

export interface AProducto {
    idproducto:          number;
    producto:            string;
    imagenproducto:      string;
    descuento:           boolean;
    costopublico:        number;
    descuentoporcentaje: number;
    descuentomonto:      number;
    puntos:              number;
    granel:              boolean;
    unidadmedida:        Unidadmedida;
    cantidad?: number;
    precioTotal?:number;
}

export enum Unidadmedida {
    Kg = "KG.",
    Und = "UND.",
}

export interface Categoria {
    nombre :string,
    id: string
}