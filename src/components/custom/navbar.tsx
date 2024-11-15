'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Cálculo de Juros Simples',
    href: '/tools/simple-interest-calc',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Regra de três simples',
    href: '/tools/simple-interest-calc',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Tabela de juros',
    href: '/tools/simple-interest-calc',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Calendário de férias',
    href: '/tools/simple-interest-calc',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Seguro desemprego',
    href: '/tools/simple-interest-calc',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Cálcular Desconto do INSS',
    href: '/tools/simple-interest-calc',
    description: 'Visually or semantically separates content.',
  },
]

export function MenuNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            disabled
            className="h-16 px-8 bg-transparent onho text-white rounded-none"
          >
            Ferramentas
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[500px] grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
