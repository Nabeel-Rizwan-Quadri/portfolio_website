 export async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    
    return users;
 }