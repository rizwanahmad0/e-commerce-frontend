
interface ProductType {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    category: string
}


export class Product {
    id?: string;
    name?: string;
    price?: number
    description?: string
    imageUrl?: string
    category?: string

    constructor(obj: ProductType) {
        if (!obj) {
            return
        }
        this.id = obj.id
        this.name = obj.name
        this.price = obj.price
        this.description = obj.description
        this.imageUrl = obj.imageUrl
        this.category = obj.category
    }
}