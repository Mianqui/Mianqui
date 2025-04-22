   // Función para actualizar el contador de visitas
        function actualizarContador() {
            if (localStorage.getItem('visitas')) {
                // Si ya existe, incrementa el contador
                let visitas = parseInt(localStorage.getItem('visitas')) + 1;
                localStorage.setItem('visitas', visitas);
                document.getElementById('visitas').textContent = visitas;
            } else {
                // Si no existe, inicializa el contador en 1
                localStorage.setItem('visitas', 1);
                document.getElementById('visitas').textContent = 1;
            }
        }

        // Función para reiniciar el contador a 0
        function reiniciarContador() {
            localStorage.setItem('visitas', 0); // Reinicia a 0
            document.getElementById('visitas').textContent = 0; // Actualiza el valor en la tarjeta
            alert('¡Contador reiniciado a 0!'); // Opcional: Muestra un mensaje
        }

        // Llama a la función para actualizar el contador cuando la página se carga
        window.onload = actualizarContador;