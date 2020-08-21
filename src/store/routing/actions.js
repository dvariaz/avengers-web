import { SET_CURRENT_SECTION } from './reducers.js';

export const setCurrentSection = (section) => {
    //La seccion es enviada como un pathname
    let sectionName = section.split('/')[1];
    
    return({
        type: SET_CURRENT_SECTION,
        payload: { section: sectionName }
    });
}