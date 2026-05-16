"use client";

import { useState } from "react";

export default function OnChangeLogic() {
  const [selectlang, setSelectlang] = useState<string>(
    "English",
  );
  const [language, setLanguage] = useState<boolean>(false);
  const native = () => {
    setLanguage((prev) => !prev);
  };
  const choose = (lang: string) => {
    setSelectlang(lang);
    setLanguage(false);
  };
  return (
    <div className="mt-20">
      <h1 className="font-bold text-xl">language select logic</h1>
      <div>
        <h1 onClick={native} className="cursor-pointer">
          {selectlang}
        </h1>

        {language && (
          <ul className="cursor-pointer">
            <li onClick={() => choose("English")}>English</li>
            <li onClick={() => choose("Hindi")}>Hindi</li>
            <li onClick={() => choose("Chainese")}>Chainese</li>
            <li onClick={() => choose("Krian")}>Krian</li>
            <li onClick={() => choose("Urdu")}>Urdu</li>
          </ul>
        )}
      </div>
    </div>
  );
}
