function actualizarTiempo() {
    const ahora = new Date();
    document.getElementById('fecha').textContent = ahora.toLocaleDateString();
    document.getElementById('hora').textContent = ahora.toLocaleTimeString();
}

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            document.getElementById('ubicacion').textContent = 
                `Ubicación: Lat ${lat}, Lon ${lon}`;
        }, () => {
            document.getElementById('ubicacion').textContent = "Ubicación denegada.";
        });
    } else {
        document.getElementById('ubicacion').textContent = "Geolocalización no soportada.";
    }
}

// Actualizar hora cada segundo
setInterval(actualizarTiempo, 1000);
actualizarTiempo();
obtenerUbicacion();