import React from "react";
import { infoContact, openingHours, socials } from "../constants";

export const Contact = () => {
  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf" id="f-left-leaf" />

      <div className="content">
        <h2 className="capitalize">Where to find us</h2>

        {infoContact.map((item) => (
          <>
            <div>
              <h3>{item.title}</h3>
              <p>{item.address}</p>
            </div>

            <div>
              <h3>{item.contact}</h3>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>
          </>
        ))}

        <div className="">
          <h3>Open every day</h3>
          {openingHours.map((item) => (
            <p key={item.time}>
              {item.day} : {item.time}
            </p>
          ))}
        </div>

        <div className="">
          <h3>Social</h3>

          <div className="flex-center gap-5">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <img src={item.icon} alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
