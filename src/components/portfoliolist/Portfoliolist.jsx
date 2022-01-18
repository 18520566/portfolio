import "./portfoliolist.scss"
import React from 'react'

export default function Portfoliolist({title, active, setSelected,id}) {
    return (
        <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
