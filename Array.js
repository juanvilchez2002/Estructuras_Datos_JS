//creando un array, no declarandolo

const array = ["Diego", "Karen", "Oscar","Juan"];

//creando una clase
class MyArray{
    constructor(){
        this.length = 0;//inicializamos el tamaño del array
        this.data = {};//aqui voy a guardar todos los elementos
    }

    //regresando un valor especifico array[index]
    get(index){
        return this.data[index];
    }

    //adicionando elementos al array
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    //elimando el ultimo elemento del arreglo, emulando metodo pop()
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length - 1];//elimina el ultimo elemento
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    //genera cambios en el indice
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    //adicionando un elemento al inicio del array
    unshift(item){
        //generando un loop que va de mayor a menor
        for(let i = this.length; i > 0; i--){
            //reemplazando el valor de ultimo elemento al penultimo y asi sucesivamente
            this.data[i] = this.data[i-1];
        }
        //adicionando el item al primer elemento del array
        this.data[0] = item;
        this.length++;//incrementando la longitud del array
        return this.data
    }

    //eliminando el primer elemento del array
    shift(){
        this.shiftIndex(0);
        return this.data;
    }
}

//inicializando la clase
const myArray = new MyArray();