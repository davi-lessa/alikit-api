export function generateProductURLFromId(id: string){
    if(!id) return "";
    return `https://pt.aliexpress.com/item/${id}.html`
}