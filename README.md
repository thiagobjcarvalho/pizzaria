<!DOCTYPE html>
<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   </head>
   <body>
      <h1 id="teste-para-candidato-front-end">Teste para candidato Front-end</h1>
      <h2 id="descricao-do-projeto">Descrição do projeto</h2>
      <blockquote>
        <p>Queremos desenvolver uma pequena aplicação web que nos permita encomendar pizzas.</p>
      </blockquote>
      <h2 id="objetivos">Objetivos</h2>
      <blockquote>
          Nosso objetivo é encontrar respostas para as seguintes perguntas:
          <ul>
            <li>Você compreende a linguagem Javascript e tecnologias web em geral?
            <li>Você pode julgar qual biblioteca/framework/plugin melhor se encaixa em determinada situação e consegue usá-lo corretamente?</li>
            <li>Você pode criar interfaces claras e fáceis de usar?</li>
            <li>Você domina seu ambiente de trabalho?</li>
          </ul>
      </blockquote>
      <h2 id="visao">Definição de pronto</h2>
      <blockquote>
         <p>Uma estória de usuário é considerada finalizada uma vez que todas as funcionalidades descritas tenham sido implementadas (back, front e banco) e automaticamente testadas.</p>
      </blockquote>
      <h2 id="estorias-de-usuario">Estórias de usuário</h2>
      <h4>Como cliente, eu gostaria de visualizar os sabores de pizzas disponíveis para selecionar o que eu desejar (1,0 ponto)</h4>
      <blockquote>
        Os sabores das pizzas devem estar listados em ordem alfabética.
      </blockquote>
      <h4>Como cliente, eu gostaria de selecionar os ingredientes, o tipo de massa e o tamanho da pizza para me permitir customizá-la da forma como eu quiser (2,0 pontos)</h4>
      <blockquote>
        <p>A montagem da pizza deve seguir o seguinte fluxo: seleção dos ingredientes, borda recheada e tamanho da pizza;</p>
        <p>Os ingredientes devem ser listados em ordem alfabética;</p>
        <p>Deve haver os seguintes tipos de borda: catupiry ou cheddar;</p>
        <p>Deve haver os seguintes tamanhos: pequena, média ou grande.</p>
      </blockquote>
      <h4>Como cliente, eu gostaria de visualizar o preço final do meu pedido de acordo com o sabor e o tamanho selecionados ou com os ingredientes e o tamanho selecionados (3,0 pontos)</h4>
      <blockquote>
        <p>O preço final deve ser calculado de acordo com a seguinte fórmula: [Σ (preço dos ingredientes) * TP + BR + TE] * DE, em que: </p>
        <ol>
           <li>
              <p>TP é o tamanho da pizza e possui os seguintes valores:</p>
              <ul>
                 <li>Pizza pequena = 1;</li>
                 <li>Pizza média = 1,2;</li>
                 <li>Pizza grande = 1.5.</li>
              </ul>
           </li>
           <li>
              <p>BR é a borda recheada e possui os seguintes valores:</p>
              <ul>
                 <li>Catupiry = R$5,00;</li>
                 <li>Chocolate = R$6,00;</li>
                 <li>Cheddar = R$7,00.</li>
              </ul>
           </li>
           <li><p>TE é a taxa de entrega e possui o valor de R$10,00;</p></li>
           <li>
              <p>DE é o desconto por atraso e possui os seguintes valores:</p>
              <ul>
                 <li>1 para tempos de entrega menor ou igual a 40 minutos;</li>
                 <li>0,90 para tempos de entrega maior do que 40 minutos.</li>
              </ul>
           </li>
        </ol>
      </blockquote>
      <h4>Como cliente, eu gostaria de finalizar o meu pedido e ser imediatamente informado sobre o tempo previsto de entrega (2,0 pontos)</h4>
      <blockquote>
        <p>Deve haver um botão para finalizar o pedido.</p>
        <ul>
         <li>O tempo previsto de entrega deve ser um número aleatório entre 20 e 60 minutos;</li>
         <li>Caso o tempo de entrega seja maior do que 40 minutos, um desconto de 10% deve ser aplicado ao preço final.</li>
        </ul>
      </blockquote>
      
      <h2 id="requisitos-nao-funcionais">Requisitos não-funcionais</h2>
      <ol>
         <li>A aplicação deve ser <i>Single Page Application (SPA)</i> e <i>JS-based</i> utilizando <a href="#">AngularJS 1</a> e <a href="#">Bootstrap</a>;</li>
         <li>Utilize quaisquer bibliotecas, <i>frameworks</i> ou <i>plugins</i> que você julgar adequados;</li>
         <li>
            É obrigatório utilizar o Git como repositório;
            <ul>
               <li>Procure realizar commits logicamente relacionados, pois eles serão avaliados (1,0 ponto).</li>
            </ul>
         </li>
         <li>Utilize Jasmine ou Protractor para executar os testes automatizados de acordo com a necessidade;</li>
         <li>Foque seu desenvolvimento na versão do Chrome instalada.</li>
      </ol>
      <h2 id="rotas-do-webservice">Rotas do <i>webservice</i></h2>
      <ul>
         <li>
           [GET]/ingredientes - Retorna todos os ingredientes.
            <pre>
[  
   {
      "id":1,
      "ingrediente":"Queijo mussarela",
      "preco":5
   },
   {
      "id":2,
      "ingrediente":"Queijo cheddar",
      "preco":7
   }
]
            </pre>
         </li>
         <li>[GET]/ingrediente/{id} - Retorna um ingrediente passando seu identificador.</li>
         <li>
           [GET]/sabores - Retorna todos os sabores.
            <pre>
[
 {
    "id":6,
    "sabor":"Milho",
    "ingredientes":[
       {
          "id":1,
          "ingrediente":"Queijo mussarela",
          "preco":5
       },
       {
          "id":8,
          "ingrediente":"Milho",
          "preco":2
       }
    ]
 }
]
            </pre>
         </li>
         <li>[GET]/sabor/{id} - Retorna um sabor passando seu identificador.</li>
         <li>[GET]/bordas - Retorna todos as bordas.</li>
          <pre>
[
   {
      "id":1,
      "borda":"Catupiry",
      "valor":5
   }
]
          </pre>
         <li>[GET]/borda/{id} - Retorna uma borda passando seu identificador</li>
         <li>[GET]/tamanhos - Retorna todos os tamanhos.
          <pre>
[
   {
      "id":1,
      "tamanho":"Pequena",
      "peso":1
   }
]
          </pre>
      </ul>
      
      <h2 id="tabelas">Tabelas</h2>
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Ingredientes</th>
               <th>Preço </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Queijo mussarela</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Queijo cheddar</td>
               <td>R$7,00</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Calabresa</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>4</td>
               <td>Pepperoni</td>
               <td>R$7,00</td>
            </tr>
            <tr>
               <td>5</td>
               <td>Atum</td>
               <td>R$6,00</td>
            </tr>
            <tr>
               <td>6</td>
               <td>Banana</td>
               <td>R$2,00</td>
            </tr>
            <tr>
               <td>7</td>
               <td>Calda de chocolate</td>
               <td>R$4,00</td>
            </tr>
            <tr>
               <td>8</td>
               <td>Milho</td>
               <td>R$2,00</td>
            </tr>
            <tr>
               <td>9</td>
               <td>Ervilha</td>
               <td>R$2,50</td>
            </tr>
            <tr>
               <td>10</td>
               <td>Palmito</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>11</td>
               <td>Presunto</td>
               <td>R$3,00</td>
            </tr>
            <tr>
               <td>12</td>
               <td>Cebola</td>
               <td>R$1,00</td>
            </tr>
            <tr>
               <td>13</td>
               <td>Pimentão</td>
               <td>R$1,50</td>
            </tr>
            <tr>
               <td>14</td>
               <td>Ovo</td>
               <td>R$1,50</td>
            </tr>
            <tr>
               <td>15</td>
               <td>Lombo canadense</td>
               <td>R$8,50</td>
            </tr>
            <tr>
               <td>16</td>
               <td>Abacaxi</td>
               <td>R$2,50</td>
            </tr>
            <tr>
               <td>17</td>
               <td>Canela</td>
               <td>R$0,50</td>
            </tr>
            <tr>
               <td>18</td>
               <td>Açúcar</td>
               <td>R$0,50</td>
            </tr>
         </tbody>
      </table>
      
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Sabores</th>
               <th>Ingredientes </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Calabresa</td>
               <td>Queijo mussarela, calabresa e cebola</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Lombo canadense com abacaxi</td>
               <td>Queijo mussarela, lombo canadense e abacaxi</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Portuguesa</td>
               <td>Queijo mussarela, calabresa, cebola, pimentão, ovo</td>
            </tr>
            <tr>
               <td>4</td>
               <td>Palmito</td>
               <td>Queijo mussarela e palmito</td>
            </tr>
            <tr>
               <td>5</td>
               <td>Banana</td>
               <td>Queijo mussarela, banana, canela e açúcar</td>
            </tr>
            <tr>
               <td>6</td>
               <td>Milho</td>
               <td>Queijo mussarela e milho</td>
            </tr>
            <tr>
               <td>7</td>
               <td>Atum</td>
               <td>Queijo mussarela e atum</td>
            </tr>
            <tr>
               <td>8</td>
               <td>Pepperoni</td>
               <td>Queijo mussarela e pepperoni</td>
            </tr>
            <tr>
               <td>9</td>
               <td>Presunto</td>
               <td>Queijo mussarela e presunto</td>
            </tr>
         </tbody>
      </table>
      
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Tamanho</th>
               <th>Peso </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Pequena</td>
               <td>1</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Média</td>
               <td>2</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Grande</td>
               <td>3</td>
            </tr>
         </tbody>
      </table>
      
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Borda</th>
               <th>Valor </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Catupiry</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Cheddar</td>
               <td>R$7,00</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Chocolate</td>
               <td>R$6,00</td>
            </tr>
         </tbody>
      </table>
   </body>
</html>