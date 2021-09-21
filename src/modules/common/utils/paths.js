/**
 * Function to extract link data from  collection

 * @param {*} items Link items collection
 * @returns 
 */
export function extractLinkData(items) {
  return items.map((item) => ({
    path: item.id,
    name: item.name.text,
    color: item.color,
  }));
}
