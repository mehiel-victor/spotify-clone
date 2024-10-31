import Header from '@/components/Header'
import ListItem from '@/components/ListItem'

export default function Home() {
  return (
    <div className="h-full w-full rounded-lg bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"></div>
          <ListItem
            href="liked"
            image="/images/liked.jpeg"
            name="Liked Songs"
          />
        </div>
      </Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Newest songs</h1>
        </div>
        <div>List of Songs!</div>
      </div>
    </div>
  )
}
