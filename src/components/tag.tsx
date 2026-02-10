import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react'

interface TagProps {
    text:string;
    size?: 'small' | 'medium';
    className?:string;
    shadow?:boolean;
}
const Tag:React.FC<TagProps> = ({text, size, className, shadow}) => {
const tagClass=cva('flex items-center justify-center border-4 border-black pixel-font text-center', {
    variants: {
        size: {
            small: 'text-[12px] py-1.5 px-1 border-3',
            medium: 'text-sm px-6 py-3',
            default: 'text-xl px-6 py-3',
        },
        shadow: {
            true: 'pixel-shadow',
            false: '',
        }, 
    },
    defaultVariants: {
        size: 'default',
        shadow: true,
    },
})
  return (
    <div className={cn(tagClass({ size,shadow }), className)}>
        <span>{text}</span>
    </div>
  )
}

export default Tag