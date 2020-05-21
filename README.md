# Zemoga Frontend Test
# Presentado por: Fernando Nuñez Estrada

En este repositorio se encuentra la parte de Backend de la prueba

# Producción

Esta API se encuentra alojada en la nube en servidores de Heroku con base de datos en MongoDB  
Link: (https://rule-of-thumb-zem.herokuapp.com/)

# Desarrollo

## Servidor de desarrollo

Para ejecutar el server de la aplicación en ambiente de desarrollo debemos usar el comando: `node server.js`. 
por defecto el server apunta a la siguiente URL `http://localhost:3001/`. 

#Endpoints

## Ejemplo dummy de la data

```json
{
    "id": 1,
    "name": "Kanye West",
    "message": "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    "section": "Entertainment",
    "published": "1 month ago",
    "upVotes": 2,
    "downVotes": 4,
    "image": "Kanye.png"
  }
```

## operaciones CRUD
Endpoint para Obtener listado de hoteles  
`GET /candidates`  

Endpoint para obtener un hotel por id  
`GET /candidates/:candidateId`  

Endpoint para guardar un nuevo hotel  
`POST /candidates` . Se debe enviar como Json el objeto `Candidate` a guardar.  

Endpoint que permite actualizar un Candidate específico pasandole el id por la url y el objecto `Candidate` con la información a actualizar  
`UPDATE /candidates/:candidateId`  

Endpoint que permite eliminar un `Candidate` por su `id`  
`DELETE /candidates/:candidateId`  
  
<!-- ## Inicializar dummy data
Endpoint que permite inicializar la base de datos con la información dummy proporcionada en el archivo `data.json`  
`POST /candidates/dummy`   -->