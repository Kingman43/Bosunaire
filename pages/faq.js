import Link from "next/link";

export default function Faq() {

    return(
        <div className="flex-col flex  py-1" >
            <h1 className="pt-8">Frequently asked questions</h1>

            <h2 className="p-8">Probably import a package for FAQ</h2>

            <div>
                <Link href="/connect" title="Find a Bosunaire">
                    <h1 className=" bg-gradient-to-r from-my-bg to-green-500 text-4xl rounded-xl mt-3"> Yoyo with Bo</h1>
                </Link>
            </div>

        </div>
    )
}