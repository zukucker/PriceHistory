import './page/sw-product-detail';
import './view/af-price-watcher';

// Here you create your new route, refer to the mentioned guide for more information
Shopware.Module.register('af-price-watcher-tab', {
    routeMiddleware(next, currentRoute) {
        const customRouteName = 'price.history';
    
        if (
            currentRoute.name === 'sw.product.detail' 
            && currentRoute.children.every((currentRoute) => currentRoute.name !== customRouteName)
        ) {
            currentRoute.children.push({
                name: customRouteName,
                path: '/sw/product/detail/:id/pricehistory',
                component: 'price-history',
                meta: {
                    parentPath: 'sw.product.index'
                }
            });
        }
        next(currentRoute);
    }
});
