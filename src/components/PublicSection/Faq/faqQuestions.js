const faqQuestions = [
    [
        {
            id: 1,
            pregunta: "¿Qué tipo de materiales de Orientación puedo encontrar en la aplicación?",
            respuesta: "En la aplicación puedes encontrar material de Orientación relacionado con los OAs ministeriales, Situaciones emergentes y Efemérides."
        },
        {
            id: 2,
            pregunta: "¿Es necesario respetar el orden sugerido de las clases de Unidades?",
            respuesta: "Sí, pues sus temáticas están relacionadas y ordenadas de manera secuencial."
        },
        {
            id: 3,
            pregunta: "¿Es necesario respetar el orden sugerido de las clases de Situaciones emergentes?",
            respuesta: "No, pues son clases independientes y sus temáticas responden a necesidades puntuales."
        },
        {
            id: 4,
            pregunta: "¿Puedo aplicar el programa según el orden que sugiere el Ministerio?",
            respuesta: "Sí, solo debes presionar el botón “Ver planificación estandarizada” y verás las unidades organizadas de ese modo."
        },
        {
            id: 5,
            pregunta: "¿Cómo puedo encontrar una clase específica de Situaciones emergentes?",
            respuesta: "Puedes escribir un concepto relacionado con la temática de la clase en el buscador o revisar los objetivos de cada una de las clases propuestas."
        },
        {
            id: 6,
            pregunta: "¿Puedo acceder a la planificación personalizada si todavía no he cerrado el proceso de encuestas?",
            respuesta: "No, pues la aplicación necesita esos resultados para reorganizar las unidades del programa."
        },
        {
            id: 7,
            pregunta: "¿Cómo puedo cambiar el estado de avance de cada unidad?",
            respuesta: "Solo debes presionar el corazón que aparece junto al estado de avance y seleccionar el que corresponda."
        }
    ],
    [
        {
            id: 1,
            pregunta: "¿Dónde puede encontrar el link para la encuesta de estudiantes?",
            respuesta: "Si necesitas nuevamente el enlace para la encuesta de estudiantes, puedes encontrarlo bajo la sección Unidades, y si presionas el botón “Ver enlace encuesta” podrás acceder a él."
        },
        {
            id: 2,
            pregunta: "¿Cómo puedo conocer el progreso de la encuesta de mis estudiantes?",
            respuesta: "Puedes revisarlo presionando sobre tu nombre que está ubicado a la derecha, en la barra superior de tu pantalla o presionando el botón “Ver progreso” que encontrarás más abajo, al lado izquierdo de tu pantalla."
        },
        {
            id: 3,
            pregunta: "Si ya ingresé a mi perfil, ¿cómo puedo visualizar la nómina de mis estudiantes?",
            respuesta: "Primero debes presionar el botón “Ver enlace de encuesta” y luego presionar el botón “Copiar enlace”. Con estos dos pasos estás indicándole a la aplicación que la nómina está correcta e iniciarás la encuesta."
        },
        {
            id: 4,
            pregunta: "Si ya inicié la encuesta, ¿cómo puedo sumar a un estudiante a la nómina del curso?",
            respuesta: "Solo debes enviar un correo a la persona encargada de tu establecimiento con los datos de tu estudiante y luego continuar con el proceso regular de la encuesta."
        },
        {
            id: 5,
            pregunta: "¿Puedo finalizar la encuesta si todavía tengo estudiantes que no han respondido?",
            respuesta: "Sí, pero la aplicación solo lo permitirá cuando alcances un mínimo de % de participación de los estudiantes del curso. De esta manera aseguramos que los resultados sean representativos de la realidad del curso."
        }
    ],
    [
        {
            id: 1,
            pregunta: "¿Dónde puedo acceder a mi perfil?",
            respuesta: "Solo debes presionar tu nombre que está ubicado a la derecha, en la barra superior de tu pantalla."
        },
        {
            id: 2,
            pregunta: "¿Qué información puede encontrar en mi perfil?",
            respuesta: "Si tus estudiantes ya terminaron de responder, podrás revisar el informe de resultado. Y si tus estudiantes están en el proceso de responder la encuesta, podrás revisar el % de avance."
        }
    ],
    [
        {
            id: 1,
            pregunta: "Revisé la nómina de mi curso y noté un error en el nombre o rut de un estudiante, ¿cómo puedo ajustarlo?",
            respuesta: "Solo debes escribir un correo a la persona encargada de tu establecimiento solicitando el ajuste y entregarle la información correspondiente."
        },
        {
            id: 2,
            pregunta: "Uno de mis estudiantes utiliza su nombre social, ¿puede responder la encuesta con esos datos?",
            respuesta: "Por supuesto, solo debes indicarlo claramente en la nómina del curso que enviarán a la persona encargada de tu establecimiento."
        }
    ],
    [
        {
            id: 1,
            pregunta: "Ya terminé la encuesta, ¿dónde puedo revisar los resultados de la encuesta?",
            respuesta: "Solo debes ingresar a tu perfil y presionar el botón “Ver reporte”. Puedes revisar los resultados de manera online o imprimirlos presionar el botón “Imprimir”."
        }
    ],
    [
        {
            id: 1,
            pregunta: "¿Cuál es el correo de contacto de CiviConecta?",
            respuesta: "Puedes escribirnos un correo electrónico a la dirección contacto@civiconecta.cl."
        },
        {
            id: 2,
            pregunta: "¿Cuál es el teléfono de contacto de CiviConecta?",
            respuesta: "Puedes llamarnos o escribir un mensaje de WhatsApp al número +56 9 3128 2897."
        },
        {
            id: 3,
            pregunta: "¿Cuál es el correo de la persona asignada a mi establecimiento?",
            respuesta: "El correo varía en cada caso, por lo que te recomendamos consultarlo directamente con algún integrante del Equipo de Convivencia de tu establecimiento."
        }
    ],
    [
        {
            id: 1,
            pregunta: "¿Cuál es la duración del servicio?",
            respuesta: "El servicio tiene una duración de 10 meses, es decir, marzo a diciembre."
        },
        {
            id: 2,
            pregunta: "¿La renovación del servicio es automática?",
            respuesta: "No, se puede renovar al término o al inicio de cada año."
        },
        {
            id: 3,
            pregunta: "¿Los valores del programa son iguales para todos los tipos de establecimientos?",
            respuesta: "No, tenemos precios personalizados de acuerdo con la realidad de cada establecimiento. Si deseas recibir mayor información, puedes enviar un correo electrónico a la dirección contacto@civiconecta.cl solicitándola."
        }
    ],
    [
        {
            id: 1,
            pregunta: "¿Dónde puedo informar de un error inesperado?",
            respuesta: "Puedes informarlo directamente a la persona encargada de tu establecimiento o escribiendo un correo a la dirección contacto@civiconecta.cl.  "
        }
    ]
]

export default faqQuestions;
