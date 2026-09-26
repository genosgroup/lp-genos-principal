import type { ReactNode } from "react";
import FloatingLottie from "./FloatingLottie";
import { BuildingIcon, EnvelopeIcon, InstagramIcon, LinkedinIcon, MapMarkerIcon, PhoneIcon, WhatsappIcon } from "./icons";

const listIcon = "ms-[4.5px] h-[18px] w-[18px] fill-white";

function InfoList({ className = "", items }: { className?: string; items: { icon: ReactNode; text: ReactNode }[] }) {
  return (
    <div className={`relative w-auto max-w-full min-w-0 max-mobile:self-center ${className}`}>
      <ul className="m-0 list-none p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className={`relative m-0 flex items-center justify-start p-0 text-left max-mobile:justify-center ${
              i < items.length - 1 ? "pb-[0.5px]" : ""
            } ${i > 0 ? "mt-[0.5px]" : ""}`}
          >
            <span className="relative top-[2px] flex pe-[7px] text-right">{item.icon}</span>
            <span className="self-center ps-[5px] font-poppins text-[18px] font-normal text-white max-mobile:text-[16px]">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/genos.group/", Icon: InstagramIcon },
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=5521985237650&text&type=phone_number&app_absent=0",
    Icon: WhatsappIcon,
  },
  { label: "Linkedin", href: "https://www.linkedin.com/company/10525581/admin/dashboard/", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col bg-orange">
      <div className="mx-auto flex w-full max-w-[1140px] grow flex-row gap-0 py-[50px] max-tablet:max-w-[1024px] max-tablet:flex-col max-mobile:max-w-[767px] max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center max-mobile:gap-[15px]">
        <div
          className="relative flex w-1/2 min-w-0 flex-col justify-center gap-2.5 mobile:max-tablet:w-[550px] max-tablet:items-center max-tablet:self-center max-mobile:w-[320px] max-mobile:gap-5"
        >
          <div
            className="relative flex w-full min-w-0 flex-row gap-5 max-tablet:flex-col max-tablet:items-center max-tablet:justify-center max-mobile:w-[320px]"
          >
            <InfoList
              items={[
                { icon: <MapMarkerIcon className={listIcon} />, text: "Rio de Janeiro - RJ" },
                { icon: <BuildingIcon className={listIcon} />, text: "51.241.127/0001-33" },
              ]}
            />
            <InfoList
              className="shrink-0 grow"
              items={[
                { icon: <PhoneIcon className={listIcon} />, text: <a className="text-white!">(21) 98523-7650</a> },
                { icon: <EnvelopeIcon className={listIcon} />, text: "group@genos.com.br" },
              ]}
            />
          </div>

          <div
            className="relative w-[270px] max-w-full min-w-0 text-left font-poppins text-[17px] leading-[31px] font-normal text-white max-tablet:text-center max-mobile:w-[320px] max-mobile:self-center max-mobile:text-[14px] max-mobile:leading-[1.2em]"
          >
            <p>
              Copyright 2024 © Genos Group
              <br />
              CNPJ – 51.241.127/0001-33
            </p>
          </div>
        </div>

        <div
          className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-tablet:items-center max-tablet:self-center max-mobile:w-[320px]"
        >
          <FloatingLottie />

          <div className="relative max-w-full min-w-0">
            <div className="text-center text-[0px] leading-none">
              <div className="flex w-full justify-center gap-x-[5px] [word-spacing:5px]">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <span key={label} className="inline-block break-words">
                    <a
                      href={href}
                      target="_blank"
                      className="inline-flex h-[calc(28px+0.4em)] w-[calc(28px+0.4em)] cursor-pointer items-center justify-center rounded-[5px] bg-white text-center text-[28px] leading-[28px] transition-all duration-300 hover:opacity-90 max-mobile:h-[calc(22px+0.4em)] max-mobile:w-[calc(22px+0.4em)] max-mobile:text-[22px] max-mobile:leading-[22px]"
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="h-[1em] w-[1em] fill-orange" />
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
