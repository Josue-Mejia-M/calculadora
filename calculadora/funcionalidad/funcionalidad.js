const mostrarValor = (valor) =>{
    document.getElementById('entrada').value += valor
}

const limpiar = () =>{
    document.getElementById('entrada').value = ''
}

const calcular = () =>{
    try {
        document.getElementById('entrada').value = eval(document.getElementById('entrada').value)
    } catch (error) {
        alert('Operacion no valida')
    }
}

const porcentaje =()=>{
    document.getElementById('entrada').value = eval((document.getElementById('entrada').value)/100)
}

const borrar = () =>{
    document.getElementById('entrada').value = document.getElementById('entrada').value.slice(0,-1);
}