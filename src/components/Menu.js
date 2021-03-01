import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div>
            <div className="row mb-2">
                <div className="col-4 font-weight-bold">Блюда</div>
                <div className="col-2 font-weight-bold">Цена</div>
                <div className="col-2 font-weight-bold">Количество</div>
                <div className="col-2 font-weight-bold">Обшая сумма</div>
                <div className="col-2 font-weight-bold"></div>
            </div>
            <hr/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <p className="text-right">Total: 100000</p>
        </div>
    );
};

export default Menu;