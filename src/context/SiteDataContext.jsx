import { createContext, useContext } from "react";
import siteData from "../data/data.json"; 

const SiteDataContext = createContext();
export const SiteDataProvider = ({ children }) => {
    return (
        <SiteDataContext.Provider value={siteData}>
            {children}
        </SiteDataContext.Provider>
    );
};
export const useSiteData = () => useContext(SiteDataContext);
