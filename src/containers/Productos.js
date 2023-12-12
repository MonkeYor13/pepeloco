import {useEffect, useState} from 'react'
// instalamos en nuestro proyecto axio: npm i axios desde el powershell
import axios from "axios";

export default function Productos() {
//llamamos nuestro usestate para renderizar nuestos datos, simpre iniciarlos con una array vacio []
const [mercaderia, setMercaderia] = useState([]);

//creamos nuetra variable ocn funcion asincrona y trae un res de axio y los productos desde la URL
let traemeProductos = async()=>{
    const res = await axios.get('https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid');
    setMercaderia (res.data.data);
    console.log(res.data.data, "traemeProductos"); //esto es para verificar que si trae los datos.
};
//cargamos los datos de afuera, pero useEffect no puede ser una funcion async por eso creamos la let traemeProductos
useEffect(() => {
    traemeProductos();
}, [])

return (
    <div>
        <h1>Somos los Productos</h1>
        {mercaderia.map((item)=>(
            <p>{item.name}</p>
        ))}
    </div>
)
}
