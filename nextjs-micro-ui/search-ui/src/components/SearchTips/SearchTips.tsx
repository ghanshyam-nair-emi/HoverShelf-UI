import "./SearchTips.css";

const SearchTips=({search}) => {
    return (
        <div className="search-tips">
            {search.type == "tips" ? (
                <div className="search-tips-container">
                <div className="tip-logo">
                    <svg viewBox="0 -960 960 960" fill="currentColor" height="16" width="16"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q31 0 60 6.5t55 19.5l-62 62q-13-4-26-6t-27-2q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400q70 0 120.5-45.5T559-560h80q-3 38-16.5 72T588-428l252 252-56 56Zm-84-360q0-92-64-156t-156-64q92 0 156-64t64-156q0 92 64 156t156 64q-92 0-156 64t-64 156Z"></path></svg>
                </div>
                <div className="search-tip">
                    <h3>{search.query}</h3>
                </div>
                </div>
            ) : (
                <div className="recent-searches-container">
                <div className="recent-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="search-tip">
                    <h3>{search.query}</h3>
                </div>
                <div className="dateofrecent">
                    <p>{new Date(search.timestamp).toLocaleDateString()}</p>
                </div>
            </div>)}
        </div>
    );
};

export default SearchTips;