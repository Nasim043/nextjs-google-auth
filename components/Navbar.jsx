import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='border shadow-md px-4 py-4 mt-2 rounded-md flex justify-between items-center'>
        <Link href='/' className='font-bold text-2xl text-blue-500'>Google Auth</Link>
        <button className='bg-black text-white px-4 py-1 rounded-md'>Sign In</button>
    </nav>
  )
}

export default Navbar