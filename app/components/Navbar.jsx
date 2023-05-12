import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src="https://tse3.mm.bing.net/th?id=OIP.yRdlrQV79PNu6iduQRbxcAHaHa&pid=Api&P=0"
            width={50}
            height={50}
          />
          <span class="ml-3 text-xl">Prabhjot</span>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" class="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/contact" class="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/services" class="mr-5 hover:text-gray-900">
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
