const basicUrl :string= "https://jsonplaceholder.typicode.com/todos"
export const getTodos = async():Promise<any> => {
    const resp = await fetch(basicUrl);
    const data = await resp.json();
    return data
}