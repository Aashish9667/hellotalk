"use client";
import { useState } from "react";
const content = {
  English: {
    title: "How to learn languages",
    desc: "HelloTalk is a language exchange app...",
  },
  Hindi: {
    title: "भाषाएँ कैसे सीखें",
    desc: "HelloTalk एक भाषा विनिमय ऐप है...",
  },
  Chinese: {
    title: "如何学习语言",
    desc: "HelloTalk 是一款语言交换应用程序...",
  },
};

export default function Lang() {
  const [show, setShow] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] =
    useState<keyof typeof content>("Hindi");

  return (
    <div className="p-5">
      <h1 className="cursor-pointer border p-2" onClick={() => setShow(!show)}>
        Choose Native Language: <strong>{selectedLang}</strong>
      </h1>

      {show && (
        <ul className="border p-2 absolute bg-white shadow">
          {Object.keys(content).map((item, e) => (
            <li
              key={e}
              className="cursor-pointer hover:bg-blue-100 p-1"
              onClick={() => {
                setSelectedLang(item as keyof typeof content);
                setShow(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-10">
        <h1 className="text-2xl font-bold">{content[selectedLang].title}</h1>
        <p className="text-lg text-gray-500 mt-5">
          {content[selectedLang].desc}
        </p>
      </div>
    </div>
  );
}
