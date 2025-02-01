
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name : 'firstName',
            type :'string',
            title : 'First Name'
        },
        {
            name : 'lastName',
            type :'string',
            title : 'Last Name'
        },
        {
            name : 'address',
            type : 'string',
            title : 'Address'
        },
        {
            name : 'city',
            type : 'string',
            title : 'City'
        },
        {
            name : 'zipCode',
            type : 'string',
            title : 'Zip Code'
        },
        {
            name : 'phone',
            type : 'string',
            title : 'Phone Number'
        },
        
        {
            name : 'email',
            type :'string',
            title : 'Email'
        },
        {
            name : 'cartItems',
            type : 'array',
            title : 'Cart Items',
            of : [{ type : 'reference', to : {type : 'product'} }]
        },
        {
            name : 'total',
            type : 'number',
            title : 'Total'
        },
        {
            name : 'status',
            type :'string',
            title : 'Order Status',
            options : {
                list : [
                    { value : 'pending', title : 'Pending' },
                    { value : 'success', title : 'Success' },
                    { value : 'dispatch', title : 'Dispatch' },
                ],
                layout : 'radio' // optionally, change to 'dropdown' if you prefer a dropdown
            },
            intialValue : 'pending' // default value
        },
    ]
}