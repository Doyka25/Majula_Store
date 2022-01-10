export function Item ({ product}) {
    return (
    <div>
        sku:{product.sku}
        nombre: {product.nombre}
        descripcion: {product.descripcion}
        stock: {product.stock}
        precio: {product.precio}
        
    </div>
    )
}