
 📱 Projeto Descubra +Brasil

Aplicativo em desenvolvimento para planejamento de viagens culturais pelo Brasil 🇧🇷

Protótipos criados com auxílio do Figma Make 🎨

🚀 Visão Geral

O Descubra +Brasil é um aplicativo móvel em desenvolvimento que ajuda viajantes a:

Explorar eventos culturais no Brasil.

Organizar itinerários com transporte.

Participar de um sistema de gamificação com pontos e conquistas.

🎯 Escopo do Produto

✅ Autenticação e gerenciamento de perfil de usuário

✅ Listagem, busca e filtragem de eventos

✅ Visualização de detalhes de eventos

✅ Criação de lista de favoritos

🚧 Itinerário avançado com integração a transporte

🚧 Sistema de gamificação (pontos, níveis, conquistas)

🚧 Check-in em eventos

⚙️ Requisitos Funcionais (RF)
<details> <summary><b>RF01 - Autenticação de Usuário</b></summary> Permitir login com E-mail e Senha, com recuperação e cadastro. </details> <details> <summary><b>RF02 - Onboarding</b></summary> Telas introdutórias após o primeiro login. </details> <details> <summary><b>RF03 - Listagem de Eventos</b></summary> Lista de eventos em destaque (imagem, nome, datas, localização). </details> <details> <summary><b>RF04 - Busca de Eventos</b></summary> Campo de busca textual com filtro dinâmico. </details> <details> <summary><b>RF05 - Filtragem de Eventos</b></summary> Filtros avançados por Categorias, Regiões e Período (Mês). </details> <details> <summary><b>RF06 - Detalhes do Evento</b></summary> Exibir descrição, categoria e informações adicionais. </details> <details> <summary><b>RF07 - Favoritos</b></summary> Marcar/desmarcar eventos como favoritos. </details> <details> <summary><b>RF08 - Itinerário Avançado (🚧)</b></summary> - Integração com apps de transporte (Uber, 99). - Informações de transporte público. - Salvar transporte preferido. </details> <details> <summary><b>RF09 - Perfil</b></summary> Tela com dados, estatísticas e configurações. </details> <details> <summary><b>RF10 - Logout</b></summary> Sair da conta de forma segura. </details> <details> <summary><b>RF11 - Gamificação (🚧)</b></summary> - Pontos de Cultura (PC) - Medalhas e conquistas - Check-in via geolocalização </details>

✨ Requisitos Não Funcionais (RNF)

Usabilidade: interface limpa, intuitiva e responsiva.

Desempenho: resposta < 3s para carregamento e busca.

Compatibilidade: iOS e Android, navegadores recentes.

Segurança: criptografia de senhas + HTTPS.

Confiabilidade: ações do usuário sempre persistentes.

Integrações: Mapas e transporte (APIs externas).

Privacidade: geolocalização em conformidade com a LGPD.

🚶 Casos de Uso
🔎 Caso de Uso 01 – Encontrar e Salvar um Evento

Ator: Viajante
Fluxo:

Usuário faz login.

Busca ou filtra eventos.

Visualiza detalhes.

Adiciona aos favoritos.

🗺️ Caso de Uso 02 – Planejamento e Participação

Ator: Viajante
Fluxo:

Adiciona evento ao itinerário.

Seleciona “Planejar Transporte”.

Recebe estimativas de transporte (apps e público).

Vai ao evento.

Faz check-in no app.

Ganha pontos/medalhas.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
