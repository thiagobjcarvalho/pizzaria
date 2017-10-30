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

        /**
         * Lista de Ingredientes selecionados
         * @type {Array}
         */
        vm.ingredientesSelecionados = [];

        /**
         * Lista do pedido da pizza
         * @type {Array}
         */
        vm.pedido = {
            borda: "0"
        };

        /**
         * Lista do sabor da pizza
         * @type {Array}
         */
        vm.sabor = [];

        /**
         * Lista de sabores da Pizza
         * @type {Array}
         */
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

        /**
         * Total da Pizza
         * @type {null}
         */
        vm.total = null;

        vm.msg = null;

        /**
         * Método para listar todos os serviços de pizza
         * @returns {*}
         */
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
                })
        };

        /**
         * Função para seleção de Pizza
         */
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

        /**
         * Função paratroca de ingredientes
         * @param ingrediente
         */
        vm.trocarIngrediente = function (ingrediente) {
            var index = vm.ingredientesSelecionados.indexOf(ingrediente.id);
            if (index === -1) {
                vm.ingredientesSelecionados.push(ingrediente.id);
            } else {
                vm.ingredientesSelecionados.splice(index, 1);
            }
        };

        /**
         * Função paracalcular o tempo de entrega
         */
        vm.calcularTempoDeEntrega = function () {
            if (!vm.tempoDeEntrega) {
                vm.tempoDeEntrega = Math.floor(Math.random() * ((60 - 20) + 1) + 20);
            }
        };

        /**
         * Função paracalcular o valor final da pizza
         */
        vm.calcularValorFinal = function () {
            vm.calcularTempoDeEntrega();
            var pizza = calcularValorDaPizza();

            var borda = getBorda(vm.pedido.borda);

            var total = pizza + borda.valor + 10;

            vm.total = {
                pizza: pizza,
                borda: borda.valor,
                entrega: 10,
                total: vm.tempoDeEntrega > 40 ? total * 0.9 : total
            }
        };

        /**
         * Função para buscar os ingredientes
         * @param id
         * @returns {*}
         */
        function getIngrediente(id) {
            for (var i = 0; i < vm.ingredientes.length; i++) {
                var ing = vm.ingredientes[i];
                if (ing.id == id) {
                    return ing;
                }
            }
        }

        /**
         * Função para burcar o tamanho
         * @param id
         * @returns {*}
         */
        function getTamanho(id) {
            for (var i = 0; i < vm.tamanhos.length; i++) {
                var objTamanho = vm.tamanhos[i];
                if (objTamanho.id == id) {
                    return objTamanho;
                }
            }
        }

        /**
         * Função para buscar a borda
         * @param id
         * @returns {*}
         */
        function getBorda(id) {
            if (id == "0") {
                return {valor: 0}
            }

            for (var i = 0; i < vm.bordas.length; i++) {
                var objBorda = vm.bordas[i];
                if (objBorda.id == id) {
                    return objBorda;
                }
            }
        }

        /**
         * Método para calcular o valor da pizza
         * @returns {number}
         */
        function calcularValorDaPizza() {
            var totalIngredientes = vm.ingredientesSelecionados.reduce(function(valorAnterior, idIngrediente){
                var ing = getIngrediente(idIngrediente);
                return valorAnterior + ing.preco;
            }, 0);


            var tamanho = getTamanho(vm.pedido.tamanho);
            var valorFinal = totalIngredientes * tamanho.peso;

            return valorFinal;
        }
    }

    angular.module('app')
        .controller('MontagemController', MontagemController);
})(angular);
