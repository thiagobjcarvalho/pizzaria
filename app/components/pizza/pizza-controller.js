(function(angular) {

    /**
     * Service responsável por realizar os consumos de Serviço de Pizza
     * @name Pizza
     */
    function PizzaService($http) {
        var self = this;

        var baseUrl = 'http://186.215.80.43:82/api';

        /**
         * Faz a chamada pro serviço e retorna uma Promise
         * @name Pizza.getSabores
         * @return {Promise|HttpPromise}
         */
        self.getSabores = function () {
            return $http.get(baseUrl + '/sabores');
        };

        /**
         * Faz a chamada pro serviço e retorna uma Promise
         * @name Pizza.getIngredientes
         * @return {Promise|HttpPromise}
         */
        self.getIngredientes = function () {
            return $http.get(baseUrl + '/ingredientes');
        };

        /**
         * Faz a chamada pro serviço e retorna uma Promise
         * @name Pizza.getBordas
         * @return {Promise|HttpPromise}
         */
        self.getBordas = function () {
            return $http.get(baseUrl + '/bordas');
        };

        /**
         * Faz a chamada pro serviço e retorna uma Promise
         * @name Pizza.getTamanhos
         * @return {Promise|HttpPromise}
         */
        self.getTamanhos = function () {
            return $http.get(baseUrl + '/tamanhos');
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
         * @returns {Promise|HttpPromise}
         */
        vm.listarSabores = function () {
            return Pizza.getSabores()
                .then(function(result) {
                    // callback de successo
                    vm.sabores = result.data;
                });
        };

        /**
         * Carrega a lista de todos os ingredientes disponíveis
         * @returns {Promise|HttpPromise}
         */
        vm.listarIngredientes = function () {
            return Pizza.getIngredientes()
                .then(function(result) {
                    // callback de successo
                    vm.Ingredientes = result.data;
                });
        };

        /**
         * Carrega a lista de todas as bordas disponíveis
         * @returns {Promise|HttpPromise}
         */
        vm.listarBordas = function () {
            return Pizza.getBordas()
                .then(function(result) {
                    // callback de successo
                    vm.bordas = result.data;
                });
        };

        /**
         * Carrega a lista de todos os tamanhos disponíveis
         * @returns {Promise|HttpPromise}
         */
        vm.listarTamanhos = function () {
            return Pizza.getTamanhos()
                .then(function(result) {
                    // callback de successo
                    vm.tamanhos = result.data;
                });
        };
    }

    angular.module('app')
        .service('Pizza', PizzaService)
        .controller('PizzaController', PizzaController);

}(angular));
