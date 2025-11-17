<?php

namespace PriceHistory\Core\Content\PurchasePriceHistory;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void                      add(PurchasePriceHistoryEntity $entity)
 * @method void                      set(string $key, PriceHistoryEntity $entity)
 * @method PurchasePriceHistoryEntity[]      getIterator()
 * @method PurchasePriceHistoryEntity[]      getElements()
 * @method PurchasePriceHistoryEntity|null   get(string $key)
 * @method PurchasePriceHistoryEntity|null   first()
 * @method PurchasePriceHistoryEntity|null   last()
 */
class PurchasePriceHistoryCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return PurchasePriceHistoryEntity::class;
    }
}
