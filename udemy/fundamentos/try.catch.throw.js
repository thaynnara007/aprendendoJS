const tratarErroLancar = (e, msg) =>{
    // throw new Error(msg)
    // throw 10
    // throw false
    // throw 'mensagem'
    throw {
        nome: e.nome,
        msg: e.message,
        date: new Date()
    }
}

const imprimirNomeGritando = (obj) => {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroLancar(e, "parameto ou atributos do mesmo nao definido")
    } finally {  // entra nesse escopo independente de ter entrado ou não no catch
        console.log('final')
    }
}

const obj = {nome: 'Thay'}
imprimirNomeGritando(obj)