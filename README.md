
  # Descubra+Brasil
  Codigo criado para telas de aplicativo no projeto `Descubra +Brasil`

  Utilizando o Figma Make para auxilio das telas

  # Documento de Requisitos de Software: Descubra +Brasil
Versão: 1.1 (Expansão de Funcionalidades)
Data: 01/09/2025
Status: Em Andamento
1. Introdução
1.1. Visão Geral do Projeto
O "Descubra +Brasil" é uma aplicação móvel em desenvolvimento, projetada para ser um assistente completo de planejamento de viagens culturais no Brasil. Além de permitir que os usuários explorem e descubram eventos, a plataforma está sendo expandida para incluir ferramentas avançadas de planejamento logístico (transporte) e um sistema de gamificação para aumentar o engajamento e recompensar os usuários por sua jornada cultural.
1.2. Escopo do Produto (Revisado e em Andamento)
O escopo da aplicação foi ampliado para incluir:
 * Todas as funcionalidades da versão 1.0 (autenticação, busca, filtros, favoritos).
 * [EM ANDAMENTO] Um módulo de itinerário avançado com integração a serviços de transporte.
 * [EM ANDAMENTO] Um sistema de gamificação com pontos, níveis e conquistas para os usuários.
 * [EM ANDAMENTO] Funcionalidade de check-in nos eventos.
2. Requisitos Funcionais (RF) - Versão 1.1
Os requisitos RF01 a RF07 e RF09 a RF10 da versão anterior permanecem válidos e em implementação.
RF08 - Gerenciamento Avançado de Itinerário (Em Andamento)
 * Descrição: O módulo "Meu Itinerário" será transformado em uma ferramenta de planejamento robusta. Além de listar os eventos, permitirá ao usuário organizar a logística de deslocamento entre eles.
 * Sub-requisito (RF08.3 - Integração com Transporte): Para cada evento no itinerário, o sistema deverá oferecer opções de planejamento de transporte.
   * RF08.3.1 - Estimativa de Transporte por Aplicativo: O sistema deverá se integrar a APIs de serviços de transporte (como Uber, 99) para fornecer ao usuário uma estimativa de tempo e custo de viagem do seu ponto atual (ou de outro evento) até o local do evento selecionado.
   * RF08.3.2 - Consulta de Transporte Público: O sistema deverá exibir informações sobre linhas de ônibus e paradas próximas ao local do evento, incluindo horários previstos.
 * Sub-requisito (RF08.4 - Planejamento de Deslocamento): O usuário poderá salvar sua opção de transporte preferida (ex: "Pegar Uber às 18h" ou "Ônibus linha 501") como parte do seu plano para aquele evento dentro do itinerário.
RF11 - Sistema de Gamificação (Em Andamento)
 * Descrição: Será implementado um sistema para engajar e recompensar os usuários por explorarem a cultura brasileira através do app.
 * Sub-requisito (RF11.1 - Sistema de Pontos e Níveis): Os usuários ganharão "Pontos de Cultura" (PC) ao realizar ações-chave na plataforma, como:
   * Fazer check-in em um evento.
   * Adicionar um evento ao itinerário.
   * Favoritar um evento.
   * Visitar eventos em diferentes regiões do país.
   * O acúmulo de pontos fará com que o usuário suba de nível (ex: de "Viajante Iniciante" a "Explorador Mestre").
 * Sub-requisito (RF11.2 - Conquistas e Medalhas): O sistema terá um conjunto de medalhas (badges) que os usuários poderão desbloquear ao atingir marcos específicos. Exemplos:
   * Medalha "Folião": Fazer check-in em 3 eventos de Carnaval.
   * Medalha "Gourmet Brasileiro": Visitar 5 festivais de gastronomia.
   * Medalha "Pé na Estrada": Visitar eventos em 3 estados diferentes.
   * Medalha "Planejador": Montar um itinerário com mais de 5 eventos.
 * Sub-requisito (RF11.3 - Check-in em Eventos): Para validar a participação e conceder pontos, o usuário terá a funcionalidade de "Fazer Check-in". Isso será baseado na geolocalização do usuário, que deverá estar dentro de um raio pré-definido do local do evento durante o seu período de realização.
3. Requisitos Não Funcionais (RNF) - Adicionais
Os RNF da versão anterior permanecem válidos.
RNF06 - Integração de API Externa
 * Descrição: O sistema deve se integrar de forma confiável com APIs de terceiros (Mapas, Transporte por App, Dados de Transporte Público). A aplicação deve ser capaz de lidar com eventuais falhas ou indisponibilidades dessas APIs (ex: exibindo uma mensagem de erro amigável) sem comprometer o funcionamento do restante do app.
RNF07 - Privacidade e Uso de Localização
 * Descrição: Para a funcionalidade de check-in e planejamento de rotas, a aplicação precisará de acesso à localização do usuário. O sistema deve solicitar essa permissão de forma clara e objetiva, em conformidade com a Lei Geral de Proteção de Dados (LGPD), e só utilizar os dados de localização para as finalidades consentidas.
4. Casos de Uso (Expandido)
Caso de Uso 03: Planejamento Detalhado e Participação em um Evento
 * Ator: Viajante
 * Objetivo: Planejar a logística para ir a um evento e registrar sua participação para ganhar recompensas.
 * Fluxo Principal:
   * O usuário, já logado, adiciona o "Festival de Inverno de Campos do Jordão" ao seu itinerário.
   * Na tela "Meu Itinerário", ele toca no evento para ver mais opções.
   * Ele seleciona a opção "Planejar Transporte".
   * O sistema exibe as opções: "Transporte por App" e "Ônibus".
   * O usuário clica em "Transporte por App" e vê uma estimativa de R$ 30,00 e 15 minutos de viagem.
   * Ele retorna e clica em "Ônibus", vendo que a linha "Turística 01" passa a duas quadras do local a cada 30 minutos.
   * O usuário decide ir de ônibus e mentalmente anota a informação.
   * No dia do evento, ao chegar ao local, ele abre o app.
   * Na tela de detalhes do evento, o botão "Fazer Check-in" está habilitado.
   * O usuário clica no botão. O sistema valida sua localização.
   * O sistema exibe uma notificação de sucesso: "Check-in realizado! Você ganhou 100 Pontos de Cultura!". Se for o caso, ele também ganha uma nova medalha.
Esta versão atualizada reflete a visão de um produto mais robusto e interativo. O caminho definido é excelente para diferenciar o "Descubra +Brasil" no mercado.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
