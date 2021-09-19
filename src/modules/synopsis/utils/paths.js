/**
 * Function to extract link data from element collection

 * @param {*} elements Synopsis element collection
 * @returns 
 */
export function extractLinkData(elements) {
  return elements.map((el) => ({
    path: el.id,
    name: el.name.text,
    color: el.color,
  }));
}
