import Image from 'next/image';
import React from 'react'

import { brandProps } from './brand-list';

interface listProps {
    list: brandProps
}

export default function BrandListItem({ list }: listProps) {
    return (
        <Image src={list.path} alt='' width={100} height={100} />
    )
}
