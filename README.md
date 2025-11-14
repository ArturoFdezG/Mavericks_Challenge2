# Mavericks_Challenge2

## Visión global del sistema

- Un único **backend** sirve a una **web ligera**.
- Un **LLM orquestador** decide a qué “módulo” enviar cada consulta:
  - **Q&A**
    - FAQs y banca general
  - **Hipotecas**
    - Cálculos
    - Datos
  - **Créditos rápidos**
    - Riesgo básico (opcional)
- Cada módulo es **autocontenido** y devuelve una **respuesta estandarizada** al orquestador.

## Estructura mínima de la demo

```
src/
├── server.py            # Servidor Flask que entrega la web
├── static/
│   ├── script.js        # Lógica del chatbot en el navegador
│   └── style.css        # Estilos básicos
└── templates/
    └── index.html       # Interfaz principal del chatbot
```

## Puesta en marcha en GitHub Codespaces

1. Crea el entorno Codespace y asegúrate de tener Python 3.11+ disponible.
2. Instala dependencias:
   ```bash
   pip install flask
   ```
3. Inicia el servidor:
   ```bash
   python src/server.py
   ```
4. Abre el puerto `8000` en el Codespace y visita la URL publicada para ver el chatbot con entrada de texto y micrófono (Web Speech API).

> El ejemplo implementa un bot “eco”: repite el mensaje del usuario tras unos segundos. El reconocimiento de voz depende del soporte del navegador.
