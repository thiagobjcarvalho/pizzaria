# Teste para candidato Front-end
Como desenvolvedor, eu gostaria de desenvolver um teste para avaliar candidatos front-end.

## Descrição do projeto
Queremos desenvolver uma pequena aplicação web que nos permita encomendar pizzas.
## OBJETIVOS
    1. Nosso objetivo é encontrar respostas para as seguintes perguntas:
        * Você compreende a linguagem Javascript e tecnologias web em geral?
        * Você pode julgar qual biblioteca/framework/plugin melhor se encaixa em determinada situação e consegue usá-lo corretamente?
        * Você pode criar interfaces claras e fáceis de usar?
        * Você domina seu ambiente de trabalho?
## VISÃO
>Definição de pronto: uma estória de usuário é considerada finalizada uma vez que todas as >funcionalidades descritas tenham sido implementadas (back, front e banco) e >automaticamente testadas.

|Como cliente, eu gostaria de visualizar os sabores de pizzas disponíveis para selecionar o que eu desejar (1,0 ponto)|
|-|
|Os sabores das pizzas devem estar listados em ordem alfabética.|

|Como cliente, eu gostaria de selecionar os ingredientes, o tipo de massa e o tamanho da pizza para me permitir customizá-la da forma como eu quiser (2,0 pontos)|
|-|
|1. A montagem da pizza deve seguir o seguinte fluxo: seleção dos ingredientes, borda recheada e tamanho da pizza|
|2. Os ingredientes devem ser listados em ordem alfabética;|
|3. Deve haver os seguintes tipos de borda: catupiry ou cheddar;|
|4. Deve haver os seguintes tamanhos: pequena, média ou grande.|

|Como cliente, eu gostaria de visualizar o preço final do meu pedido de acordo com o sabor e o tamanho selecionados ou com os ingredientes e o tamanho selecionados (3,0 pontos)|
|-|
O preço final deve ser calculado de acordo com a seguinte fórmula: [Σ (preço dos ingredientes) * TP + BR + TE] * DE, em que: 
* TP é o tamanho da pizza e possui os seguintes valores:
    * Pizza pequena = 1;
    * Pizza média = 1,2;
    * Pizza grande = 1.5.
* BR é a borda recheada e possui os seguintes valores:
    * Catupiry = R$5,00;
    * Cheddar = R$7,00;
    * Chocolate = R$6,00
* TE é a taxa de entrega e possui o valor de R$10,00;
* DE é o desconto por atraso e possui os seguintes valores:
    * 1 para tempos de entrega menor ou igual a 40 minutos;
    * 0,90 para tempos de entrega maior do que 40 minutos.

|Como cliente, eu gostaria de finalizar o meu pedido e ser imediatamente informado sobre o tempo previsto de entrega (2,0 pontos)|
|-|
1. Deve haver um action to call para finalizar o pedido;
    * O tempo previsto de entrega deve ser um número aleatório entre 20 e 60 minutos;
    * Caso o tempo de entrega seja maior do que 40 minutos, um desconto de 10% deve ser aplicado ao preço final.
    
## REQUISITOS NÃO-FUNCIONAIS
1. A aplicação deve ser Single Page Application (SPA) e JS-based utilizando AngularJS 1 e Bootstrap;
2. Utilize quaisquer bibliotecas, frameworks ou plugins que você julgar adequados;
3. É obrigatório utilizar o Git como repositório;
    * O projeto inicial pode ser baixado em <link do repositório>;
    * Antes de iniciar, crie uma topic branch obedecendo seguinte padrão: <seu_nome_e_sobrenome>;
    * Procure realizar commits logicamente relacionados, pois eles serão avaliados (1,0 ponto).
4. Os dados estarão disponíveis em: <webservice>;
5. Utilize Jasmine ou Protractor para executar os testes automatizados de acordo com a necessidade;
6. Foque seu desenvolvimento na versão do Chrome instalada.

## ROTAS DO WEBSERVICE
* [GET]/ingredientes - Retorna todos os ingredientes
* [GET]/ingrediente/{id} - Retorna um ingrediente passando seu identificador
* [GET]/sabores - Retorna todos os sabores
* [GET]/sabor/{id} - Retorna um sabor passando seu identificador
* [GET]/bordas - Retorna todos as bordas
* [GET]/borda/{id} - Retorna uma borda passando seu identificador

### EXEMPLOS DOS RETORNOS
* Exemplos do retorno das rotas:
  * Ingredientes
  [
    {"id": 1,"ingrediente": "Queijo mussarela","preco": 5},
  {"id": 2,"ingrediente": "Queijo cheddar","preco": 7}
]
  * Sabores
  [
    {"id": 6,"sabor": "Milho","ingredientes": [
            {"id": 1,"ingrediente": "Queijo mussarela","preco": 5},
            {"id": 8,"ingrediente": "Milho","preco": 2}
        ]
    }]
    * Bordas
    [
    {"id": 1,"borda": "Catupiry","valor": 5}
    ]
  * Tamanhos
  [
    {"id": 1,"tamanho": "Pequena","peso": 1}
    ]

### TABELAS
| # | Ingredientes | Preço |
| - | ------------ | ----- |
|1| Queijo mussarela |  R$5,00|
|2| Queijo cheddar  |R$7,00|
|3| Calabresa |R$5,00|
|4| Pepperoni |R$7,00|
|5| Atum  |R$6,00|
|6| Banana  |R$2,00|
|7| Calda de chocolate  |R$4,00|
|8| Milho |R$2,00|
|9| Ervilha |R$2,50|
|10|  Palmito |R$5,00|
|11|  Presunto  |R$3,00|
|12|  Cebola  |R$1,00|
|13|  Pimentão  |R$1,50|
|14|  Ovo |R$1,50|
|15|  Lombo canadense |R$8,50|
|16|  Abacaxi |R$2,50|
|17|  Canela  |R$0,50|
|18|  Açúcar  |R$0,50|

| # | Sabores | Ingredientes |
| - | ------------ | ----- |
|1| Calabresa |Queijo mussarela, calabresa e cebola|
|2| Lombo canadense com abacaxi |Queijo mussarela, lombo canadense e abacaxi|
|3| Portuguesa  |Queijo mussarela, calabresa, cebola, pimentão, ovo|
|4| Palmito |Queijo mussarela e palmito|
|5| Banana  |Queijo mussarela, banana, canela e açúcar|
|6| Milho |Queijo mussarela e milho|
|7| Atum  |Queijo mussarela e atum|
|8| Pepperoni |Queijo mussarela e pepperoni|
|9| Presunto  |Queijo mussarela e presunto|

| # | Tamanho | Peso |
| - | ------------ | ----- |
|1|Pequena|1|
|2|Média|2|
|3|Grande|3|

| # | Borda | Valor |
| - | ------------ | ----- |
|1|Catupiry|R$5,00|
|2|Cheddar|R$7,00|
|3|Chocolate|R$6,00|