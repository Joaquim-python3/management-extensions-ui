export function getData(){
    const dataUrl = "/data.json";
    return fetch(dataUrl);
}