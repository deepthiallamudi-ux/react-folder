export function getResturants() {
    const data=localStorage.getItem('resturants');
    return data ? JSON.parse(data) : [];
}

export function saveResturants(resturants) {
    localStorage.setItem('resturants', JSON.stringify(resturants));
}