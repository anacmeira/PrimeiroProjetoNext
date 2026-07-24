import Link from "next/link";

export default function Header(){
    return (
        <header className="w-full bg-amber-100/90 text-amber-950 border-b border-amber-200 py-4 shadow-sm px-4">
            <div className="flex justify-between items-center container mx-auto max-w-5xl">
                <Link className="text-xl font-bold text-amber-900 hover:scale-105 transition-all" href="/">
                    Receitas Mineiras
                </Link>
                <nav className="flex gap-6 font-semibold">
                    <Link className="text-amber-800 hover:text-amber-950 transition-colors" href="/">
                        Início
                    </Link>
                    <Link className="text-amber-800 hover:text-amber-950 transition-colors" href="/receitas">
                        Receitas
                    </Link>
                </nav>
            </div>
        </header>
    )
}