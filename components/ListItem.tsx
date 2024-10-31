'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'

interface ListItemProps {
  image: string
  name: string
  href: string
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter()

  const onClick = () => {
    // Add authentication before push
    router.push(href)
  }
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/10 pr-24 transition hover:bg-neutral-100/20"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt="image" />
      </div>
      <p className="truncate py-5 font-medium">{name}</p>
      <div className="absolute right-5 flex items-center justify-center rounded-full bg-green-500 p-4 opacity-0 drop-shadow-md transition hover:scale-110 group-hover:opacity-100">
        <FaPlay className="text-black" />
      </div>
    </button>
  )
}

export default ListItem
