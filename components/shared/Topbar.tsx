import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from '@clerk/themes'
function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <div className=" rounded-full px-4 relative ml-0 shadow-[0px_0px_20px_rgba(9,1,28,0.89)] bg-[rgba(9,1,28,0.89)]">
                    <p className="text-white max-xs:hidden font-hand text-[47px] rounded-xl px-2   
                    ">Texts</p>
                </div>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                    src="/assets/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger: "py-2 px-4"
                        },
                    }}
                />

            </div>
        </nav>
    )
}

export default Topbar;