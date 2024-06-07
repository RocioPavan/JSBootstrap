document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Para obetener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    // Valida que el campo este completo
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }
  
    // Mensaje de confirmacion
    const mensajeConfirmacion = `Gracias ${nombre}, su consulta ha sido enviada correctamente.`;
    alert(mensajeConfirmacion);
  
    // Limpia el fromulario
    document.getElementById('consultaForm').reset();
  });
  