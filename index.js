const exp = require("express")
const modeloProducto = require('./src/models/producto')

const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.write("<h1><center>Bienvenido</h1></center>")
    res.end();
});

app.get('/productos', async(req, res)=>{
    let listaProducto = await modeloProducto.find({});
    console.log(listaProducto)
    if (listaProducto){
        res.json(listaProducto);
    }else{
        res.json({"Error": "Hubo un error"})
    }

})

app.get('/productos/:nombre', async(req,res)=>{
    let listaProducto = await modeloProducto.findOne({"nombre": req.params.nombre});
    console.log(listaProducto)
    if (listaProducto){
        res.json(listaProducto);
    }else{
        res.json({"Error": "Hubo un error"})
    }


})

app.post('/productos', async(req,res)=>{
    const nuevoProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
    };

    let Insercion = await modeloProducto.create(nuevoProducto);
    if (Insercion)
        res.status(200).json({"Mensaje": "Registo Exitoso"})
    else
        res.status(404).jsos({"Mensaje": "Se presento un Error"})
})


app.put('/productos:nombre', async(req,res)=>{
    const productoEditado = {
        nombre: req.params.nombre,
        precio: req.body.precio,
    };

    let actualizacion = await modeloProducto.findOneAndUpdate({nombre:req.params.nombre},productoEditado);
    if (actualizacion)
        res.status(200).json({"Mensaje": "Actualizado Exitosamente"})
    else
        res.status(404).jsos({"Mensaje": "Se presento un Error"})
})
//callback
app.listen(9888,()=>{
    console.log('Servidor en linea, Puerto 9888')
});