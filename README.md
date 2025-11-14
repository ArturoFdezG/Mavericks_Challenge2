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
