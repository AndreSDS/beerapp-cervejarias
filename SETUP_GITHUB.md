# 🚀 Configuração do Repositório GitHub

Este guia te ajudará a configurar e publicar seu repositório BeerApp no GitHub.

## 📋 Checklist Pré-Deploy

- [x] ✅ Repositório Git inicializado
- [x] ✅ Código commitado
- [x] ✅ Documentação completa criada
- [x] ✅ Imagens e assets adicionados
- [x] ✅ Configurações do GitHub criadas
- [ ] 🔄 Criar repositório no GitHub
- [ ] 🔄 Conectar repositório local ao remoto
- [ ] 🔄 Fazer push do código
- [ ] 🔄 Configurar GitHub Pages (opcional)
- [ ] 🔄 Configurar secrets para CI/CD

## 🎯 Passos para Publicar

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Preencha os dados:
   - **Repository name**: `beerapp-cervejarias`
   - **Description**: `🍺 BeerApp - Descubra Cervejarias Incríveis de Todo o Mundo`
   - **Visibility**: Public (recomendado)
   - **Initialize**: ❌ NÃO marque nenhuma opção (já temos arquivos)

### 2. Conectar Repositório Local

```bash
# Adicionar remote origin
git remote add origin https://github.com/AndreSDS/beerapp-cervejarias.git

# Verificar remote
git remote -v

# Fazer push inicial
git push -u origin main
```

### 3. Configurar GitHub Pages (Opcional)

1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow já está configurado em `.github/workflows/pages.yml`

### 4. Configurar Secrets para CI/CD

Para deploy automático, configure os secrets:

1. Vá em **Settings** > **Secrets and variables** > **Actions**
2. Adicione os secrets necessários:

#### Para Vercel:
```
VERCEL_TOKEN=seu_token_vercel
VERCEL_ORG_ID=seu_org_id
VERCEL_PROJECT_ID=seu_project_id
```

#### Para outras plataformas:
```
NETLIFY_AUTH_TOKEN=seu_token_netlify
RAILWAY_TOKEN=seu_token_railway
```

## 🎨 Personalização do Repositório

### 1. Adicionar Tópicos

No GitHub, adicione tópicos relevantes:
- `react`
- `typescript`
- `tailwindcss`
- `react-router`
- `beer`
- `breweries`
- `api`
- `docker`
- `fullstack`

### 2. Configurar About

- **Website**: URL do deploy (se disponível)
- **Description**: `🍺 BeerApp - Descubra Cervejarias Incríveis de Todo o Mundo`
- **Topics**: Adicione os tópicos listados acima

### 3. Configurar Social Preview

- Adicione uma imagem de preview social
- Recomendado: 1280x640px
- Use uma das imagens SVG criadas como base

## 📊 Configurações Avançadas

### 1. Branch Protection

Configure proteção para a branch `main`:

1. Vá em **Settings** > **Branches**
2. Clique em **Add rule**
3. Configure:
   - **Branch name pattern**: `main`
   - **Require pull request reviews**: ✅
   - **Require status checks**: ✅
   - **Require up-to-date branches**: ✅

### 2. Issue Templates

Os templates já estão configurados em `.github/ISSUE_TEMPLATE/`:
- `bug_report.md`
- `feature_request.md`

### 3. Pull Request Template

O template está em `.github/PULL_REQUEST_TEMPLATE.md`

### 4. Code of Conduct

Já configurado em `.github/CODE_OF_CONDUCT.md`

## 🚀 Deploy Automático

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify

1. Conecte ao Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build/client`

### Railway

1. Conecte ao Railway
2. Configure automatic deploys
3. Adicione variáveis de ambiente

## 📈 Monitoramento

### 1. GitHub Insights

- **Pulse**: Visão geral da atividade
- **Contributors**: Quem contribuiu
- **Traffic**: Views e clones
- **Community**: Health score

### 2. Analytics

Configure analytics para:
- Page views
- User engagement
- Performance metrics

## 🔧 Comandos Úteis

```bash
# Verificar status
git status

# Ver histórico
git log --oneline

# Ver branches
git branch -a

# Ver remotes
git remote -v

# Fazer push de uma nova branch
git push -u origin feature/nova-feature

# Sincronizar com upstream
git fetch origin
git merge origin/main
```

## 🎉 Próximos Passos

Após publicar o repositório:

1. **Compartilhe**: Divulgue nas redes sociais
2. **Documente**: Mantenha a documentação atualizada
3. **Colabore**: Convide outros desenvolvedores
4. **Melhore**: Implemente feedback da comunidade
5. **Monitore**: Acompanhe métricas e issues

## 📞 Suporte

Se encontrar problemas:

1. Verifique a [documentação do GitHub](https://docs.github.com)
2. Consulte o [guia de contribuição](CONTRIBUTING.md)
3. Abra uma [issue](https://github.com/AndreSDS/beerapp-cervejarias/issues)

---

**🎊 Parabéns! Seu repositório BeerApp está pronto para o GitHub!**
