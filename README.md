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
2. Instala las dependencias del proyecto:
   ```bash
   pip install -r requirements.txt
   ```
3. Arranca la aplicación en modo local exponiendo el puerto 8000:
   ```bash
   python src/server.py
   ```
4. Publica el puerto `8000` en Codespaces y abre la URL resultante en tu navegador. Verás el chatbot listo para la primera interacción con botones rápidos y entrada de texto o voz (Web Speech API).

> El ejemplo implementa un bot “eco”: repite el mensaje del usuario tras unos segundos. El reconocimiento de voz depende del soporte del navegador.
