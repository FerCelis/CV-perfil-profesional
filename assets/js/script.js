const habilidades = [
    {
      id:1,
      name: "Excel Avanzado",
      description: "Manejo avanzado de Excel, incluyendo tablas dinámicas, macros, Power Query y automatización de procesos para la generación de reportes y análisis de datos.",
      img:"./assets/img/img_iconos/excel.png"
    },
    {
      id:2,
      name: "G-Sheet",
      description: "Experiencia en la creación y automatización de reportes mediante funciones avanzadas, Querys y Apps Script, optimizando procesos y facilitando la toma de decisiones.",
      img:"./assets/img/img_iconos/sheets.png"
    },
    {
      id:3,
      name: "Looker Studio",
      description: "Desarrollé dashboards interactivos para la visualización de datos clave, KPIs y análisis, permitiendo una comprensión clara de indicadores y facilitando la toma de decisiones estratégicas.",
      img:"./assets/img/img_iconos/looker.png"
    },
    {
      id:4,
      name: "AppSheet",
      description: "Automatización de flujos de trabajo mediante la creación de aplicaciones de gestión en AppSheet, optimizando la administración de datos y procesos empresariales.",
      img:"./assets/img/img_iconos/appsheet.png"
    },
    {
      id:5,
      name: "HTML",
      description: "Desarrollo de estructuras web utilizando HTML, creando sitios web estáticos que se ajustan a estándares modernos de diseño y accesibilidad.",
      img:"./assets/img/img_iconos/html.png"
    },
    {
      id:6,
      name: "CSS",
      description: "Estilización de sitios web con CSS, aplicando diseño responsivo y personalización avanzada para mejorar la experiencia del usuario.",
      img:"./assets/img/img_iconos/css.png"
    },
    {
      id:7,
      name: "JavaScript",
      description: "Desarrollo de funcionalidades dinámicas en sitios web mediante JavaScript, incluyendo manipulación del DOM y creación de interacciones avanzadas.",
      img:"./assets/img/img_iconos/js.png"
    },
    {
      id:8,
      name: "Bootstrap",
      description: "Uso de Bootstrap para la creación de sitios web responsivos y con diseño atractivo, utilizando su sistema de grid y componentes predefinidos.",
      img:"./assets/img/img_iconos/bootstrap.png"
    },
    {
      id:9,
      name: "React",
      description: "Desarrollo de aplicaciones web interactivas y escalables utilizando React, incluyendo el uso de componentes, hooks y gestión de estado.",
      img:"./assets/img/img_iconos/react.png"
    },
    {
      id:1,
      name: "GIT",
      description: "Control de versiones utilizando Git, permitiendo la gestión eficiente de proyectos, seguimiento de cambios y colaboración con equipos.",
      img:"./assets/img/img_iconos/git.png"
    },
    {
      id:10,
      name: "GitHub",
      description: "Uso de GitHub como plataforma de control de versiones y colaboración, gestionando repositorios y facilitando el trabajo en equipo mediante ramas y pull requests.",
      img:"./assets/img/img_iconos/github.png"
    },
    {
      id:11,
      name: "SQL",
      description: "Manejo de bases de datos relacionales mediante consultas SQL, permitiendo la extracción, manipulación y análisis de datos para la creación de reportes y análisis de datos.",
      img:"./assets/img/img_iconos/sql.png"
    },
    {
      id:11,
      name: "Apps Script",
      description: "Automatización de procesos en Google Sheets y otros productos de Google mediante Apps Script, optimizando tareas repetitivas y mejorando la productividad.",
      img:"./assets/img/img_iconos/google-apps-script.png"
    },
    {
      id:12,
      name: "Atención al cliente",
      description: "Experiencia en atención al cliente, brindando soporte y resolución de problemas de manera efectiva, asegurando la satisfacción del cliente y una comunicación clara.",
      img:"./assets/img/img_iconos/atencion_al_cliente.png"
    },
    {
      id:13,
      name: "Inglés Intermedio",
      description: "Habilidad para comunicarse de manera efectiva en inglés en un entorno laboral, incluyendo lectura de documentación técnica, correos y comunicación básica con clientes.",
      img:"./assets/img/img_iconos/ingles.png"
    }
] // fin array skills

// Variable para mantener el popover actual
let popoverActual = null;

// Función que actualiza el contenido del popover, usando flexbox para la imagen y el texto
function actualizarPopover(event) {
  const elemento = event.target; // Elemento que disparó el evento (el botón)
  const botonTexto = elemento.textContent.trim(); // Obtener el texto del botón

  // Buscar la habilidad en el array por el campo 'name' que contenga el texto del botón
  const habilidadEncontrada = habilidades.find(habilidad => habilidad.name.includes(botonTexto));

  if (habilidadEncontrada) {
    // Crear el contenido HTML que incluye la imagen y la descripción con flexbox
    const contenidoPopover = `
      <div style="display: flex; align-items: flex-start; gap: 10px;">
        <img src="${habilidadEncontrada.img}" alt="${habilidadEncontrada.name}" style="width: 80px; height: auto; border-radius: 8px;">
        <p style="text-align: justify; margin: 0;">${habilidadEncontrada.description}</p>
      </div>
    `;

    // Asignar el contenido dinámico al popover
    elemento.setAttribute('data-bs-content', contenidoPopover);
    elemento.setAttribute('data-bs-title', habilidadEncontrada.name); // Título dinámico

    // Destruir el popover anterior si hay uno activo
    if (popoverActual) {
      popoverActual.dispose(); // Elimina el popover anterior
    }

    // Inicializar el nuevo popover con la opción HTML habilitada
    popoverActual = new bootstrap.Popover(elemento, {
      trigger: 'focus',
      placement: 'right',
      html: true,  // Permitir contenido HTML en el popover
      customClass: 'custom-popover',
      container: 'body'
    });

    // Mostrar el nuevo popover
    popoverActual.show();
  }
}

// Función para renderizar los botones con estructura personalizada
function renderizarBotones() {
  const contenedor = document.getElementById('habilidadesContainer');

  // Iterar sobre el array de habilidades para crear un botón para cada una
  habilidades.forEach(habilidad => {
    // Crear el botón
    const boton = document.createElement('button');
    
    // Asignar la clase personalizada 'custom-button' y otras clases de Bootstrap
    boton.className = 'custom-button btn-sm'; // Clase personalizada y clases de Bootstrap
    
    boton.textContent = habilidad.name; // Asignar el nombre de la habilidad como texto del botón
    boton.setAttribute('data-bs-toggle', 'popover'); // Atributo para el popover
    boton.setAttribute('data-bs-placement', 'right'); // Colocar el popover a la derecha
    boton.setAttribute('data-bs-custom-class', 'custom-popover'); // Clase personalizada del popover
    boton.setAttribute('data-bs-title', habilidad.name); // Título inicial del popover
    boton.setAttribute('data-bs-content', ''); // El contenido se llenará dinámicamente con el click

    // Añadir evento click para actualizar el contenido del popover
    boton.addEventListener('click', actualizarPopover);

    // Insertar el botón en el contenedor
    contenedor.appendChild(boton);
  });
}

// Llamar a la función para renderizar los botones cuando cargue la página
renderizarBotones();

// Función para crear el slider
function crearSlider(habilidades) {
  const contenedor = document.getElementById("slide-track");
  
  // Duplicar el array de habilidades para un efecto continuo
  const habilidadesDuplicadas = [...habilidades, ...habilidades];

  for (let habilidad of habilidadesDuplicadas) {
    const slideHTML = `
      <div class="slide">
        <img src="${habilidad.img}" alt="${habilidad.alt}">
      </div>`;
    contenedor.innerHTML += slideHTML;
  }
}

// Asegurarse de que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  crearSlider(habilidades); // Llamar a la función pasando el array
});


//darkmode
const toggleButton = document.getElementById('darkModeToggle');
  const body = document.documentElement;

  toggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', newTheme);
    
    // Cambiar el icono según el tema
    const icon = toggleButton.querySelector('i');
    if (newTheme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.style.color = '#fff';
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      icon.style.color = '#555';
    }
  });

//   //chat bot
//   (function() {
//     var threadID = null;
//     var backendURL = "https://bublebackend-fernandocelisa.replit.app";
//     var typingIndicatorInterval = null;
//     var apiKey = "mi_llave_de_protección"; // Añadir la clave API

//     // Añadir meta tag para prevenir el zoom en dispositivos móviles
//     var metaViewport = document.createElement('meta');
//     metaViewport.name = "viewport";
//     metaViewport.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
//     document.head.appendChild(metaViewport);

//     // Crear burbuja flotante
//     var chatBubble = document.createElement('div');
//     chatBubble.className = 'chat-bubble';
//     chatBubble.innerHTML = '<i class="fa-solid fa-robot fa-xl" style="color: #f1f2f3;"></i>';
//     document.body.appendChild(chatBubble);

//     // Crear contenedor de chat
//     var chatContainer = document.createElement('div');
//     chatContainer.className = 'chat-container';
//     chatContainer.innerHTML = `
//   <div class="chat-content-vertical">
//       <div class="chat-header">
//           <button class="chat-close" id="chatClose">x</button>
//       </div>
//       <div class="chat-bot-info">
//           <i class="fa-solid fa-robot fa-xl" style="color: #f1f2f3;"></i>
//           <span class="chat-bot-title">   Hola soy FerBot👋</span>
//           <span class="chat-bot-subtitle">Asistente de IA de Fernando Celis</span>
//       </div>
//       <div class="chat-messages" id="chatMessages"></div>
//       <div class="chat-input-container">
//           <button id="startConversationButton">Iniciar conversación</button>
//           <input type="text" id="chatInput" placeholder="Escribe un mensaje..." style="display: none;">
//           <button id="sendButton" style="display: none;">Enviar</button>
//       </div>
//   </div>
// `;
//     document.body.appendChild(chatContainer);

//     var chatMessages = document.getElementById('chatMessages');
//     var chatInput = document.getElementById('chatInput');
//     var sendButton = document.getElementById('sendButton');
//     var startConversationButton = document.getElementById('startConversationButton');
//     var chatClose = document.getElementById('chatClose');

//     // Mostrar/ocultar chat
//     chatBubble.addEventListener('click', function() {
//         chatContainer.style.display = 'flex';
//         chatBubble.style.display = 'none';
//         if (!threadID) {
//             showStartConversationButton();
//         } else {
//             resetChat();
//         }
//     });

//     chatClose.addEventListener('click', function() {
//         chatContainer.style.display = 'none';
//         chatBubble.style.display = 'flex';
//         threadID = null;  // Resetear threadID
//         chatMessages.innerHTML = '';  // Limpiar mensajes del chat
//         showStartConversationButton();
//     });

//     startConversationButton.addEventListener('click', startConversation);

//     // Enviar mensaje
//     sendButton.addEventListener('click', sendMessage);
//     chatInput.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') sendMessage();
//     });

//     function showStartConversationButton() {
//         startConversationButton.style.display = 'block';
//         chatInput.style.display = 'none';
//         sendButton.style.display = 'none';
//     }

//     function showChatInput() {
//         startConversationButton.style.display = 'none';
//         chatInput.style.display = 'block';
//         sendButton.style.display = 'block';
//     }

//     function startConversation() {
//         console.log("Iniciando conversación...");
//         startConversationButton.disabled = true; // Deshabilitar el botón
//         startConversationButton.classList.add('button-disabled'); // Añadir clase de deshabilitado

//         // Añadir efecto de carga
//         startConversationButton.innerHTML = 'Iniciando...';

//         fetch(`${backendURL}/start?platform=Web`, {
//             method: 'GET',
//             headers: {
//                 'X-API-KEY': apiKey // Añadir la clave API a los encabezados
//             }
//         })
//             .then(response => {
//                 console.log("Respuesta de /start:", response);
//                 if (!response.ok) throw new Error("Error al obtener el thread_id");
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Datos obtenidos de /start:", data);
//                 threadID = data.thread_id;
//                 addMessageToChat('Asistente', 'Este bot fue creado como parte de un experimento. Puede proporcionarte información sobre mi. ¡Hazle una pregunta para empezar!😊');
//                 showChatInput();
//                 setTimeout(() => {
//                     startConversationButton.disabled = false; // Habilitar el botón después de 3 segundos
//                     startConversationButton.classList.remove('button-disabled'); // Remover clase de deshabilitado
//                     startConversationButton.innerHTML = 'Iniciar conversación'; // Restablecer texto del botón
//                 }, 3000);
//             })
//             .catch(error => {
//                 console.error('Error al iniciar la conversación:', error);
//                 addMessageToChat('Error', 'No se pudo iniciar la conversación. Posiblemente el backend esté deconectado, contactate con Fernando.');
//                 startConversationButton.disabled = false; // Habilitar el botón en caso de error
//                 startConversationButton.classList.remove('button-disabled'); // Remover clase de deshabilitado
//                 startConversationButton.innerHTML = 'Iniciar conversación'; // Restablecer texto del botón
//             });
//     }

//     function resetChat() {
//         // Reiniciar el chat al mensaje predeterminado de bienvenida
//         chatMessages.innerHTML = '';
//         addMessageToChat('Asistente', '¿En qué te puedo servir? 😊');
//     }

//     function sendMessage() {
//         var message = chatInput.value.trim();
//         if (!message || !threadID) return;

//         addMessageToChat('Tú', message);

//         chatInput.value = '';

//         startTypingIndicator();

//         console.log("Enviando mensaje al backend:", message);
//         fetch(`${backendURL}/chat`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-API-KEY': apiKey // Añadir la clave API a los encabezados
//             },
//             body: JSON.stringify({
//                 thread_id: threadID,
//                 message: message
//             })
//         })
//             .then(response => {
//                 console.log("Respuesta de /chat:", response);
//                 if (!response.ok) throw new Error("Error al enviar el mensaje");
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Datos obtenidos de /chat:", data);
//                 stopTypingIndicator();
//                 addMessageToChat('Asistente', data.response);
//             })
//             .catch(error => {
//                 console.error('Error al obtener respuesta:', error);
//                 stopTypingIndicator();
//                 addMessageToChat('Error', 'No se pudo obtener respuesta.');
//             });
//     }

//     function startTypingIndicator() {
//         var typingIndicator = document.createElement('div');
//         typingIndicator.className = 'message-bubble assistant-message typing-indicator';

//         // Agregar imagen para el asistente
//         var icon = document.createElement('i');
//         icon.className = 'fa-solid fa-robot p-1';
//         typingIndicator.appendChild(icon);

//         var typingText = document.createElement('div');
//         typingText.className = 'message-text';
//         typingText.innerHTML = 'Escribiendo...';
//         typingIndicator.appendChild(typingText);

//         chatMessages.appendChild(typingIndicator);
//         chatMessages.scrollTop = chatMessages.scrollHeight;

//         typingIndicatorInterval = setInterval(() => {
//             if (typingText.innerHTML.endsWith('...')) {
//                 typingText.innerHTML = 'Escribiendo';
//             } else {
//                 typingText.innerHTML += '.';
//             }
//         }, 500);
//     }

//     function stopTypingIndicator() {
//         clearInterval(typingIndicatorInterval);
//         typingIndicatorInterval = null;

//         var typingIndicators = chatMessages.querySelectorAll('.typing-indicator');
//         typingIndicators.forEach(function(indicator) {
//             indicator.remove();
//         });
//     }

//     function addMessageToChat(sender, message) {
//         var typingIndicator = chatMessages.querySelector('.typing-indicator');
//         if (typingIndicator) typingIndicator.remove();

//         var messageWrapper = document.createElement('div');
//         messageWrapper.className = sender === 'Tú' ? 'message-wrapper user-message' : 'message-wrapper assistant-message';

//         var messageElement = document.createElement('div');
//         messageElement.className = 'message-bubble';

//         if (sender !== 'Tú') {
//             // Agregar imagen para el asistente
//             var icon = document.createElement('i');
//             icon.className = 'fa-solid fa-robot p-1'; // Añadir las clases de Font Awesome
//             messageElement.appendChild(icon);
//         }

//         var messageText = document.createElement('div');
//         messageText.className = 'message-text';
//         messageText.innerHTML = `${marked.parse(message)}`;
//         messageElement.appendChild(messageText);

//         messageWrapper.appendChild(messageElement);
//         chatMessages.appendChild(messageWrapper);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
// })();
