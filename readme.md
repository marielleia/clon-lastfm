# Proyecto last.fm

## Descripción

Generaremos un fake de la web  **[last.fm](https://www.last.fm/home)**, web de playlists de canciones. El resultado se deberá parecer al que se muestra a continuación:

![Lastfm](https://i.imgur.com/W6lRsdO.gif)


## Instrucciones

### Pasos que tienes que seguir para entregar el ejercicio:

1. Realiza un fork del repositorio.
2. Clona __tu__ repositorio a tu máquina local.
3. Guarda los ficheros modificados:
    - `git add .`
   _Puedes usar un código de las historias de usuario para identificar los commits
    - `git commit -m 'us #1'`
4. Sube los cambios al repositorio:
    - `git push`
5. Genera una __gh-page__ y envía la url vía slack.

### DATOS

Las canciones se encuentran dentro del fichero `music.json` (**-Este fichero no es necesario tocarlo-**). Fichero con las 50 canciones más escuchadas la semana pasada.

El fichero tendrás que cargarlo vía `fetch()`.

El formato del fichero es el siguiente:

```json
[
    {
        "name": "The Less I Know the Better",
        "duration": "0",
        "listeners": "439958",
        "mbid": "",
        "url": "https://www.last.fm/music/Tame+Impala/_/The+Less+I+Know+the+Better",
        "artist": {
            "name": "Tame Impala",
            "mbid": "63aa26c3-d59b-4da4-84ac-716b54f1ef4d",
            "url": "https://www.last.fm/music/Tame+Impala"
        },
        "@attr": {
            "rank": "0"
        },
        "genre": "reggae"
    },
    ...
]
  ```

### HTML

Clona la misma estructura que aparece en la animación: header, cuadros, menú, listado (éste último se cargará dinámicamente según la opción seleccionada)

### Estilos
Presta mucha atención a los estilos que se están aplicando:

- Cada estilo de música tiene un fondo de color, imagen y filtro (se facilitan en la hoja de estilos);
- El logo del título se facilita en la hoja de estilos.
- La lista no debe aparecer hasta que no se cargue la página. Mira la alternancia del fondo en cada una de las canciones.
- Las canciones aparecen numeradas según su posición (usa la propiedad `step-counter` para pintar el número).

### USER'STORIES

como usuario
QUIERO ver un listado de todas las canciones
cuando cargo la página
QUIERO ver un listado de todas las canciones
cuando clico la opción overview
QUIERO ver un listado de las diez canciones más escuchadas
cuando clico la opción "Top 10 listened"
QUIERO ver un listado con las canciones del artista más escuchado.
cuando clico la opción The Biggest
QUIERO ver un listado de canciones del género rock
cuando clico la opción rock
QUIERO ver un listado de canciones del género hip-hop
cuando clico la opción hip-hop
QUIERO ver un listado de canciones del género indie
cuando clico la opción indie
QUIERO ver un listado de canciones del género jazz
cuando clico la opción jazz
QUIERO ver un listado de canciones del género reggae
cuando clico la opción reggae
QUIERO que el elemento del menú cambie de estilo
cuando tiene el foco.
QUIERO que se abra la página de la canción
cuando hago click en el nombre de la canción
QUIERO que se abra la página del grupo
cuando hago click en el nombre del grupo

### Requisitos técnicos
Sentíos libres de utilizar todo lo que habéis aprendido hasta ahora.
Aunque deberíais utilizar las siguientes buenas prácticas:
- Procurad que las funciones de javaScript hagan una única cosa. Si necesitáis que una función realice varias tareas lo debería hacer llamando a otras funciones.
- Utilizad nombres semánticos para todo: variables, funciones, objetos, arrays, etc.
- Se pueden utilizar todos los ficheros, tanto de js como de css, que consideréis, si creeis que así mejorará el código y facilitará el desarrollo.
- Se deberá realizar testing de al menos una de las funciones.

### Desarrollo
Incorporad las historias de usuario al backlog del kanban (Trello).
Incorporad también otras historias que no sean de usuario pero que sean necesarias para el desarrollo. Ejemplo: pruebas de concepto (cosas nuevas), diseño general, desarrollo de estilos o el mismo análisis de las historias de usuario etc.
El desarrollo se realizará en dos sprints de unos 3-4 días cada uno.
Deberéis seleccionar las historias que creéis que podéis abordar por sprint.
Distribuid los roles scrum y las historias.
Una vez seleccionadas las historias habrá que analizar qué tareas serán necesarias para realizar cada una de ellas, e incorporarlas al kanban (es buena idea hacerlo mediante checklist).
Estas tareas se realizarán en la reunión de planificación del sprint.

Durante las dailies deberéis abordar el avance del desarrollo. Tareas completadas, pendientes, bloqueos, etc.
Las tareas se irán pasando de columna del kanban hasta el test y después el done.
Sólo habrá una tarea activa por coder en el DOING
Las tareas pasan al DONE cuando se han completado y testado.

El proyecto estará finalizado cuando termine el desarrollo y las pruebas de todas las historias de usuario.

# BONUS TRACK
Si os queda tiempo podéis implementar la carga de las canciones directamente desde la API de last.fm.

# RECURSOS
En el fichero style.scss se proporcionan

