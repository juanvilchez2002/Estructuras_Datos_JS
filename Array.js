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
}

//inicializando la clase
const myArray = new MyArray();