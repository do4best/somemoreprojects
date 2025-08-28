export function getUserDetails() {
    try {
        const userStr = localStorage.getItem('todoAppUser');
        if (userStr) return JSON.parse(userStr);
        const tokenStr = localStorage.getItem('token');
        if (tokenStr) {
            const tokenObj = JSON.parse(tokenStr);
            // Support common shapes: { user: {...} } or { username: '...' }
            if (tokenObj && typeof tokenObj === 'object') {
                if (tokenObj.user) return tokenObj.user;
                if (tokenObj.username) return { username: tokenObj.username };
            }
        }
        return null;
    } catch {
        return null;
    }
}