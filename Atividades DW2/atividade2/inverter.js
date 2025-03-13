function inverter(arr) {
    let arrInvertido = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        arrInvertido.push(arr[i]);
    }

    return arrInvertido;
}

export default inverter;