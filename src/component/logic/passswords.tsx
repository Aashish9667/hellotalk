"use client";
import * as React from "react";
export default function Home() {
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-amber-600">
      <div className="w-80">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-md  p-2 pr-12 text-black"
          placeholder="Enter password"
        />
        {value.length > 0 && (
          <span
            onClick={() => setShow(!show)}
          
          >
            {show ? "Hide" : "Show"}
          </span>
        )}
      </div>
    </div>
  );
}
