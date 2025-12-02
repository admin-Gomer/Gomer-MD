### 🌼 РУЧНАЯ УСТАНОВКА - TERMUX 🌼
```bash
termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone https://github.com/admin-Gomer/Gomer-MD
cd Gomer-MD
yarn install
npm install
npm start
```

### 🍁 TERMUX 24/7 🍁 
> Comandos para realizar una ejecución 24/7
- INICIAR
> Use estos comandos dentro de la carpeta GataBotLite-MD
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
```
- DETENER PM2
> Detener todos los procesos del bot
```bash
pm2 stop all && pm2 unstartup
```
- REANUDAR 
> Reanudar los procesos, usar dentro de la carpeta GataBotLite-MD 
```bash
pm2 start index.js 
```
- VISUALIZAR EL PROCESO
> Usar dentro de la carpeta GataBotLite-MD para ver en tiempo real
```bash
pm2 logs 
```
- ELIMINAR PROCESOS PM2
> Eliminar todos los procesos del bot. Para volver a usar PM2 debe volver a usar los comandos de INICIAR
```bash
pm2 delete all
```
> **Note** Demanda consumo de RAM y CPU, el resultado mejora mientras las especificaciones del dispositivo sean moderadas
===========================================
