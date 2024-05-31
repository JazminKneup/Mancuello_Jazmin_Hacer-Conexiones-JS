document.addEventListener("DOMContentLoaded", function() {
    //  Sirve para cambiar el nombre del perfil
    function changeProfileName() {
        let newName = prompt("Enter the new name:", "Jane Doe");
        if (newName && newName.trim() !== "") {
            document.querySelector(".user-card h1").innerText = newName;
        }
    }

    // Esta funcion maneja las solicitudes de conexión
    function handleRequest(action, requestElement) {
        let requestCountBadge = document.getElementById("request-count");
        let requestCount = parseInt(requestCountBadge.innerText);
        
        // Asi disminuimos el contador de solicitudes
        requestCount--;
        requestCountBadge.innerText = requestCount;
        requestElement.remove();
        
        // Si se acepta la solicitud, aca se incrementa el contador de conexiones
        if (action === "accept") {
            let connectionCountBadge = document.getElementById("connection-count");
            let connectionCount = connectionCountBadge.innerText.includes("+") ? 500 : parseInt(connectionCountBadge.innerText);
            connectionCount++;
            connectionCountBadge.innerText = connectionCount > 500 ? "500+" : connectionCount;
        }
    }

    //  Aca asociamosel  evento click al enlace de editar perfil
    document.getElementById("edit-profile").addEventListener("click", function(event) {
        event.preventDefault();
        changeProfileName();
    });

    // Asi asociamos el eventos click a los botones de aceptar y rechazar solicitudes
    let acceptButtons = document.querySelectorAll(".accept-btn");
    let declineButtons = document.querySelectorAll(".decline-btn");

    acceptButtons.forEach(button => {
        button.addEventListener("click", function() {
            handleRequest("accept", this.closest(".card-list-item"));
        });
    });

    declineButtons.forEach(button => {
        button.addEventListener("click", function() {
            handleRequest("decline", this.closest(".card-list-item"));
        });
    });
});
