const express = require('express')
const app = express()
app.get("/", function (req, res) {
    res.send("Está funcionando")
})


let listaDePedidos = [
    {
        "codigo": 1,
        "cliente": "Murilo Quintal",
        "codigocliente": 100,
        "produto": "X-Bacon",
        "valor": 29.9
    },
    {
        "codigo": 2,
        "cliente": "Murilo Quintal",
        "codigocliente": 100,
        "produto": "Americano",
        "valor": 18.9
    },
    {
        "codigo": 3,
        "cliente": "Zulmira",
        "codigocliente": 58,
        "produto": "Fome de Dragão",
        "valro": 39.9
    }
]


//listar
app.get("/listarpedidos", function (req, res) {
    res.send(listaDePedidos)
})

//lista 1 pedido
app.get("/listapedido/:id", function (req, res) {
    let idInformado = req.params.id
    if (idInformado > listaDePedidos.length) {
        res.send("Numero de Pedido Invalido")
    } else {
        res.send(listaDePedidos[idInformado - 1])
    }})


app.listen(3000)
//localhost:3000