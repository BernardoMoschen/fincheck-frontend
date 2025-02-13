import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react';

function DropdownMenuRoot({ children }: { children: ReactNode }) {
    return (
        <RdxDropdownMenu.Root>
            {children}
        </RdxDropdownMenu.Root>
    )
}

function DropdownMenuTrigger({ children }: { children: ReactNode }) {
    return (
        <RdxDropdownMenu.Trigger className='outline-none'>
            {children}
        </RdxDropdownMenu.Trigger>
    )
}



function DropdownMenuContent({ children }: { children: ReactNode }) {
    return (
        <RdxDropdownMenu.Portal>
            <RdxDropdownMenu.Content className='rounded-2xl bg-white p-2 space-y-2 shadow-[0px_11px_20px_0px_rgba(0,_0,_0,_0.10)]'>
                {children}
            </RdxDropdownMenu.Content>
        </RdxDropdownMenu.Portal>
    )
}

function DropdownMenuItem({ children }: { children: ReactNode }) {
    return (
        <RdxDropdownMenu.Item>
            {children}
        </RdxDropdownMenu.Item>
    )
}

export const DropdownMenu = {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuTrigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem
}
