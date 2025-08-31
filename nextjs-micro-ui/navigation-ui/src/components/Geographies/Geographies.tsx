import './Geographies.css';

import { Check, ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Geographies = ({ Searchtype, GeographiesSelection, handleGeographiesSelection, setisSelected }) => {
    
    const geographiesOptions = [
        { id: 'services', name: 'Services' },
        { id: 'creator', name: 'Creator' },
        { id: 'info', name: 'Info' }
    ];

    const handleOptionClick = (option) => {

        handleGeographiesSelection({id: 'Geo', name: option.name});
        setisSelected(true);
    };

    const selectedOption = geographiesOptions.find(option => option.id === GeographiesSelection);

    return (
        <div className='geographies-container'>
            { (
                <div className='geographies-options'>
                    {geographiesOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`geographies-option ${GeographiesSelection === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <span className='option-name'>{option.name}</span>
                            {GeographiesSelection === option.id && (
                                <Check size={14} className='check-icon' />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Geographies;