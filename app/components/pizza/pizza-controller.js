(function(angular) {

    /**
     * Service responsável por realizar os consumos de Serviço de Pizza
     */
    function PizzaService($http) {
        var self = this;

        var baseUrl = 'http://186.215.80.43:82/api';

        /**
         * Faz a chamada pro serviço e retorna uma Promise
         * @name Pizza.getSabores
         * @return {Promise}
         */
        self.getSabores = function () {
            return $http.get(baseUrl + '/sabores');
        }

    }

    /**
     * Controller responsavel por mostrar as informações de pizzas
     */
    function PizzaController(Pizza) {

        /**
         * ViewModel
         * @type {PizzaController}
         */
        var vm = this;

        /**
         * Lista de Sabores de Pizza
         * @type {Array}
         */
        vm.sabores = [];

        /**
         * Carrega a lista de todos os sabores disponíveis
         * @returns {Promise}
         */
        vm.listarSabores = function () {
            return Pizza.getSabores()
                .then(function(result) {
                    // callback de successo
                    vm.sabores = result.data;
                }, function() {
                    // callback de erro
                    // @todo Realizar tratamento de erro
                });
        }
    }

    angular.module('app')
        .service('Pizza', PizzaService)
        .controller('PizzaController', PizzaController);

}(angular));
