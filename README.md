
  # Descubra+Brasil
  Codigo criado para telas de aplicativo no projeto `Descubra +Brasil`

  Utilizando o Figma Make para auxilio das telas
  
  Status do Projeto: Em Andamento 🚧
  
📄 Visão Geral do Projeto
O "Descubra +Brasil" é uma aplicação móvel em desenvolvimento, projetada para ser um assistente completo de planejamento de viagens culturais no Brasil. Além de permitir que os usuários explorem e descubram eventos, a plataforma está sendo expandida para incluir ferramentas avançadas de planejamento logístico (transporte) e um sistema de gamificação para aumentar o engajamento e recompensar os usuários por sua jornada cultural.
🎯 Escopo do Produto
 * [✔️] Autenticação e gerenciamento de perfil de usuário.
 * [✔️] Listagem, busca e filtragem de eventos.
 * [✔️] Visualização de detalhes de eventos.
 * [✔️] Criação de uma lista de eventos favoritos.
 * [🚧 EM ANDAMENTO] Módulo de itinerário avançado com integração a serviços de transporte.
 * [🚧 EM ANDAMENTO] Sistema de gamificação com pontos, níveis e conquistas.
 * [🚧 EM ANDAMENTO] Funcionalidade de check-in nos eventos.
⚙️ Requisitos Funcionais (RF)
RF01 - Autenticação de Usuário
 * Descrição: O sistema deve permitir que um usuário acesse sua conta através de um formulário de login com E-mail e Senha, com links para recuperação de senha e cadastro.
RF02 - Onboarding de Novo Usuário
 * Descrição: Após o primeiro login, o sistema deve apresentar telas introdutórias que explicam as funcionalidades principais da aplicação.
RF03 - Listagem de Eventos (Home)
 * Descrição: A tela principal deve exibir uma lista de eventos em destaque, contendo imagem, nome, datas e localização.
RF04 - Busca de Eventos
 * Descrição: O sistema deve fornecer um campo de busca textual que filtre a lista de eventos dinamicamente.
RF05 - Filtragem de Eventos
 * Descrição: O sistema deve oferecer uma funcionalidade de filtro avançado por Categorias, Regiões e Período (Mês).
RF06 - Visualização de Detalhes do Evento
 * Descrição: Ao selecionar um evento, o sistema deve exibir uma tela com suas informações detalhadas, como descrição, categoria e informações adicionais.
RF07 - Gerenciamento de Favoritos
 * Descrição: O usuário deve poder marcar/desmarcar um evento como "Favorito" e visualizá-los em uma lista separada.
RF08 - Gerenciamento Avançado de Itinerário (🚧 Em Andamento)
 * Descrição: O módulo "Meu Itinerário" será uma ferramenta de planejamento robusta para organizar a logística de deslocamento entre eventos.
 * RF08.3 - Integração com Transporte: Para cada evento no itinerário, o sistema deverá oferecer opções de planejamento de transporte.
   * RF08.3.1 - Estimativa de Transporte por Aplicativo: Integrar com APIs (ex: Uber, 99) para fornecer estimativas de tempo e custo de viagem.
   * RF08.3.2 - Consulta de Transporte Público: Exibir informações sobre linhas de ônibus e paradas próximas ao local do evento, incluindo horários.
 * RF08.4 - Planejamento de Deslocamento: Permitir que o usuário salve sua opção de transporte preferida como parte do seu plano.
RF09 - Gerenciamento de Perfil
 * Descrição: O sistema deve possuir uma tela de perfil com dados do usuário, estatísticas, atividade recente e opções de configuração.
RF10 - Logout do Sistema
 * Descrição: O usuário deve ter a opção de sair de sua conta de forma segura.
RF11 - Sistema de Gamificação (🚧 Em Andamento)
 * Descrição: Será implementado um sistema para engajar e recompensar os usuários por explorarem a cultura brasileira.
 * RF11.1 - Sistema de Pontos e Níveis: Os usuários ganharão "Pontos de Cultura" (PC) ao realizar ações-chave (check-in, criar itinerário, etc.), subindo de nível com o tempo.
 * RF11.2 - Conquistas e Medalhas: O sistema terá um conjunto de medalhas (badges) desbloqueáveis ao atingir marcos específicos (ex: "Folião", "Gourmet Brasileiro").
 * RF11.3 - Check-in em Eventos: O usuário poderá fazer check-in via geolocalização ao chegar a um evento para validar sua participação e ganhar pontos/medalhas.
✨ Requisitos Não Funcionais (RNF)
RNF01 - Usabilidade e Interface
 * Descrição: A interface deve ser intuitiva, limpa e responsiva, seguindo os padrões de design para aplicações móveis.
RNF02 - Desempenho
 * Descrição: A aplicação deve ter tempo de resposta rápido (< 3s para carregamento de tela) e processamento ágil de buscas e filtros.
RNF03 - Compatibilidade
 * Descrição: A aplicação deve ser compatível com as versões mais recentes dos principais navegadores e sistemas operacionais móveis (iOS e Android).
RNF04 - Segurança
 * Descrição: As senhas devem ser armazenadas com criptografia e a comunicação cliente-servidor deve ser feita via HTTPS.
RNF05 - Confiabilidade
 * Descrição: A aplicação deve ser estável, e as ações do usuário (favoritar, adicionar ao itinerário) devem ser salvas de forma consistente.
RNF06 - Integração de API Externa
 * Descrição: O sistema deve se integrar de forma confiável com APIs de terceiros (Mapas, Transporte) e tratar possíveis falhas de comunicação.
RNF07 - Privacidade e Uso de Localização
 * Descrição: O acesso à localização do usuário deve ser solicitado de forma clara e utilizado apenas para as finalidades consentidas, em conformidade com a LGPD.
🚶 Casos de Uso Principais
Caso de Uso 01: Encontrar e Salvar um Evento
 * Ator: Viajante
 * Objetivo: Achar um evento de interesse e salvá-lo para consulta posterior.
 * Fluxo Principal:
   * Usuário faz login.
   * Navega, busca ou filtra para encontrar um evento.
   * Abre a tela de detalhes do evento.
   * Clica no botão para adicionar aos "Favoritos".
Caso de Uso 02: Planejamento Detalhado e Participação em um Evento (Expandido)
 * Ator: Viajante
 * Objetivo: Planejar a logística para ir a um evento e registrar sua participação.
 * Fluxo Principal:
   * Usuário adiciona um evento ao seu "Meu Itinerário".
   * Dentro do itinerário, seleciona a opção "Planejar Transporte" para o evento.
   * O sistema exibe estimativas de transporte por app e horários de transporte público.
   * No dia do evento, o usuário chega ao local.
   * Abre a página do evento no app e clica no botão "Fazer Check-in".
   * O sistema valida a localização e concede Pontos de Cultura e/ou medalhas.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
