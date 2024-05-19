// auth.js
export const auth = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        if (exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            return false;
        }
    } catch (e) {
        localStorage.removeItem('token');
        return false;
    }

    return true;
};