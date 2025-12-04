import React, { useState } from 'react';
import './ContactFilter.css';

export default function ContactFilters() {

    const [active, setActive] = useState('todos');

    function handleClick(filter) {
        setActive(filter);
    }

    return (
        <div className="filters-container">
            <button 
                className={active === 'todos' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => handleClick('todos')}
            >
                Todos
            </button>

            <button 
                className={active === 'no-leidos' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => handleClick('no-leidos')}
            >
                No leídos
            </button>

            <button 
                className={active === 'favoritos' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => handleClick('favoritos')}
            >
                Favoritos
            </button>

            <button 
                className={active === 'grupos' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => handleClick('grupos')}
            >
                Grupos
            </button>
        </div>
    );
}
