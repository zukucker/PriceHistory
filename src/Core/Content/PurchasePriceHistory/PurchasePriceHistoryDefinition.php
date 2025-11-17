<?php

namespace PriceHistory\Core\Content\PurchasePriceHistory;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\DateField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\PriceField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class PurchasePriceHistoryDefinition extends EntityDefinition
{

    public function getEntityName(): string
    {
        return 'purchase_price_history';
    }

    public function getCollectionClass(): string
    {
        return PurchasePriceHistoryCollection::class;
    }

    public function getEntityClass(): string
    {
        return PurchasePriceHistoryEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new FkField('product_id', 'productId', ProductDefinition::class))->addFlags(new Required()),
            new DateField('change_date', 'changeDate'),
            (new PriceField('old_price', 'oldPrice'))->addFlags(new Required()),
            (new PriceField('new_price', 'newPrice'))->addFlags(new Required()),
        ]);
    }
}
