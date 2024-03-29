# Data

Tudo relacionado a dados vai ficar em `$lib/data`, isso inclui:

- Definições de tipos em `types.ts`
- Mocks em `mocks/`
- Funções de fetch para carregar dados do backend em `fetch/`

Se um tipo de dados não precisa de métodos especiais, apenas crie como um objeto

## Tipos

### User

Usuário da plataforma. Para o front-end basta apenas saber o `username` e o `display`. Demais informações (seguidores, partidas que jogou, etc.) devem ser solicitadas ao back-end sob demanda

### Player

Estado de um usuário durante uma partida, combinando suas informações de `User` com suas `MatchStats`. Usado nas telas que exibem informações sobre partidas. Vale ressaltar que para cada partida um mesmo `User` produz `Player`s diferentes.

### MatchStats

Estatísticas de um usuário durante uma partida como:

- Gols
- Assitências (opcional)
- Cartões amarelos (opcional)
- Cartões vermelhos (opcional)
- Goleiro (opcional) (indica se o jogador foi goleiro durante a partida)

Usado apenas nas telas com informações sobre uma partida

### Team

Um time que estava jogando uma partida (ou seja, um valor desse tipo vai ser único por partida). Contém o nome do time e seu elenco

### Match

Informações sobre uma partida. 