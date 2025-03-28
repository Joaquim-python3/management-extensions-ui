export function getData(){
    const dataUrl = "/public/data.json";
    return fetch(dataUrl);
}