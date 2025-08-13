"use client"
import React from 'react'

import { productTable, productVariantTable } from '@/db/schema'

import ProductItem from './product-item';

interface ProductListProps {
    title: string;
    products: (typeof productTable.$inferSelect & {
        variants: (typeof productVariantTable.$inferSelect)[];
    })[]
}

export default function ProductList({ title, products }: ProductListProps) {
    return (
        <div className="space-y-6">
            <h3 className=" px-5 font-semibold">{title}</h3>
            <div className='flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5'>
                {products.map(product => <ProductItem product={product} key={product.id} />)}
            </div>

        </div>
    )
}
