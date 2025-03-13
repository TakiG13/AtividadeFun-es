function gerarPares(n) {
    const pares = [];
    for (let i = 1; i <= n; i++) {
        pares.push(i * 2);
    }
    return pares;
}

export default gerarPares;