"use client"

export default function Footer() {
  return (
    <>
    <hr  className="mb-4"/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[repeat(5,auto)_1fr] gap-x-13">
        <div className="flex flex-col pb-3 md:pb-0">
          <h1 className="font-bold m-0 leading-none text-2xl">HelloTalk</h1>
          <p className="mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            odio? Voluptatibus itaque dolor aliquid nulla rerum reiciendis
            officia.
          </p>
        </div>

        <div className="pb-3 md:pb-0">
          <h1 className="font-bold">Find language partners</h1>
          <ul className="text-sm">
            <li>hello english partner</li>
            <li>hello english partner</li>
            <li>hello english partner</li>
          </ul>
        </div>

        <div className="pb-3 md:pb-0">
          <h1 className="font-bold">learn a language</h1>
          <ul className="text-sm">
            <li>learn english</li>
            <li>learn english</li>
            <li>learn english</li>
          </ul>
        </div>

        <div className="pb-3 md:pb-0">
          <h1 className="font-bold">Local Language Partners</h1>
          <ul className="text-sm">
            <li>usa exchange partner</li>
            <li>usa exchange partner</li>
            <li>usa exchange partner</li>
          </ul>
        </div>

        <div className="pb-3 md:pb-0">
          <h1 className="font-bold">More Apps hello talk</h1>
          <ul className="text-sm">
            <li>hello world</li>
            <li>language class</li>
            <li>language class</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div>
            <h1 className="font-bold">Downloads</h1>
            <ul className="text-sm flex flex-col">
              <li>Android iOS</li>
              <li>Android iOS</li>
              <li>Android iOS</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Company</h1>
            <ul className="flex flex-col space-x-2">
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Follow Us</h1>
            <ul className="flex flex-col space-x-2">
              <li>facebook</li>
              <li>youtube</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className=" flex md:flex-row md:justify-between  mt-3 text-center flex-col items-center">
        <h1 className="md:mb-0 mb-3">© 2026 HelloTalk. All rights reserved.</h1>
        <div className=" underline">
          <h1>
            Privacy Policy
            <span className="px-5">|</span>
            <span>Terms of Service</span>
          </h1>
        </div>
      </div>
    </>
  );
}
