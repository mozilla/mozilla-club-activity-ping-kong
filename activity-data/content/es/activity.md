---
title: Ping Kong
github: mozilla/mozilla-club-activity-ping-kong
image: pingkong.png
competencies:
    - {label: "Web Mechanics", type: "web-mechanics"}
    - {label: "Navigation", type: "navigation"}
---

## [Sección 1. Leyendo la Web](http://mozilla.github.io/webmaker-curriculum/WebLiteracyBasics-I/)

### Ping Kong

Hecho por [MOUSE](http://mouse.org/) incluyendo fotos, Chad Sansing, y mezclado para los Clubs por [Mozilla](https://webmaker.org/mentor).

Para muchos, "Internet" es un concepto abstracto y abrumador. Esta actividad desafía a los aprendices a **pensar concretamente sobre cómo internet se comunica con un computador.**

1-2 horas

### Preparación

**Completa el** [cuestionario previo a la actividad](http://goo.gl/forms/Uua6yKIy5E).

A continuación, **realiza la actividad de forma independiente** para familiarizarte con ella.

**Familiarízate** con los siguientes [términos](https://github.com/mozilla/webmaker-curriculum/wiki/Glossary):

1. Línea de comandos/Símbolo del sistema
2. Salto
3. Dirección del protocolo de internet (IP)
4. Proveedor de servicios de internet (ISP)
5. Servidor web
6. Red de área local (LAN)
7. Paquete
8. Ping
9. Router
10. Traceroute

**Imprime y recorta* los [signos de pista de obstáculos Ping Kong](http://www.mousesquad.org/files/u4/pingkongcards.png).

**Haz suficiente espacio** en la habitación para realizar una "pista de obstáculos". **Cuelga las tarjetas** etiquetadas “Mi computador” y “El sitio web” en lados opuestos de la habitación.

![Tarjetas Ping Kong](http://www.mousesquad.org/files/u4/pingkongcards.png)

---

10<br>min

### Introducción

Pregunta a los aprendices, *“¿Cómo se conectan a Internet?”*

Toma algunas ideas del grupo y luego explica lo siguiente:

![gráfico de internet](http://4b93n32qwvjj3ddn5w3yhffoas6.wpengine.netdna-cdn.com/wp-content/uploads/2013/03/internetvstheweb.jpg)

> "Internet" es un sistema de redes y la "Web" se encuentra en la cima de internet y provee una interfaz para ver e interactuar con la información almacenada en varios computadores en todo el mundo. Este breve artículo de Skillcrush explica aún más sobre la diferencia entre Internet y la Web.

Además explica que:

> En todo momento en que le pides al Internet hacer algo, ya sea ingresando una URL en un navegador o mirar un video en youtube, tu internet solicita realizar "saltos" a través de varios dispositivos de red, como routers, switches y servidores, en su camino desde tu computador al servidor del sitio web.

Mira el video de introducción para darle a los aprendices un poco más de contexto antes de iniciar la pista de obstáculos:

####Allí y de regreso: La historia de un paquete

[![Allí y de regreso: La historia de un paquete](http://img.youtube.com/vi/WwyJGzZmBe8/0.jpg)](http://www.youtube.com/watch?v=WwyJGzZmBe8)


---

15<br>min

### Interpretar la red

Forma pequeños grupos improvisados de 4-5 actores. Júntense y hagan una tormenta de ideas para actuar cómo funciona Internet. Piensen sobre cómo usar el espacio - pueden realizarlo en cualquier parte del lugar y moverse todo lo que lo deseen. Piensen sobre los materiales presentes y ocupar todo lo que pueda ser de ayuda para mostrar la red en acción.

Realicen las parodias para que todos las disfruten. Que los aplausos sean de todos para todos. ¡Ríanse especialmente en los mejores momentos de esta puesta en escena de la historia de la red!

---

5<br>min

###Preparar una pista de obstáculos

Dicho eso para entender este camino, realizaremos un **acto de ping/traceroute humano en una pista de obstáculos.**

Viajaremos desde un i) computador local a través de ii) una LAN a iii) Internet para llegar a iv) Google.com o el sitio web de tu elección.

![Imagen](https://farm9.staticflickr.com/8066/8232365693_d79ddb19f7_b.jpg)

Pídele al grupo **reunirse bajo el signo "Mi computador"** y solicita **tres voluntarios.**

Entrega a los tres voluntarios los signos etiquetados como **"Salto 1: Router local," "Salto 2: Proveedor de servicios de Internet" y "Salto 3: Router de la compañía del sitio web"** y diles que se dispersen en la habitación.

Explica que **los signos representan diferentes "saltos"** que una solicitud de Internet debe realizar antes de llegar al sitio web que un usuario está buscando. El **resto de los estudiantes** son paquetes de código de computadora que intenta llegar al sitio web en el otro extremo de la sala.

![Imagen](https://farm9.staticflickr.com/8350/8232367115_3662ebf154_b.jpg)

---

10<br>min

###Modelar la pista de obstáculos

**Elige uno de esos estudiantes "paquete" para actuar como modelo** para el resto del grupo antes de que se inicie la actividad.

Entrega a los aprendices el siguiente escenario

> Soy un computador y decido irar un video en YouTube. Después de que escribo la dirección web, mi computador convierte 'youtube.com' a código que todos los computadores pueden leer y lo divide en varios "paquetes" de internet. Este estudiante voluntario representa uno de esos paquetes.

![Imagen](https://farm9.staticflickr.com/8481/8233430584_ce59b4a546_b.jpg)

#### Salto 1: Router local

Solicita al estudiante de ejemplo caminar al "Salto 1: Router local” y explica:

> Primero, el paquete debe saltar a través de los dispositivos de la red local tales como routers, switches o modems en la construcción. Los dispositivos de la red local entonces envían al paquete a Internet.

#### Salto 2: Proveedor de servicios de internet

Pídele al estudiante caminar hasta el siguiente salto y explícalo:

> Después de que un paquete llega aquí, al proveedor de servicios de Internet, es enviado por a uno de los routers de YouTube.

#### Salto 3: Router de la compañía

> Una vez que el paquete atraviesa el router de YouTube, es enviado a un computador en los cuarteles de la compañía el cual enviará el video.

#### Sitio web

> Para que el video se reproduzca en mi computador, el computador de YouTube también convierte mi video en varios paquetes, los que viajan hasta mi computador por el mismo recorrido de dispositivos de red que atravesó para llegar a YouTube.

**Solicita al estudiante de ejemplo caminar de regreso a ti**, asegurándote de pausar en cada salto en el camino de regreso.

####Direcciones IP

Cuando el estudiante regrese, pregunta si alguien sabe cómo los dispositivos en cada salto saben exactamente a donde enviar un paquete. Si ninguno sabe, explica:

> ¡Usan direcciones IP! Cada dispositivo o computador en una red o en línea tiene una dirección IP (o "Protocolo de internet"). Es como una dirección de casa - y ayuda a los dispositivos a encontrarse y comunicarse. Las direcciones UP tienen 4 conjuntos de números en una cadena como esta: 172.168.3.12

####Entre saltos

Para hacer la pista de obstáculos más interesante, puedes colocar "espias del gobierno" entre saltos. [Este recurso de la EFF](https://www.eff.org/pages/tor-and-https) explica cómo terceros pueden interceptar datos entre saltos. Habla con tus aprendices sobre qué datos son protegidos, qué es vulnerable y para quien.

---

15<br>min

### ¡A la pista!

¡Ahora es tiempo de que todos prueben la pista de obstáculos!

**Explica a los estudiantes que todos son “paquetes”** intentando llegar a Google.com (o el sitio web de tu elección) para completar la solicitud de Internet de alguien. Ellos deben detenerse en cada "salto" antes de moverse al siguiente.

**Pero espera, ¡hay un giro!** Antes de que los paquetes puedan llegar de un salto al siguiente, deben completar un breve desafío planteado por un estudiante actuando como el salto. *Ejemplos: ¡Hacer 5 saltos de tijera!, cantar “Cumpleaños feliz”, etc.*

![Imagen](https://farm9.staticflickr.com/8342/8233430386_45a5aba09a_b.jpg)

Cuando el paquete completa el desafío del salto, el salto permitirá al paquete moverse a la siguiente ubicación hasta que el paquete llegue al "Sitio web".

¡Solicita a los paquetes formar una sola línea y moverse a través de la pista de obstáculos tan rápido como puedan! Puedes tener a alguien que cronometre cuánto toma a todos cruzar la pista y ver quién lo hace más rápido.

![Imagen](https://farm9.staticflickr.com/8207/8233430120_ea0c7fc7fa_b.jpg)

---

10<br>min

### Reflexión

Después de que todos los aprendices hayan completado la pista de obstáculos, muéstrales cuán rápido los paquetes son capaces de moverse a través de Internet en la vida real.

*Si no tienes una conexión a internet o estas corto de tiempo salta al ejercicio de la Utilidad de Ping.*

Realiza a los grupos algunas preguntas reflexivas como:

> * ¿Cuánto tiempo les tomo ir desde el computador a través de Internet al sitio web?
> * ¿Creen que un computador se meuve más rápido a través de Internet de lo que ustedes lo hicieron?
> * ¿Qué ocurre en Internet cuando escriben una dirección Web y aprietan Ir?
> * ¿Cuales son las 'partes' de Internet?
> * ¿Cómo lo hacen grandes cantidades de información para cruzar partes de pequeño ancho de banda en la red?
> * ¿Cual es la diferencia entre Internet y la World Wide Web?

Toma algunas de las conjeturas y luego explica que efectivamente se puede medir cuanto tiempo requiere una solicitud real usando la utilidad Ping del Símbolo del sistema (PC) o Terminal (Mac). O si no tienes conexión, simplemente explica lo que ocurriría.

	Ping es una función en los computadores que te permite revisar si el computador puede conectarse a otro computador en una red o en línea enviando un 'paquete' de datos y midiendo cuanto tiempo tarda en regresar.

![Imagen](https://farm9.staticflickr.com/8484/8233431352_d817e553fa_b.jpg)

Solicita a los estudiantes hacer conjeturas específicas sobre cuanto tarda para 5 paquetes hacer ping a Google y regresar. Escribe sus suposiciones en el muro.

En grupos (si hay equipos disponibles) o como un solo grupo mirando un proyector, ejecuta la utilidad ping en google.com (¡Usa la hoja de consejos para instrucciones!).

Discute los resultados.

Completa el **[cuestionario posterior a la actividad](http://goo.gl/forms/ezm6IXWhhM)**.
