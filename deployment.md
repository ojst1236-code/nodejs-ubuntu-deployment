# 🚀 Despliegue en Ubuntu Server

## 🔧 Instalación de Node.js
sudo apt update
sudo apt install nodejs

## 📦 Instalación de PM2
npm install -g pm2

## ▶️ Ejecutar aplicación
pm2 start app.js

## 📊 Ver procesos
pm2 list

## 🔄 Reiniciar
pm2 restart app

## 🌐 Verificación de puerto
ss -tulpn | grep 4000
