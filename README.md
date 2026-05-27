# CodeConnect
<<<<<<< HEAD

Aplicativo móvel para conexão de talentos e codificadores, similar ao LinkedIn mas focado em desenvolvedores.

## 🚀 Tecnologias

- **React Native** com Expo (~54.0.33)
- **TypeScript** com modo strict
- **Expo Router** para navegação
- **React Hook Form** para gerenciamento de formulários
- **Yup** para validação de esquemas
- **React Native Masked Text** para máscaras de input

## 📋 Funcionalidades

- ✅ Autenticação de usuários (login/cadastro)
- ✅ Feed de projetos
- ✅ Listagem de vagas
- ✅ Sistema de notificações
- ✅ Criação de novos projetos
- ✅ Validação de formulários
- ✅ Tratamento de erros global
- ✅ Service layer para integração com API
- ✅ Persistência de tokens com AsyncStorage
- ✅ Contexto de autenticação centralizado
- ✅ Validação real de CPF (algoritmo oficial)
- ✅ Sanitização de inputs para prevenir XSS
- ✅ Loading states nas telas de listagem
- ✅ Interceptores de token JWT automáticos
- ✅ Refresh automático de tokens com redirecionamento
- ✅ Validação de senha complexa (8+ caracteres, maiúscula, minúscula, número, especial)
- ✅ Confirmação antes de logout
- ✅ Diferenciação de erros de rede
- ✅ Pull-to-Refresh nas listas
- ✅ Estados vazios nas listas
- ✅ Tipagem TypeScript específica para User
- ✅ Botões de formulário com loading states

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd CodeConnect-main
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```
EXPO_PUBLIC_API_URL=http://localhost:3000/api
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
EXPO_PUBLIC_APPLE_CLIENT_ID=your_apple_client_id
NODE_ENV=development
```

4. Inicie o projeto:
```bash
npm start
```

## 📱 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa no navegador

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Telas do aplicativo
│   ├── (tabs)/            # Telas com navegação por tabs
│   │   ├── adicionar.tsx
│   │   ├── notificacoes.tsx
│   │   ├── projetos.tsx
│   │   ├── telaprincipal_usuario.tsx
│   │   ├── vagas.tsx
│   │   └── _layout.tsx
│   ├── _layout.tsx        # Layout principal
│   ├── cadastro.tsx       # Tela de cadastro
│   ├── index.tsx          # Tela inicial
│   └── login.tsx          # Tela de login
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx
│   └── input.tsx
├── contexts/              # Contextos React
│   └── AuthContext.tsx    # Contexto de autenticação
├── services/              # Serviços de API
│   ├── api.ts            # Configuração base da API
│   ├── authService.ts    # Serviço de autenticação
│   ├── projectService.ts # Serviço de projetos
│   ├── jobService.ts     # Serviço de vagas
│   ├── notificationService.ts # Serviço de notificações
│   └── storageService.ts # Serviço de persistência
└── utils/                 # Utilitários
    ├── errorHandler.ts   # Tratamento de erros
    ├── cpfValidator.ts   # Validador de CPF
    ├── sanitizer.ts      # Sanitização de inputs
    └── passwordValidator.ts # Validador de senha complexa
```

## 🔧 Configuração de API

O projeto está configurado para se conectar a uma API REST. Configure a URL da API através da variável de ambiente `EXPO_PUBLIC_API_URL`.

## 📝 Próximos Passos

- [ ] Implementar backend real com autenticação JWT
- [x] Adicionar AsyncStorage para persistência de tokens
- [ ] Implementar SSO (Google/Apple)
- [ ] Adicionar testes unitários
- [ ] Configurar CI/CD
- [x] Implementar sanitização de inputs
- [ ] Adicionar rate limiting
- [ ] Configurar EAS Build para deploy
- [x] Implementar refresh de tokens
- [x] Adicionar botão de logout na interface
- [x] Melhorar validação de senha
- [x] Adicionar Pull-to-Refresh
- [x] Adicionar estados vazios nas listas
- [x] Diferenciar erros de rede

## 🤝 Contribuição

Este é um projeto acadêmico. Contribuições são bem-vindas!

## 📄 Licença

=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
Projeto da Faculdade
