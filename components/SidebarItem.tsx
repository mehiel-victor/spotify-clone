import Link from 'next/link'
import type React from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SidebarItemProps {
  icon: IconType
  label: string
  active: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex-rowh-auto text-md flex w-full cursor-pointer items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white`,
        active && 'text-white',
      )}
    >
      <Icon size={26} />
      <p className="w-full truncate">{label}</p>
    </Link>
  )
}

export default SidebarItem
