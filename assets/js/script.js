const habilidades = [
    {
      id:1,
      name: "Excel Avanzado",
      description: "Manejo avanzado de Excel, incluyendo tablas dinámicas, macros, Power Query y automatización de procesos para la generación de reportes y análisis de datos.",
      img:"/assets/img/img_iconos/excel.png"
    },
    {
      id:2,
      name: "G-Sheet",
      description: "Experiencia en la creación y automatización de reportes mediante funciones avanzadas, Querys y Apps Script, optimizando procesos y facilitando la toma de decisiones.",
      img:"/assets/img/img_iconos/sheets.png"
    },
    {
      id:3,
      name: "Looker Studio",
      description: "Desarrollé dashboards interactivos para la visualización de datos clave, KPIs y análisis, permitiendo una comprensión clara de indicadores y facilitando la toma de decisiones estratégicas.",
      img:"/assets/img/img_iconos/looker.png"
    },
    {
      id:4,
      name: "AppSheet",
      description: "Automatización de flujos de trabajo mediante la creación de aplicaciones de gestión en AppSheet, optimizando la administración de datos y procesos empresariales.",
      img:"/assets/img/img_iconos/appsheet.png"
    },
    {
      id:5,
      name: "HTML",
      description: "Desarrollo de estructuras web utilizando HTML, creando sitios web estáticos que se ajustan a estándares modernos de diseño y accesibilidad.",
      img:""
    },
    {
      id:6,
      name: "CSS",
      description: "Estilización de sitios web con CSS, aplicando diseño responsivo y personalización avanzada para mejorar la experiencia del usuario.",
      img:""
    },
    {
      id:7,
      name: "JavaScript",
      description: "Desarrollo de funcionalidades dinámicas en sitios web mediante JavaScript, incluyendo manipulación del DOM y creación de interacciones avanzadas.",
      img:""
    },
    {
      id:8,
      name: "Bootstrap",
      description: "Uso de Bootstrap para la creación de sitios web responsivos y con diseño atractivo, utilizando su sistema de grid y componentes predefinidos.",
      img:""
    },
    {
      id:9,
      name: "React",
      description: "Desarrollo de aplicaciones web interactivas y escalables utilizando React, incluyendo el uso de componentes, hooks y gestión de estado.",
      img:""
    },
    {
      id:1,
      name: "GIT",
      description: "Control de versiones utilizando Git, permitiendo la gestión eficiente de proyectos, seguimiento de cambios y colaboración con equipos.",
      img:""
    },
    {
      id:10,
      name: "GitHub",
      description: "Uso de GitHub como plataforma de control de versiones y colaboración, gestionando repositorios y facilitando el trabajo en equipo mediante ramas y pull requests.",
      img:""
    },
    {
      id:11,
      name: "SQL",
      description: "Manejo de bases de datos relacionales mediante consultas SQL, permitiendo la extracción, manipulación y análisis de datos para la creación de reportes y análisis de datos.",
      img:""
    },
    {
      id:11,
      name: "Apps Script",
      description: "Automatización de procesos en Google Sheets y otros productos de Google mediante Apps Script, optimizando tareas repetitivas y mejorando la productividad.",
      img:""
    },
    {
      id:12,
      name: "Atención al cliente",
      description: "Experiencia en atención al cliente, brindando soporte y resolución de problemas de manera efectiva, asegurando la satisfacción del cliente y una comunicación clara.",
      img:""
    },
    {
      id:13,
      name: "Inglés Intermedio",
      description: "Habilidad para comunicarse de manera efectiva en inglés en un entorno laboral, incluyendo lectura de documentación técnica, correos y comunicación básica con clientes.",
      img:""
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