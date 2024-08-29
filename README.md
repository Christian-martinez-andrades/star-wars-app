# STAR WARS APP

## Despliegue local por terminal

Para ejecutar la aplicación localmente sin utilizar Docker, sigue estos pasos:

1. **Abrir Terminales:**
   - Abre dos terminales (o utiliza el terminal integrado en Visual Studio Code), cada uno en la carpeta raíz de cada parte del proyecto.

2. **Iniciar el Frontend:**
   - En la terminal del frontend, ejecuta el siguiente comando:
     ```bash
     ng serve
     ```
     Este comando compilará el frontend usando el archivo `environment.ts` y lo desplegará en el puerto `4200`.

3. **Iniciar el Backend:**
   - En la terminal del backend, ejecuta los siguientes comandos:
     ```bash
     mvn clean install
     ```
     Este comando compilará el proyecto utilizando el perfil `LOCAL`. Luego, ejecuta:
     ```bash
     java -jar ./target/StarWarsBack-0.0.1.jar
     ```
     Esto iniciará el backend en el puerto `8081`. Si estás usando Visual Studio Code y el entorno Java está configurado, puedes hacer clic derecho en el archivo `StarWarsBackApplication.java` y seleccionar `Run Java`.

Una vez completados estos pasos, la aplicación será accesible en [http://localhost:4200](http://localhost:4200).

## Despliegue con Docker

Para desplegar la aplicación utilizando Docker, sigue estos pasos:

1. **Ubicación del Archivo `docker-compose.yml`:**
   - Ve a la carpeta donde se encuentran ambas partes de la aplicación y el archivo `docker-compose.yml`.

2. **Abrir un Terminal:**
   - Abre una terminal en esa ubicación.

3. **Ejecutar Docker Compose:**
   - Ejecuta uno de los siguientes comandos:
     ```bash
     docker-compose up --build
     ```
     o
     ```bash
     docker-compose up -d --build
     ```
     El primer comando muestra los logs en el terminal y detiene el contenedor al cerrarse, mientras que el segundo ejecuta los contenedores en segundo plano.

4. **Construcción y Despliegue:**
   - Docker construirá las imágenes de ambos servicios y desplegará los contenedores.

5. **Configuración del Entorno:**
   - El frontend se desplegará con el entorno `environment.prod` y el backend con el perfil `DOCKER`.

Una vez completados estos pasos, la aplicación será accesible en [http://localhost:6969](http://localhost:6969), tal como se indica en el apartado de Acceptance Criteria.

## Ejecución de tests
1. **Backend**
En una terminal dentro de la carpeta del proyecto de backend realizar el comando
     ```bash
     mvn test
     ```
2. **Frontend**
En una terminal dentro de la carpeta del proyecto de frontend realizar el comando
     ```bash
     ng test
     ```     
Además, para ejecutar los test de cypress se debe ejecutar el comando
     ```bash
     npx cypress run
     ```  
Por defecto está configurado para que apunte a la ruta [http://localhost:4200](http://localhost:4200), para configurarlo y que apunte a [http://localhost:6969](http://localhost:6969) por si se está usando docker, bastaría con modificar el archivo cypress.config.ts cambiando el puerto de la url.

## Trabajo Futuro y Mejoras

Aquí se detallan algunas posibles mejoras para la aplicación:

1. **Unificación de Estilos y ordenación:**
   - Unificar los estilos de las tablas para reducir la repetición y el costo de mantenimiento y compilación.
   - Crear carpetas y módulo shared para meter lo que sea compartido y reutilizable en la aplicación así como agrupar todas las componentes en una carpeta components al igual que están los servicios, pipes y directivas.

2. **Mejora del Rendimiento y Flexibilidad:**
   - Actualmente, los datos del endpoint `https://swapi.dev/api` se almacenan en una base de datos temporal H2 para mejorar la velocidad y flexibilidad. Sin embargo, esto plantea problemas como la necesidad de mantener los datos actualizados y la duplicación de recursos en entornos de alta disponibilidad. Posibles soluciones incluyen:
     - Implementar un proceso batch para actualizar los datos periódicamente. En el caso de mantenerse actualizada
     - Utilizar una base de datos compartida como PostgreSQL para ambientes con múltiples servidores.

3. **Base de Datos Propia y Fuentes de Datos:**
   - Partiendo de la mejora anterior y suponiendo como nueva mejora ampliar los tipos de datos a mostrar se podría realizar una base de datos propia que se nutra de otras fuentes ya sea por vía api como `https://swapi.dev/api` o https://starwars-visualguide.com/assets/img` para las imágenes,vía scrapping , etc. De esta manera se obtiene una base de datos más robusta, coherente y autosuficiente, sin necesidad de elementos externos para dar soporte a toda su funcionalidad. 

Estas mejoras añadirán mayor versatilidad a la aplicación y ofrecerán una experiencia de usuario más rica y dinámica.
