import './Discover.css';

import { Check, ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Discover = ({ Searchtype, DiscoverSelection, setDiscoverSelection, setisSelected }) => {
    
    const discoverOptions = [
        { id: 'cheddar', name: 'Cheddar.ai' },
        { id: 'pumpernickel', name: 'Pumpernickel' },
        { id: 'spotify', name: 'Spotify Transcript' },
        { id: 'arxiv', name: 'ArxivSearch' },
        { id: 'mumbai', name: 'MumbaiHunt' }
    ];

    const handleOptionClick = (option) => {
        
        setDiscoverSelection(option.id);
        setisSelected(true);
    };

    const selectedOption = discoverOptions.find(option => option.id === DiscoverSelection);

    return (
        <div className='discover-container'>
            { (
                <div className='discover-options'>
                    {discoverOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`discover-option ${DiscoverSelection === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <span className='option-name'>{option.name}</span>
                            {DiscoverSelection === option.id && (
                                <Check size={14} className='check-icon' />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Discover;