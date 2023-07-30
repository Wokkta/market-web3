"use client"; // This is a client component
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef, useState } from "react";
//import { useTranslation } from "react-i18next";

const data = [
  {
    name: "English",
    short: "EN",
    url: "https://1inch.io/img/flags/en.png",
  },
  {
    name: "简体中文",
    short: "ZH",
    url: "https://1inch.io/img/flags/zh.png",
    disabled: true,
  },
  {
    name: "Русский",
    short: "RU",
    url: "https://1inch.io/img/flags/ru.png",
    disabled: true,
  },
  {
    name: "Français",
    short: "FR",
    url: "https://1inch.io/img/flags/fr.png",
    disabled: true,
  },
  {
    name: "日本語",
    short: "JA",
    url: "https://1inch.io/img/flags/ja.png",
    disabled: true,
  },
  {
    name: "Español",
    short: "ES",
    url: "https://1inch.io/img/flags/es.png",
    disabled: true,
  },
  {
    name: "한국어",
    short: "KO",
    url: "https://1inch.io/img/flags/ko.png",
    disabled: true,
  },
  {
    name: "Bahasa Indonesia",
    short: "IND",
    url: "https://1inch.io/img/flags/ind.png",
    disabled: true,
  },
  {
    name: "Tiếng Việt",
    short: "VN",
    url: "https://1inch.io/img/flags/vn.png",
    disabled: true,
  },
  {
    name: "Українська",
    short: "UA",
    url: "https://1inch.io/img/flags/ua.png",
    disabled: true,
  },
  {
    name: "Português",
    short: "PT",
    url: "https://1inch.io/img/flags/pt.png",
    disabled: true,
  },
];

const LangaugePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  let ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  //const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    //i18n.changeLanguage(lng);
  };

  return (
    <>
      {isOpen && (
        <div ref={ref}>
          <div className="head">
            <h4 className="title">Change language</h4>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              onClick={() => setIsOpen(false)}
            >
              <g>
                <g>
                  <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256 		"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>

          <div className="grid">
            {data.map((card) => (
              <div
                key={card.short}
                className={`card ${card.disabled ? "disabled" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <img className="card_img" src={card.url} alt={card.name} />
                <p
                  onClick={() => {
                    if (card.disabled) {
                      return;
                    }
                    changeLanguage(card.short.toLowerCase());
                  }}
                >
                  {card.name} &nbsp;-&nbsp; {card.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LangaugePopup;
