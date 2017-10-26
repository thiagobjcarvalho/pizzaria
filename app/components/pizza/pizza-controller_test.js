'use strict';

// Descreve um Teste para o componente Pizza
describe('pizza component', function() {
    var $httpBackend, $timeout, $scope, PizzaController;
    var baseUrl = 'http://186.215.80.43:82/api';

    // Carrega o módulo "app"
    beforeEach(module('app'));

    // Descreve um Teste para a PizzaController
    describe('PizzaController', function() {
        beforeEach(inject(function($rootScope, $controller, $injector) {
            // Carrega as variáveis necessárias para realizar o teste
            $scope = $rootScope.$new();
            PizzaController = $controller('PizzaController', {$scope: $scope});
            $httpBackend = $injector.get('$httpBackend');
            $timeout = $injector.get('$timeout');

            // Declara as chamadas de Backend (Mockando os dados)
            $httpBackend.whenGET(baseUrl + '/sabores')
                .respond(200, [
                    {
                        "id": 1,
                        "sabor": "Calabresa",
                        "ingredientes": [
                            {
                                "id": 1,
                                "ingrediente": "Queijo mussarela",
                                "preco": 5
                            },
                            {
                                "id": 3,
                                "ingrediente": "Calabresa",
                                "preco": 5
                            },
                            {
                                "id": 12,
                                "ingrediente": "Cebola",
                                "preco": 1
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "sabor": "Lombo canadense com abacaxi",
                        "ingredientes": [
                            {
                                "id": 1,
                                "ingrediente": "Queijo mussarela",
                                "preco": 5
                            },
                            {
                                "id": 15,
                                "ingrediente": "Lombo canadense",
                                "preco": 8.5
                            },
                            {
                                "id": 16,
                                "ingrediente": "Abacaxi",
                                "preco": 2.5
                            }
                        ]
                    }
                ]);
        }));

        afterEach(function() {
            // @see https://docs.angularjs.org/api/ngMock/service/$httpBackend#verifyNoOutstandingExpectation
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        // Este é um teste isolado
        it('não deve ter sabores ainda', inject(function() {
            // Realiza o teste do resultado esperado
            expect(PizzaController.sabores.length).toEqual(0);
            expect(PizzaController.sabores).toEqual([]);
        }));

        // Este é outro teste isolado do primeiro
        it('Deve carregar os sabores', function() {
            // Declara que este teste irá chamar o serviço
            $httpBackend.expectGET(baseUrl + '/sabores');

            // Chama o serviço
            PizzaController.listarSabores();

            // Envia a responsta Mockada
            $httpBackend.flush();

            // Realiza o teste do resultado esperado
            expect(PizzaController.sabores.length).toBeGreaterThan(0);
        });
    });
});
