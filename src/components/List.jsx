import React from "react";
import './list.scss'
function List({items, isRemovable}){

return (
<ul className="list">
    {items.map((item, index)=>(
        <li key={index} className={item.active ? 'active' : ""}>
        <i>
            {item.icon ? item.icon :  <i className={`badge badge--${item.color}`}></i>}
        </i>
        <span>{item.name}</span>
    </li>
    ))}
</ul>
);
}

export default List;