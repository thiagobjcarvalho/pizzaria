(function(angular) {

    /**
     * Controller responsavel por mostrar as informações de pizzas
     */
    function MontagemController($q, Pizza, $route) {

        /**
         * ViewModel
         * @type {MontagemController}
         */
        var vm = this;

        vm.pizzaSelecionada = null;

        vm.ingredientesSelecionados = [];

        vm.pedido = {
            borda: "0"
        };

        vm.sabor = [];
        vm.sabores = [];

        /**
         * Lista de Ingredientes de Pizza
         * @type {Array}
         */
        vm.ingredientes = [];

        /**
         * Lista de Bordas de Pizza
         * @type {Array}
         */
        vm.bordas = [];

        /**
         * Lista de Tamanhos de Pizza
         * @type {Array}
         */
        vm.tamanhos = [];

        vm.listarTudo = function () {
            var promises = [
                Pizza.getSabores(),
                Pizza.getTamanhos(),
                Pizza.getBordas(),
                Pizza.getIngredientes()
            ];

            return $q.all(promises)
                .then(function (results) {
                    vm.sabores = results.shift().data;
                    vm.tamanhos = results.shift().data;
                    vm.bordas = results.shift().data;
                    vm.ingredientes = results.shift().data;

                    if ($route.current.params.sabor) {
                        vm.pedido.sabor = $route.current.params.sabor;
                    }

                    vm.selecionarPizza();
                }, function () {
                    // @todo tratamento de erro
                })
        };

        vm.selecionarPizza = function () {
            if (!vm.pedido.sabor) {
                vm.pizzaSelecionada = null;
                vm.ingredientesSelecionados = [];
                return;
            }

            for (var i = 0; i < vm.sabores.length; i++) {
                var pizza = vm.sabores[i];
                if (pizza.id.toString() === vm.pedido.sabor) {
                    vm.pizzaSelecionada = pizza;
                    vm.ingredientesSelecionados = pizza.ingredientes.map(function(ing) {
                        return ing.id;
                    });
                    break;
                }
            }

        };

        vm.trocarIngrediente = function (ingrediente) {
            var index = vm.ingredientesSelecionados.indexOf(ingrediente.id);
            if (index === -1) {
                vm.ingredientesSelecionados.push(ingrediente.id);
            } else {
                vm.ingredientesSelecionados.splice(index, 1);
            }
        };
    }

    angular.module('app')
        .controller('MontagemController', MontagemController);
})(angular);
