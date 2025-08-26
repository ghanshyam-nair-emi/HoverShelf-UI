import './Selected.css';

const Selected =({setisSelected , DiscoverSelection ,setDiscoverSelection,GeographiesSelection, setGeographiesSelection}) => {
    return (
        <div className="selected-container">
            <div className="discover-selection-container">
                                {DiscoverSelection.size > 0 && (
                    <div className="selected-items-container">
                        <h3 className="selected-items-title">
                            Selected Categories ({DiscoverSelection.size})
                        </h3>
                        <div className="selected-items-list">
                            {Array.from(DiscoverSelection as Set<string>).map((path) => (
                                <span
                                    key={path}
                                    className="selected-item-tag"
                                >
                                    {path.split('.').pop()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="geographies-selection-container">
                {GeographiesSelection.size > 0 && (
                    <div className="selected-items-container">
                        <h3 className="selected-items-title">
                            Selected Geographies ({GeographiesSelection.size})
                        </h3>
                        <div className="selected-items-list">
                            {Array.from(GeographiesSelection as Set<string>).map((path) => (
                                <span
                                    key={path}
                                    className="selected-item-tag"
                                >
                                    {path.split('.').pop()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Selected;