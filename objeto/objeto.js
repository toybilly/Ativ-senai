const objeto = [
    {
        cidade: "Mexico",
        estado: "Quintana Roo",
        pais: "Cáncun"
    },

    {
        cidade: "Atenas",
        estado: "Europa",
        pais: "Grécia",
    }
]

document.write(objeto)

// converter objeto para JSON

const objetojson = JSON.stringify(objeto)
document.write(objetojson)

//converter JSON para objeto

const jsonobjeto = JSON.parse(objetojson)
document.write(jsonobjeto)