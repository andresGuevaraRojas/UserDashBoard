# Prueba frontend BWL

El sitio cuenta con dos modulos principales, el módulo de autenticación y el dashboard, estos modulos estan conformado por páginas web.

|Módulo|Página|Descripción|
|---|---|---|
|Autenticación|/login|Permite a los usuarios a iniciar sesión|
|Autenticación|/createaccount|Permite a los usuarios registrarse|
|Autenticación|/dashboard|Muestra a los usuarios registrados información del clima y zonas horarias|
|Autenticación|/dashboard/users|Muestra a los usuarios registrados el listado de usuarios|



## Depencias 

Con el fin de desarrollar el sitio orientado en componentes, se utilizó la biblioteca de javascript react.

Para el sistema de rutas se hizo uso de la la biblioteca, react React Router v6.

El sitio web utiliza apis para obtener los datos de zonas horarias y clima.

[Timezonedb](https://timezonedb.com/)
Para obtener las zonas horarias.

[Weatherapi](https://www.weatherapi.com/) para obtener información del clima.
