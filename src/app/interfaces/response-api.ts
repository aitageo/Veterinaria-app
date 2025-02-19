export interface ResponseApi {
    Login: Login;
}

export interface Login {
    _id:                string;
    nombre:             string;
    password:           string;
    email:              string;
    telefono:           null;
    web:                null;
    token:              string;
    confirmado:         boolean;
    __v:                number;
    codigoExpiracion:   Date;
    codigoRecuperacion: string;
}