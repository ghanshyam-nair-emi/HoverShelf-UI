import './Discover.css';

import { Check, ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Discover = ({ Searchtype, DiscoverSelection, handleDiscoverSelection, setisSelected }) => {
    
    const discoverOptions = [
        { id: 'cheddar-ai', name: 'Cheddar.ai' },
        { id: 'laubi-intercom', name: 'Laubi Intercom' },
        { id: 'mangalyavedi-matrimony', name: 'Mangalyavedi' },
        { id: 'pumpernickel-agent', name: 'Pumpernickel' },
        { id: 'podinsights-transcript', name: 'Spotify Transcript' },
        { id: 'arxiv-search-assistant', name: 'ArxivSearch' },
        { id: 'mumbaihunt-rent-analysis', name: 'MumbaiHunt' }
    ];

    const handleOptionClick = (option) => {

        handleDiscoverSelection({id: "disc", name: option.id});
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