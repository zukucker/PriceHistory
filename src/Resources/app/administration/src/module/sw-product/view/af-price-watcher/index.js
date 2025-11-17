import template from './price-history.html.twig';
const { Criteria } = Shopware.Data;
Shopware.Component.register('price-history', {
    template,
    inject:[
        'repositoryFactory'
    ],

    data: function () {
        return {
            minimum : undefined,
            products: [],
            result: undefined,
            repository: undefined
        }
    },
    computed: {
        routeId(){
            return this.$route.params.id;
        },
        priceHistoryRepository() {
            // create a repository for the `product` entity
            return this.repositoryFactory.create('price_history');
        },
    },
    metaInfo() {
        return {
            title: 'Preisentwicklung'
        };
    },

    created(){
        const criteria = new Criteria();
        criteria.addFilter(
            Criteria.equals('productId', this.routeId)
        );
        criteria.addSorting(
            Criteria.sort('changeDate', 'ASC')
        );
        let counter = 0;
        this.priceHistoryRepository
            .search(criteria, Shopware.Context.api)
            .then(result => {
                result.forEach(res =>{
                    if(counter === 0){
                        this.minimum = new Date(res.createdAt).getTime()
                    }
                    counter = counter + 1
                    let product = {
                        "x" : new Date(res.createdAt).getTime(),
                        "y" : res.newPrice[0].gross
                    };
                    this.products.push(product)
                })
                this.result = result;
            });
    },

    methods: {
    }
});
