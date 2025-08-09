<h1> 🎯 Juego de Amigo Secreto</h1>

- Estado del proyecto: Finalizado

## 📌 Descripción  
Este proyecto es un juego interactivo de **Amigo Secreto** desarrollado con **HTML**, **CSS** y **JavaScript puro**.  
Permite ingresar nombres, listarlos y realizar un sorteo aleatorio para elegir un ganador, eliminándolo de la lista para evitar repeticiones.  
Ideal para reuniones, fiestas y dinámicas de grupo, fácil de usar desde cualquier navegador.

---

## ⚙️ Instalación  
1. **Clonar o descargar** este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git

2. Asegúrate de tener los siguientes archivos y carpetas:

  index.html → estructura de la página

  style.css → estilos visuales

  app.js → lógica del juego

  Carpeta assets/ con las imágenes necesarias

 3. Abrir el archivo index.html en tu navegador preferido.

🚀 Uso
   Escribe un nombre en el campo de texto.

   Presiona el botón "Añadir" para agregarlo a la lista.

   Repite para todos los participantes.

   Haz clic en "Sortear amigo" para elegir un ganador al azar.

  El nombre sorteado se mostrará en pantalla y desaparecerá de la lista.

Ejemplo de código clave:

const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];
amigos.splice(indiceAleatorio, 1); // Elimina al ganador de la lista

🤝 Contribución

Si quieres mejorar el proyecto:

  1.Haz un fork del repositorio.

  2.Crea una nueva rama para tus cambios:

    git checkout -b mi-mejora

  3. Realiza las modificaciones y confirma los cambios:
  
    git commit -m "Mejora en el juego"

  4. Envía un pull request para revisión.

👏 Créditos
   Desarrollado por: Kevin Mateo Herrera Olivar

   Inspiración: Dinámica clásica de Amigo Secreto

   Tecnologías: HTML5, CSS3, JavaScript ES6

📄 Licencia
Este proyecto está bajo la licencia MIT.
Puedes usarlo, modificarlo y compartirlo libremente, siempre dando el crédito correspondiente.



