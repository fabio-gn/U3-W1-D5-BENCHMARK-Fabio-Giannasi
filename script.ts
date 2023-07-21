interface Phone {
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void

}

class Smartphone implements Phone{
    constructor(
        public carica:number,
        public numeroChiamate:number,
        public costoMinuto:number

        ){}
        ricarica(euro:number):void{
            this.carica += euro
        }
        numero404():string{
            return `ti sono rimasti ${this.carica} Euro`
        }
        getNumeroChiamate():number{
            return 1
        }
        chiamata(min:number):void{
            if (this.carica > 0){
            this.numeroChiamate ++;
            this.carica = this.carica - (this.costoMinuto * min);
            } else {
                console.log('ricarica per favore, dai.')  
            }
        }
        azzeraChiamate():void{
            this.numeroChiamate = 0;
        }
} 

let mioTelefono = new Smartphone(20, 0, 0.20)
console.log('carica pre-chiamate', mioTelefono.carica)
mioTelefono.chiamata(15)
console.log('carica post-chiamate', mioTelefono.carica)
mioTelefono.chiamata(20)
console.log('carica post- seconda chiamata', mioTelefono.carica)
console.log('quante chiamate hai fatto? ',mioTelefono.numeroChiamate)
mioTelefono.azzeraChiamate()
console.log('quante chiamate hai fatto? ',mioTelefono.numeroChiamate)
console.log(mioTelefono.numero404())
console.log('--------next telephone ----------------')

let telefonoLavoro = new Smartphone(0,0,0.50)
console.log('carica pre-chiamate', telefonoLavoro.carica)
telefonoLavoro.chiamata(15)
console.log('carica post-chiamate', telefonoLavoro.carica)
telefonoLavoro.ricarica(10)
telefonoLavoro.chiamata(30)
console.log('carica post- seconda chiamata', telefonoLavoro.carica)
console.log('quante chiamate hai fatto? ',telefonoLavoro.numeroChiamate)
telefonoLavoro.azzeraChiamate()
console.log('quante chiamate hai fatto? ',telefonoLavoro.numeroChiamate)
console.log(telefonoLavoro.numero404())
console.log('--------next telephone ----------------')

let telefonoVecchio = new Smartphone(0, 10, 0.30)
console.log('carica pre-chiamate', telefonoVecchio.carica)
telefonoVecchio.chiamata(15)
console.log('carica post-chiamate', telefonoVecchio.carica)
telefonoVecchio.ricarica(40)
telefonoVecchio.chiamata(30)
telefonoVecchio.chiamata(20)
console.log('carica post- seconda chiamata', telefonoVecchio.carica)
console.log('quante chiamate hai fatto? ',telefonoVecchio.numeroChiamate)
telefonoVecchio.azzeraChiamate()
console.log('quante chiamate hai fatto? ',telefonoVecchio.numeroChiamate)
console.log(telefonoVecchio.numero404())
