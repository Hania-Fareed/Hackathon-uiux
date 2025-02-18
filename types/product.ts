

export interface Product {
    _id : string;
    name : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    oldPrice : number;
    description?: string;
    slug: {
        _type : 'slug',
        current : string;
    }
    stockLevel : number;
}