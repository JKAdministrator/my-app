import React from 'react';
import './ProductPage.css'
const ProductPage = (props) => {
    const {nombre, descripcion, precio, sku, cantidadDisponible} = props;

    return (
        <form action="" className='card'>
            <div className='productImage' id='productImage' name='productImage'>
                <img src={`./productsImages/${sku}.png`} alt="" srcset="" />
            </div>
            <label className='label' id='labelName' htmlFor="inputName" >Nombre :</label>
            <input className='input' id="inputName" name="inputName" type="text" value={nombre} readOnly />
            <label className='label' id='labelDescription' name='labelDescription' htmlFor="inputDescription"  >Descripcion :</label>
            <textarea className='textarea' id="inputDescription" name="inputDescription"  value={descripcion} readOnly ></textarea>
            <label className='label' id='labelPrice' name='labelPrice' htmlFor="inputPrice"  >Precio :</label>
            <input className='input' id="inputPrice" name="inputPrice" type="number" value={precio} readOnly />
            <label className='label' id='labelSKU' name='labelSKU' htmlFor="inputSKU" >SKU :</label>
            <input className='input' id="inputSKU" name="inputSKU" type="text" value={sku} readOnly />
            <label className='label' id='labelQuantityAvailable' name="labelQuantityAvailable" htmlFor="inputQuantityAvailable"  >Cantidad disponible:</label>
            <input className='input' id="inputQuantityAvailable" name="inputQuantityAvailable" type="number" value={cantidadDisponible} readOnly />
        </form>

    );
};

export default ProductPage;