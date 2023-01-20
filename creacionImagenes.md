1. para la subida de iágenes, revisar teoria de Notion (CLOUDINARY - Middleware)
2. crear en la raíz de nuestro proyecto la carpeta public
3. en ella creamos una llamada uploads
4. dentro creamos un archivo .gitkeep
    => si no hay archivos Git no subirá las carpetas al hacer push y se perdería la funcionalidad de subir imágenes. También podemos crear cualquier tipo de archivo (readme.md por ejemplo) para utilizar como explicativo.
5. cuando hablemos de MIMETYPE usaremos la nomenclatura image/img , image/png, image/jpeg, ...
6. necesitaremos instalar los paquetes de NODE de : cloudinary + multer + fs