import './App.css'; // Import the CSS file for styling

import Discover from './components/Discover/Discover';
import Geographies from './components/Geographies/Geographies';
import NavigationComponent from './components/NavigationComponent';
import React from 'react';
import SearchTypebarCarousel from './components/SearchTypebarCarousel/SearchTypebarCarousel';
import Selected from './components/Selected/Selected';
import { useState } from 'react';

const App = () => {
  const [Searchtype, setSearchType] = useState("All");
  const [isCollapsed, setisCollapsed] = useState(true);
  const [isButtonExpand, setisButtonExpand] = useState(true);
  const [geographiesData, setGeographiesData] = useState();
  const [isSelected, setisSelected] = useState(false);
  const [isDiscoverdropdownOpen, setisDiscoverdropdownOpen] = useState(false);
  const [isgeodropdownOpen, setisGeodropdownOpen] = useState(false);
  const [DiscoverComponentFilteres, setDiscoverComponentFilteres] = useState({});
  const [GeographiesSelection, setGeographiesSelection] = useState({id: 'def', name: ''});
  const [DiscoverSelection, setDiscoverSelection] = useState({id: 'def', name: ''});
  const [isExpandedDiscover, setIsExpandedDiscover] = useState(false);


  const handleSearchType = (searchtype) => {
    setSearchType(searchtype);
    console.log("Search type changed to:", searchtype);
  }

      const toggleExpanded = () => {
        setIsExpandedDiscover(!isExpandedDiscover);
    };

  const handleSelected = () => {
    if (isCollapsed) {
      handleToggle(!isCollapsed)
    }
    const selection = !isSelected;
    setisSelected(selection);
    console.log("Selection changed to:", selection);
  }
  const handleDiscoverDropdownToggle = () => {
    if (isCollapsed) {
      handleToggle(!isCollapsed)
    }
    const newState = !isDiscoverdropdownOpen;
    setisDiscoverdropdownOpen(!isDiscoverdropdownOpen);
    console.log("Discover dropdown toggled:", !isDiscoverdropdownOpen);
    window.dispatchEvent(new CustomEvent('navigationExpanded', {
      detail: { isExpanded: newState }
    }));
  }
  const handleGeographyDropdownToggle = () => {
    if (isCollapsed) {
      handleToggle(!isCollapsed)
    }
    const newState = !isgeodropdownOpen;
    setisGeodropdownOpen(!isgeodropdownOpen);
    console.log("Geography dropdown toggled:", !isgeodropdownOpen);
    window.dispatchEvent(new CustomEvent('navigationExpanded', {
      detail: { isExpanded: newState }
    }));
  }
  const [availableGeographies, setavailableGeographies] = useState({});

  const handleGeographies = (geo) => {
    setGeographiesData(geo);
    console.log("Geographies updated:", geo);
  }

  const handleToggle = (Collapsed) => {
    const newState = Collapsed;
    setisCollapsed(newState);

    window.dispatchEvent(new CustomEvent('navigationToggle', {
      detail: { isCollapsed: newState }
    }));
  };
  return (
    <div className='app-container'>
      <div className='passportHeader'>
        {isCollapsed ? (
          <div className="isCollapsed-header">
            <img src="/logocollapsed.png" alt="ttre" />
          </div>
        ) :
          (
            <div className="unisCollapsed-header">
              <img src="/hoverheaderlogo.png" alt="wsas" />
            </div>
          )
        }
      </div>
      <div className='design-yellow'></div>
      <div className={`main-navigation-unit ${isCollapsed ? 'collapsed' : 'uncollapsed'}`}>
        <div className='Top-level-elements'>
          {/* {!isCollapsed && <div className='SearchTypebar'>
            <SearchTypebarCarousel handleSearchType={handleSearchType}></SearchTypebarCarousel>
          </div>} */}
          {!isCollapsed ? (<div className='DiscoverComponent'>
            <div className="DiscoverDropmenu">
              <div className='DiscoverComponentUnCollapsed'>
                <div className='NavigationDiscoverName'>
                  <div className='DiscoverSvg'><svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M10.33 22.36C11.5076 22.782 12.749 22.9985 14 23H19.41L19.65 23.67C20.4076 25.8107 21.8091 27.6644 23.6623 28.9768C25.5154 30.2892 27.7292 30.9959 30 31H47.65C50.4274 31.0268 53.1168 30.027 55.2023 28.1926C57.2877 26.3581 58.6223 23.8181 58.95 21.06C59.1029 19.5307 58.9308 17.9864 58.4448 16.5284C57.9587 15.0704 57.1699 13.7316 56.13 12.6C55.1 11.4672 53.8449 10.5619 52.4449 9.94196C51.045 9.32205 49.5311 9.00122 48 9H30C27.7275 9.00201 25.5114 9.70778 23.6563 11.0203C21.8012 12.3329 20.3982 14.1877 19.64 16.33L19.4 17H14C12.6739 17 11.4021 16.4732 10.4645 15.5355C9.52678 14.5979 9 13.3261 9 12V3C9 2.20435 8.68393 1.44129 8.12132 0.878679C7.55871 0.31607 6.79565 0 6 0C5.20435 0 4.44129 0.31607 3.87868 0.878679C3.31607 1.44129 3 2.20435 3 3V43C3 45.9174 4.15892 48.7153 6.22182 50.7782C8.28472 52.8411 11.0826 54 14 54H19.41L19.65 54.67C20.4076 56.8107 21.8091 58.6644 23.6623 59.9768C25.5154 61.2892 27.7292 61.9959 30 62H47.65C50.4274 62.0268 53.1168 61.027 55.2023 59.1926C57.2877 57.3581 58.6223 54.8181 58.95 52.06C59.1029 50.5307 58.9308 48.9864 58.4448 47.5284C57.9587 46.0704 57.1699 44.7316 56.13 43.6C55.1 42.4672 53.8449 41.5619 52.4449 40.942C51.045 40.3221 49.5311 40.0012 48 40H30C27.7275 40.002 25.5114 40.7078 23.6563 42.0203C21.8012 43.3329 20.3982 45.1877 19.64 47.33L19.4 48H14C12.6739 48 11.4021 47.4732 10.4645 46.5355C9.52678 45.5979 9 44.3261 9 43V21.88L10.33 22.36ZM30 15H48C49.3261 15 50.5979 15.5268 51.5355 16.4645C52.4732 17.4021 53 18.6739 53 20C53 21.3261 52.4732 22.5979 51.5355 23.5355C50.5979 24.4732 49.3261 25 48 25H30C28.6739 25 27.4021 24.4732 26.4645 23.5355C25.5268 22.5979 25 21.3261 25 20C25 18.6739 25.5268 17.4021 26.4645 16.4645C27.4021 15.5268 28.6739 15 30 15ZM30 46H48C49.3261 46 50.5979 46.5268 51.5355 47.4645C52.4732 48.4021 53 49.6739 53 51C53 52.3261 52.4732 53.5979 51.5355 54.5355C50.5979 55.4732 49.3261 56 48 56H30C28.6739 56 27.4021 55.4732 26.4645 54.5355C25.5268 53.5979 25 52.3261 25 51C25 49.6739 25.5268 48.4021 26.4645 47.4645C27.4021 46.5268 28.6739 46 30 46Z" fill="currentColor"></path></svg></div>
                  <div className='discover-component-wrapper'>
                  <div className='DiscoverComponentCollapsedText' onClick={handleDiscoverDropdownToggle}>
                    Products
                  </div>
                  {DiscoverSelection.name !== '' && (
                    <div className='selection-indicator'></div>
                  )}
                </div>
                </div>
                <div className='NavigationDiscoverContent'>
                  {isDiscoverdropdownOpen && <Discover Searchtype={Searchtype} DiscoverSelection={DiscoverSelection} setDiscoverSelection={setDiscoverSelection} setisSelected={setisSelected}/>}
                </div>
              </div>
            </div>
          </div>
          ) : (
            <div className='DiscoverComponentCollapsed' onClick={handleDiscoverDropdownToggle}>
              <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M10.33 22.36C11.5076 22.782 12.749 22.9985 14 23H19.41L19.65 23.67C20.4076 25.8107 21.8091 27.6644 23.6623 28.9768C25.5154 30.2892 27.7292 30.9959 30 31H47.65C50.4274 31.0268 53.1168 30.027 55.2023 28.1926C57.2877 26.3581 58.6223 23.8181 58.95 21.06C59.1029 19.5307 58.9308 17.9864 58.4448 16.5284C57.9587 15.0704 57.1699 13.7316 56.13 12.6C55.1 11.4672 53.8449 10.5619 52.4449 9.94196C51.045 9.32205 49.5311 9.00122 48 9H30C27.7275 9.00201 25.5114 9.70778 23.6563 11.0203C21.8012 12.3329 20.3982 14.1877 19.64 16.33L19.4 17H14C12.6739 17 11.4021 16.4732 10.4645 15.5355C9.52678 14.5979 9 13.3261 9 12V3C9 2.20435 8.68393 1.44129 8.12132 0.878679C7.55871 0.31607 6.79565 0 6 0C5.20435 0 4.44129 0.31607 3.87868 0.878679C3.31607 1.44129 3 2.20435 3 3V43C3 45.9174 4.15892 48.7153 6.22182 50.7782C8.28472 52.8411 11.0826 54 14 54H19.41L19.65 54.67C20.4076 56.8107 21.8091 58.6644 23.6623 59.9768C25.5154 61.2892 27.7292 61.9959 30 62H47.65C50.4274 62.0268 53.1168 61.027 55.2023 59.1926C57.2877 57.3581 58.6223 54.8181 58.95 52.06C59.1029 50.5307 58.9308 48.9864 58.4448 47.5284C57.9587 46.0704 57.1699 44.7316 56.13 43.6C55.1 42.4672 53.8449 41.5619 52.4449 40.942C51.045 40.3221 49.5311 40.0012 48 40H30C27.7275 40.002 25.5114 40.7078 23.6563 42.0203C21.8012 43.3329 20.3982 45.1877 19.64 47.33L19.4 48H14C12.6739 48 11.4021 47.4732 10.4645 46.5355C9.52678 45.5979 9 44.3261 9 43V21.88L10.33 22.36ZM30 15H48C49.3261 15 50.5979 15.5268 51.5355 16.4645C52.4732 17.4021 53 18.6739 53 20C53 21.3261 52.4732 22.5979 51.5355 23.5355C50.5979 24.4732 49.3261 25 48 25H30C28.6739 25 27.4021 24.4732 26.4645 23.5355C25.5268 22.5979 25 21.3261 25 20C25 18.6739 25.5268 17.4021 26.4645 16.4645C27.4021 15.5268 28.6739 15 30 15ZM30 46H48C49.3261 46 50.5979 46.5268 51.5355 47.4645C52.4732 48.4021 53 49.6739 53 51C53 52.3261 52.4732 53.5979 51.5355 54.5355C50.5979 55.4732 49.3261 56 48 56H30C28.6739 56 27.4021 55.4732 26.4645 54.5355C25.5268 53.5979 25 52.3261 25 51C25 49.6739 25.5268 48.4021 26.4645 47.4645C27.4021 46.5268 28.6739 46 30 46Z" fill="currentColor"></path></svg>
            </div>)}
          {!isCollapsed ? (<div className='GeographyComponent'>
            <div className="GeographyDropmenu">
              <div className='GeographyComponentUnCollapsed'>
                <div className='NavigationGeographyName'>
                  <div className='GeographySvg'><svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g clip-path="url(#clip0_44_2502)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00312 12.9566C2.07025 18.4211 6.52083 22.8312 12.0014 22.8312C17.5238 22.8312 22.0005 18.3535 22.0005 12.8313C22.0005 7.3235 17.5473 2.85489 12.0449 2.83143C12.0304 2.83118 12.0158 2.83105 12.0012 2.83105C11.9866 2.83105 11.972 2.83118 11.9574 2.83143C6.49755 2.85494 2.07089 7.2552 2.00314 12.7044C2.00106 12.7462 2 12.7883 2 12.8307C2 12.8729 2.00105 12.9149 2.00312 12.9566ZM8.97906 9.80818C8.83291 10.7453 8.75196 11.763 8.75196 12.8307C8.75196 13.8985 8.83291 14.916 8.97906 15.8532C9.91569 15.9991 10.9326 16.08 11.9996 16.08C13.0679 16.08 14.086 15.9989 15.0235 15.8527C15.1696 14.9156 15.2505 13.8982 15.2505 12.8307C15.2505 11.7631 15.1696 10.7457 15.0235 9.80869C14.086 9.66242 13.0679 9.58138 11.9996 9.58138C10.9326 9.58138 9.91568 9.66223 8.97906 9.80818ZM7.419 10.1292C7.30981 10.9905 7.25196 11.8972 7.25196 12.8307C7.25196 13.7642 7.30981 14.6709 7.419 15.5321C6.8082 15.3729 6.25021 15.1835 5.75696 14.9702C4.976 14.6326 4.39155 14.2498 4.01306 13.8629C3.66763 13.5098 3.52335 13.187 3.50265 12.9031C3.50245 12.8792 3.50235 12.8553 3.50235 12.8313C3.50235 12.8069 3.50245 12.7825 3.50266 12.7581C3.5234 12.4743 3.66769 12.1515 4.01306 11.7985C4.39155 11.4116 4.976 11.0289 5.75696 10.6911C6.25021 10.4779 6.8082 10.2885 7.419 10.1292ZM9.30032 8.24815C10.1609 8.13913 11.0669 8.08137 11.9996 8.08137C12.9336 8.08137 13.8407 8.13929 14.7023 8.24858C14.5431 7.63835 14.3538 7.08086 14.1407 6.58801C13.8031 5.80705 13.4203 5.2226 13.0335 4.84411C12.6606 4.4793 12.3214 4.33885 12.0263 4.33137L12.0014 4.33133L11.9761 4.33137C11.6811 4.33886 11.3419 4.47932 10.969 4.84411C10.5821 5.2226 10.1994 5.80705 9.86173 6.58801C9.64869 7.08074 9.45948 7.63809 9.30032 8.24815ZM16.5836 10.1301C16.6927 10.9911 16.7505 11.8975 16.7505 12.8307C16.7505 13.7639 16.6927 14.6703 16.5836 15.5312C17.1931 15.3722 17.7499 15.1831 18.2422 14.9702C19.0232 14.6326 19.6077 14.2498 19.9862 13.8629C20.3613 13.4794 20.4992 13.1316 20.4992 12.8307C20.4992 12.5298 20.3613 12.182 19.9862 11.7985C19.6077 11.4116 19.0232 11.0289 18.2422 10.6911C17.7499 10.4783 17.1931 10.2892 16.5836 10.1301ZM14.7023 17.4128C13.8407 17.5221 12.9336 17.58 11.9996 17.58C11.0669 17.58 10.1609 17.5222 9.30032 17.4132C9.45948 18.0233 9.64869 18.5806 9.86173 19.0733C10.1994 19.8543 10.5821 20.4388 10.969 20.8173C11.3525 21.1924 11.7003 21.3303 12.0012 21.3303C12.3021 21.3303 12.65 21.1924 13.0335 20.8172C13.4203 20.4388 13.8031 19.8543 14.1407 19.0733C14.3538 18.5805 14.5431 18.023 14.7023 17.4128ZM7.69311 17.1393C6.76016 16.9366 5.90633 16.669 5.16168 16.347C4.75227 16.17 4.36866 15.9735 4.01951 15.7576C4.87777 18.0982 6.73603 19.9564 9.07661 20.8144C8.85983 20.4643 8.66253 20.0795 8.48491 19.6686C8.16319 18.9245 7.89575 18.0714 7.69311 17.1393ZM16.3095 17.1385C17.2411 16.9359 18.0938 16.6686 18.8375 16.347C19.2488 16.1692 19.634 15.9717 19.9844 15.7547C19.1265 18.0968 17.2675 19.9563 14.9258 20.8146C15.1426 20.4644 15.3399 20.0795 15.5176 19.6686C15.8394 18.9243 16.1069 18.071 16.3095 17.1385ZM19.9838 9.90634C19.6336 9.68943 19.2485 9.49203 18.8375 9.31432C18.0938 8.99276 17.2411 8.72542 16.3095 8.52282C16.1069 7.59039 15.8394 6.73701 15.5176 5.99273C15.3402 5.58242 15.1431 5.19803 14.9267 4.84827C17.2675 5.70653 19.1258 7.56525 19.9838 9.90634ZM7.69311 8.52207C6.76016 8.72477 5.90632 8.99237 5.16168 9.31432C4.75248 9.49124 4.36906 9.68769 4.02005 9.90345C4.87844 7.56387 6.73604 5.70641 9.0757 4.84842C8.85927 5.19815 8.66228 5.58249 8.48491 5.99273C8.16319 6.73682 7.89575 7.58993 7.69311 8.52207Z" fill="currentColor"></path></g><defs><clipPath id="clip0_44_2502"><rect transform="translate(0 0.831055)" width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg></div>
                  <div className='geography-component-wrapper'>
                  <div className='GeographyCollapsedText' onClick={handleGeographyDropdownToggle}>
                    Services
                  </div>
                  {GeographiesSelection.name !== '' && (
                    <div className='selection-indicator'></div>
                  )}
                </div>
                </div>
                <div className='NavigationGeographyContent'>
                  {isgeodropdownOpen && <Geographies Searchtype={Searchtype} GeographiesSelection={GeographiesSelection} setGeographiesSelection={setGeographiesSelection} setisSelected={setisSelected}/>}
                </div>
              </div>
            </div>
          </div>
          ) : (
            <div className='GeographiesComponentCollapsed' onClick={handleGeographyDropdownToggle}>
              <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g clip-path="url(#clip0_44_2502)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00312 12.9566C2.07025 18.4211 6.52083 22.8312 12.0014 22.8312C17.5238 22.8312 22.0005 18.3535 22.0005 12.8313C22.0005 7.3235 17.5473 2.85489 12.0449 2.83143C12.0304 2.83118 12.0158 2.83105 12.0012 2.83105C11.9866 2.83105 11.972 2.83118 11.9574 2.83143C6.49755 2.85494 2.07089 7.2552 2.00314 12.7044C2.00106 12.7462 2 12.7883 2 12.8307C2 12.8729 2.00105 12.9149 2.00312 12.9566ZM8.97906 9.80818C8.83291 10.7453 8.75196 11.763 8.75196 12.8307C8.75196 13.8985 8.83291 14.916 8.97906 15.8532C9.91569 15.9991 10.9326 16.08 11.9996 16.08C13.0679 16.08 14.086 15.9989 15.0235 15.8527C15.1696 14.9156 15.2505 13.8982 15.2505 12.8307C15.2505 11.7631 15.1696 10.7457 15.0235 9.80869C14.086 9.66242 13.0679 9.58138 11.9996 9.58138C10.9326 9.58138 9.91568 9.66223 8.97906 9.80818ZM7.419 10.1292C7.30981 10.9905 7.25196 11.8972 7.25196 12.8307C7.25196 13.7642 7.30981 14.6709 7.419 15.5321C6.8082 15.3729 6.25021 15.1835 5.75696 14.9702C4.976 14.6326 4.39155 14.2498 4.01306 13.8629C3.66763 13.5098 3.52335 13.187 3.50265 12.9031C3.50245 12.8792 3.50235 12.8553 3.50235 12.8313C3.50235 12.8069 3.50245 12.7825 3.50266 12.7581C3.5234 12.4743 3.66769 12.1515 4.01306 11.7985C4.39155 11.4116 4.976 11.0289 5.75696 10.6911C6.25021 10.4779 6.8082 10.2885 7.419 10.1292ZM9.30032 8.24815C10.1609 8.13913 11.0669 8.08137 11.9996 8.08137C12.9336 8.08137 13.8407 8.13929 14.7023 8.24858C14.5431 7.63835 14.3538 7.08086 14.1407 6.58801C13.8031 5.80705 13.4203 5.2226 13.0335 4.84411C12.6606 4.4793 12.3214 4.33885 12.0263 4.33137L12.0014 4.33133L11.9761 4.33137C11.6811 4.33886 11.3419 4.47932 10.969 4.84411C10.5821 5.2226 10.1994 5.80705 9.86173 6.58801C9.64869 7.08074 9.45948 7.63809 9.30032 8.24815ZM16.5836 10.1301C16.6927 10.9911 16.7505 11.8975 16.7505 12.8307C16.7505 13.7639 16.6927 14.6703 16.5836 15.5312C17.1931 15.3722 17.7499 15.1831 18.2422 14.9702C19.0232 14.6326 19.6077 14.2498 19.9862 13.8629C20.3613 13.4794 20.4992 13.1316 20.4992 12.8307C20.4992 12.5298 20.3613 12.182 19.9862 11.7985C19.6077 11.4116 19.0232 11.0289 18.2422 10.6911C17.7499 10.4783 17.1931 10.2892 16.5836 10.1301ZM14.7023 17.4128C13.8407 17.5221 12.9336 17.58 11.9996 17.58C11.0669 17.58 10.1609 17.5222 9.30032 17.4132C9.45948 18.0233 9.64869 18.5806 9.86173 19.0733C10.1994 19.8543 10.5821 20.4388 10.969 20.8173C11.3525 21.1924 11.7003 21.3303 12.0012 21.3303C12.3021 21.3303 12.65 21.1924 13.0335 20.8172C13.4203 20.4388 13.8031 19.8543 14.1407 19.0733C14.3538 18.5805 14.5431 18.023 14.7023 17.4128ZM7.69311 17.1393C6.76016 16.9366 5.90633 16.669 5.16168 16.347C4.75227 16.17 4.36866 15.9735 4.01951 15.7576C4.87777 18.0982 6.73603 19.9564 9.07661 20.8144C8.85983 20.4643 8.66253 20.0795 8.48491 19.6686C8.16319 18.9245 7.89575 18.0714 7.69311 17.1393ZM16.3095 17.1385C17.2411 16.9359 18.0938 16.6686 18.8375 16.347C19.2488 16.1692 19.634 15.9717 19.9844 15.7547C19.1265 18.0968 17.2675 19.9563 14.9258 20.8146C15.1426 20.4644 15.3399 20.0795 15.5176 19.6686C15.8394 18.9243 16.1069 18.071 16.3095 17.1385ZM19.9838 9.90634C19.6336 9.68943 19.2485 9.49203 18.8375 9.31432C18.0938 8.99276 17.2411 8.72542 16.3095 8.52282C16.1069 7.59039 15.8394 6.73701 15.5176 5.99273C15.3402 5.58242 15.1431 5.19803 14.9267 4.84827C17.2675 5.70653 19.1258 7.56525 19.9838 9.90634ZM7.69311 8.52207C6.76016 8.72477 5.90632 8.99237 5.16168 9.31432C4.75248 9.49124 4.36906 9.68769 4.02005 9.90345C4.87844 7.56387 6.73604 5.70641 9.0757 4.84842C8.85927 5.19815 8.66228 5.58249 8.48491 5.99273C8.16319 6.73682 7.89575 7.58993 7.69311 8.52207Z" fill="currentColor"></path></g><defs><clipPath id="clip0_44_2502"><rect transform="translate(0 0.831055)" width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
            </div>)}
          {/* {((DiscoverSelection.size > 0) || (GeographiesSelection.size > 0)) && (
            isCollapsed ? (
              <div className='SelectedValuesCollapsed' onClick={handleSelected}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" strokeWidth="2">
                  <line x1="5" y1="8" x2="19" y2="8" strokeLinecap="round"></line>
                  <line x1="7" y1="12" x2="17" y2="12" strokeLinecap="round"></line>
                  <line x1="9" y1="16" x2="15" y2="16" strokeLinecap="round"></line>
                </svg>
              </div>
            ) : (
              <div className='SelectionUncollapsed'>
              <div className='SelectedValues' onClick={handleSelected}>
                <div className='Selectedsvg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" strokeWidth="2">
                  <line x1="5" y1="8" x2="19" y2="8" strokeLinecap="round"></line>
                  <line x1="7" y1="12" x2="17" y2="12" strokeLinecap="round"></line>
                  <line x1="9" y1="16" x2="15" y2="16" strokeLinecap="round"></line>
                </svg></div>
                <div className='SelectedValuesText'>Selected</div>
              </div>
              </div>
            )
          )} */}
        </div>
        <div className='lower-level-elements'>
          {isCollapsed && (
            <div className='FooterNavigationCollapsed'>
              <div className='SavedTagNavigation'>
                <div className='SavedTagNavigationIcon'>
                  <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8 5.13412C4.8 3.94119 5.76707 2.97412 6.96 2.97412H17.04C18.2329 2.97412 19.2 3.94119 19.2 5.13412V21.4541C19.2 21.7196 19.0539 21.9637 18.8197 22.0889C18.5856 22.2142 18.3015 22.2005 18.0806 22.0532L12.3994 18.2657C12.1575 18.1045 11.8425 18.1045 11.6006 18.2657L5.91939 22.0532C5.69845 22.2005 5.41437 22.2142 5.18027 22.0889C4.94615 21.9637 4.8 21.7196 4.8 21.4541V5.13412ZM6.96 4.41412C6.56236 4.41412 6.24 4.73648 6.24 5.13412V20.1088L10.8018 17.0676C11.5274 16.5838 12.4726 16.5838 13.1982 17.0676L17.76 20.1088V5.13412C17.76 4.73648 17.4376 4.41412 17.04 4.41412H6.96Z" fill="currentColor"></path></svg>
                </div>
              </div>
              <div className='SettingsNavigation'>
                <div className='SettingsNavigationIcon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
              </div>
            </div>
          )}
          <div className='Collapse-button-helper'>
            <div className='Collapse-button' >
              {isCollapsed ? (
                <div className='Collapse-button-icon' onClick={() => handleToggle(!isCollapsed)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" strokeWidth="2"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                </div>
              ) : (
                <div className='Footer-final'>
                  <div className='Emi-logo-2'>
                    <img src='/euromonitor-logo-white.svg' alt='emi-logo'></img>
                  </div>
                  <div className='SettingsFooterNavigationIcon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </div>
                  <div className='SavedTagFooterNavigation'>
                    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8 5.13412C4.8 3.94119 5.76707 2.97412 6.96 2.97412H17.04C18.2329 2.97412 19.2 3.94119 19.2 5.13412V21.4541C19.2 21.7196 19.0539 21.9637 18.8197 22.0889C18.5856 22.2142 18.3015 22.2005 18.0806 22.0532L12.3994 18.2657C12.1575 18.1045 11.8425 18.1045 11.6006 18.2657L5.91939 22.0532C5.69845 22.2005 5.41437 22.2142 5.18027 22.0889C4.94615 21.9637 4.8 21.7196 4.8 21.4541V5.13412ZM6.96 4.41412C6.56236 4.41412 6.24 4.73648 6.24 5.13412V20.1088L10.8018 17.0676C11.5274 16.5838 12.4726 16.5838 13.1982 17.0676L17.76 20.1088V5.13412C17.76 4.73648 17.4376 4.41412 17.04 4.41412H6.96Z" fill="currentColor"></path></svg>
                  </div>
                  <div className='Collapse-footer-button-icon' onClick={() => handleToggle(!isCollapsed)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" strokeWidth="2"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

