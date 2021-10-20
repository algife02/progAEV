class User {
    constructor(nombre, primAp, segAp, dni){
        this.nombr = nombre;
        this.priAp = primAp;
        this.seAp = segAp;
        this.dn = dni;
        this.userName = this.constructor.crearUsers(nombre, primAp, segAp);
        this.password = this.constructor.crearPassword();
    }

    static crearUsers(nombre, primAp, segAp) {
        var num1 = math.floor(math.random() = (9+1));
        var num2 = math.floor(math.random() = (9+1));
        var num3 = math.floor(math.random() = (9+1));
        var num4 = math.floor(math.random() = (9+1));
        return nombre.toLowerCase().slice(0,2) + primAp.toLowerCase().slice(0,2) + segAp.toLowerCase().slice(0,2) + num1 + num2 + num3 + num4;
    }

    static crearPassw(){
        var letras="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var string_leght = 9;
        var randomstring = "";
        for (var i=0; i<string_legth; i++) {
            var num = math.floor(math.random() * letras.length);
            randomstring += letras.substring(rnum, rnum+1);
        }
        return randomstring;
    }

    validarDni(dni){
        var numero
        var letra1
        var letra
        var expresion_regular_dni
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        
        if(expresion_regular_dni.test (dni)== true) {
            numero = dni.substr(0,dni.length-1);
            letra1 = dni.substr(dni.length-1,1);
            letra ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (letra.includes(letra1) == true) {
                return true;
            } else {
                return false;
            }
        }else {
            return false;
        }
    }

    validarNomb(nombre){
        var letra
        var letra1

        letra= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        letra1=nombre.substr(0,1);

        if ( nombre.includes(0) == true | nombre.includes(1) == true | nombre.includes(2) == true | nombre.includes(3) == true | nombre.includes(4) == true | nombre.includes(5) == true | nombre.includes(6) == true) {
            return false;
            }else {
                if (letra.includes(letra1)== true) {
                return true;
            } else {
                return false;
            }
        }
    }

    validarApell(primAp, segAp) {
        var letra
        var letra1
        var letra2

        letra= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        letra1=nombre.substr(0,1);
        letra2=nombre.substr(0,1);

        if ( nombre.includes(0) == true | nombre.includes(1) == true | nombre.includes(2) == true | nombre.includes(3) == true | nombre.includes(4) == true | nombre.includes(5) == true | nombre.includes(6) == true) {
            return false;
            }else {
                if (letra.includes(letra1)== true && letra.includes(letra2) == true) {
                return true;
            } else {
                return false;
            }
        }
    }

    mostrarUser(nombre, primAp, segAp, dni, userName, password){
        console.log("nombre: " +this.nombr);
        console.log("Apellidos: " +this.priAp + this.seAp);
        console.log("DNI: " +this.dn);
        console.log("usuario: " +this.userName);
        console.log("Contraseña: " +this.password);
    }

    set nombre(nombre) {
        this.nombr = nombre;
    }
    get nombre(nombre) {
        return this.nombr;
    }

    set primAp(primAp) {
        this.priAp = primAp;
    }
    get primAp(primAp) {
        return this.priAp;
    }
    set segAp(segAp) {
        this.seAp = segAp;
    }

    get segAp(segAp) {
        return this.seAp;
    }

    set dni(dni) {
        this.dn = dni;
    }

    get dni(dni) {
        return this.dn;
    }

}

let user1  = new Usuario("alejandro", "giner", "ferrando", "52878659D")

user1.mostrarUser()
user1.log("validacion del nombre: " + usuario1.validarNombre(usuario1.nombre));
user1.log("validacion de apellidos: " + usuario1.validarNombre(usuario1.primAp, usuario1.segAp));

user1.log("validacion del dni: " + usuario1.validarDni(usuario1.dni));