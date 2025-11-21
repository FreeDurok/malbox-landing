# MalBox Landing Page

Landing page React per MalBox - Malware Sandbox Platform

## Build e Run con Docker

### Build dell'immagine
```bash
docker build -t malbox-landing .
```

### Run del container
```bash
docker run -p 3000:80 malbox-landing
```

La landing page sarà disponibile su http://localhost:3000

## Deployment

Questa landing page può essere hostata gratuitamente su:
- **Vercel** (consigliato per React)
- **Netlify**
- **GitHub Pages**
- **Railway**
- **Render**

## Sviluppo locale

### Con Docker
```bash
docker run --rm -v $(pwd):/app -w /app -p 5173:5173 node:20-alpine sh -c "npm install && npm run dev -- --host"
```

### Senza Docker (richiede Node.js)
```bash
npm install
npm run dev
```
