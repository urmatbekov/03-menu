import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = () => {

    const [menu, setMenu] = useState([
        {id:1, name: "Manty", price: 120, count: 4 },
        {id:4, name: "Lagman", price: 140, count: 2 },
        {id:5, name: "Shorpo", price: 100, count: 4 },
        {id:7, name: "Gulchatai", price: 90, count: 2 },
        {id:11, name: "Shashlyk", price: 90, count: 3 },
        {id:14, name: "Chai", price: 20, count: 2 },
    ])

    const totalPrice = menu.reduce((ans, { price, count }) => ans + price * count, 0)

    const deleteItem = (id) => () => {
        const filtered = menu.filter((item)=>item.id!==id)
        setMenu([...filtered])
    }


    return (
        <div>
            <div className="row mb-2">
                <div className="col-4 font-weight-bold">Блюда</div>
                <div className="col-2 font-weight-bold">Цена</div>
                <div className="col-2 font-weight-bold">Количество</div>
                <div className="col-2 font-weight-bold">Обшая сумма</div>
                <div className="col-2 font-weight-bold"></div>
            </div>
            <hr />
            {menu.map((item) => <MenuItem deleteItem={deleteItem} item={item} />)}
            <p className="text-right">Total: {totalPrice}</p>
        </div>
    );
};

export default Menu;