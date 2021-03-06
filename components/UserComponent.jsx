import Image from 'next/image'

const UserComponent = () => {
  return (
    <div className="rounded-3xl flex items-center justify-between py-3 space-x-2 px-4 bg-white">
      <div className="">
        <h5>Hello, Joey👋</h5>
        <p className="small1 text-Neutral-Dark">Hostel Owner</p>
      </div>
      <div className="relative w-12 h-12">
        <Image src="/images/Ellipse 5.png" layout="fill" alt="user-img" />
      </div>
    </div>
  )
}

export default UserComponent
