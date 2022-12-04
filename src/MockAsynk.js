const items = [
    {
        id: '1',
        img: '../imagenes/skate.jpg',
        tittle: 'Skate',
        text: 'tabla de inicio',
        category: 'skate',
        stock: '5'
    },
    {
        id: '2',
        img: '../imagenes/lija.jpg',
        tittle: 'Lijas',
        text: 'Lijas doble capa',
        category: 'componentes',
        stock: '3'
    },
    {
        id: '3',
        img: '../imagenes/ruedas.jpg',
        tittle: 'Ruedas',
        text: 'Ruedas de 8mm',
        category: 'componentes',
        stock: '0'
    }
]

export const getItems = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(items)
        }, 2000)
    })
}

export const getItemsById = (id) =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(items.find(items => items.id === id))
        }, 2000)
    })
   
}
export const getCategoryById = (categoryId) =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(items.filter(items => items.category === categoryId))
        }, 2000)
    })
   
}