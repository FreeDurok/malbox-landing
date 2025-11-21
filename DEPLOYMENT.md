# Deploy su Vercel con Dominio Custom

## Step 1: Prepara il Repository GitHub

1. Crea un nuovo repository su GitHub
2. Push il codice:

```bash
cd /home/user/malbox-landing
git init
git add .
git commit -m "Initial commit - MalBox Landing Page"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/malbox-landing.git
git push -u origin main
```

## Step 2: Deploy su Vercel

1. Vai su https://vercel.com
2. Fai login con GitHub
3. Click su "Add New Project"
4. Importa il repository **malbox-landing**
5. Vercel rileverà automaticamente Vite
6. Click su "Deploy"

⏱️ Il primo deploy richiede ~2 minuti

## Step 3: Configura il Dominio Custom

### Su Vercel:
1. Vai nel progetto deployato
2. Settings → Domains
3. Aggiungi il tuo dominio (es. malbox.tuodominio.com)
4. Vercel ti darà un record DNS da configurare

### Sul tuo Provider DNS (es. Cloudflare, GoDaddy, Namecheap):

**Opzione A - Subdomain (Raccomandato)**
```
Type:  CNAME
Name:  malbox (o www)
Value: cname.vercel-dns.com
```

**Opzione B - Root Domain**
```
Type:  A
Name:  @
Value: 76.76.21.21
```

### Verifica:
- Attendi 5-10 minuti per la propagazione DNS
- Vercel configurerà automaticamente SSL/HTTPS
- Il sito sarà accessibile su https://tuodominio.com

## Step 4: Auto-Deploy

Ogni push su GitHub triggererà automaticamente un nuovo deploy!

```bash
git add .
git commit -m "Update landing page"
git push
```

## Alternative Gratuite

### Railway.app
- Deploy Docker diretto
- Free tier: 500 ore/mese
- Supporta Dockerfile

### Render.com  
- Free tier con dominio custom
- Build automatico da GitHub
- SSL gratuito

### Cloudflare Pages
- CDN globale incluso
- Build illimitati
- Dominio Cloudflare gratuito
