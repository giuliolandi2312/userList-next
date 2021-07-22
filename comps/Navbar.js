// importo il component Link per abiltare routing tramite link
import Link from 'next/link'
// import il component Image per inserire immagini responsive
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/huaweilogo.png" width={128} height={77} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Users</Link>
        </nav>
      );
}
 
export default Navbar
