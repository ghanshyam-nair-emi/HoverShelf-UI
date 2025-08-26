const tabbedSection =({selection,setTabbedSelection}) => {
    return (
        <div className="tabbed-section-container">
            <div className="tabbedSectionholder">
                <div className="tabbedSectionAll">
                    <button className={`tab-button ${selection === "All" ? "active" : ""}`} onClick={() => setTabbedSelection("All")}>
                        All
                    </button>
                </div>
                <div className="tabbedSectionData">
                    <button className={`tab-button ${selection === "Data" ? "active" : ""}`} onClick={() => setTabbedSelection("Data")}>
                        Data
                    </button>
                </div>
                <div className="tabbedSectionReports">
                    <button className={`tab-button ${selection === "Reports" ? "active" : ""}`} onClick={() => setTabbedSelection("Reports")}>
                        Reports
                    </button>
                </div>
                <div className="tabbedSectionDashboards">
                    <button className={`tab-button ${selection === "Charts" ? "active" : ""}`} onClick={() => setTabbedSelection("Dashboards")}>
                        Dashboards
                    </button>
                </div>
            </div>
        </div>
    );
}