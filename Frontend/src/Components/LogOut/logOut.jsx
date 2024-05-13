export const handleLogout = async () => {
    const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include', // Importante para manejar las cookies de sesión
    });

    if (response.ok) {
        setIsLoggedIn(false);
        navigate('/login');
    } else {
        console.error('Failed to logout');
    }
}