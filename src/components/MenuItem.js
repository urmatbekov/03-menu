import React from 'react';

const MenuItem = ({item,deleteItem}) => {
    const {name,price,count,id} = item
    return (
        <div className="row mb-2">
            <div className="col-4">{name}</div>
            <div className="col-2">{price} com</div>
            <div className="col-2">{count} порс</div>
            <div className="col-2">{price*count} com</div>
            <div className="col-2"><button onClick={deleteItem(id)} className="btn btn-danger">x</button></div>
        </div>
    );
};

export default MenuItem;