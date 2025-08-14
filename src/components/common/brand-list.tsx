import React from 'react'

import BrandListItem from './brand-list-item'

export interface brandProps {
    path: string;
}

interface listOfBrandsProps {
    listOfBrands: brandProps[]
}

export default function BrandLists({ listOfBrands }: listOfBrandsProps) {
    return (
        <div className="space-y-6">
            <h3 className=" px-5 font-semibold">Marcas parceiras</h3>
            <div className='flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5 ' >
                {listOfBrands.map((list) => {
                    return (
                        <BrandListItem list={list} key={list.path} />
                    )
                })}
            </div>

        </div>
    )
}
