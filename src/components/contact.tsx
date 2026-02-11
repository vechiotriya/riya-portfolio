"use client";
import React, { useState } from "react";
import Tag from "./tag";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { isEmpty, validateEmail } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  url: string;
  username: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  label,
  url,
  username,
}) => {
  return (
    <Button
      className={`bg-white flex p-4 gap-4 text-black border-2 border-black ${label === "Email" ? "hover:cursor-default" : "hover:cursor-pointer hover:scale-[90%]"}`}
      onClick={() => {
        if (label !== "Email") {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="flex p-4 justify-center items-center border-2 border-black">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-black pixel-font text-start">
          {label}
        </span>
        <span className="text-xs text-start text-gray-600">{username}</span>
      </div>
    </Button>
  );
};
const Contact = () => {
  const [visitorName, setVisitorName] = useState<string>("");
  const [visitorEmail, setVisitorEmail] = useState<string>("");
  const [visitorMessage, setVisitorMessage] = useState<string>("");
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const socials: SocialLinkProps[] = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "https://github.com/vechiotriya",
      username: "@vechiotriya",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/riya-vechiot",
      username: "riya-vechiot",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      url: "vechiotriya@gmail.com",
      username: "vechiotriya@gmail.com",
    },
  ];
  const sendEmail = async () => {
    setLoading(true);
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: visitorName, email:visitorEmail,message: visitorMessage }),
    });

  

    if (res.ok) {
      toast.success("Message sent 🎉");
    } else {
      toast.error("Something went wrong");
    }
      setLoading(false);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full py-20 px-6 bg-gray-50"
    >
      <Tag
        text="QUEST LOG"
        className="bg-linear-to-r from-lime-200 to-blue-200 mb-6 text-white"
      />
      <span className="text-gray-600 mb-8">
        Let&apos;s collaborate on your next project
      </span>
      <div className="grid grid-cols-1 px-6 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-4 md:order-2">
          <div className="border-4 border-black pixel-shadow text-black p-6 w-full">
            <h4 className="pixel-font text-md">CONNECT WITH ME</h4>
            <div className="flex flex-col gap-4 mt-4">
              {socials.map((social) => (
                <SocialLink
                  key={social.label}
                  icon={social.icon}
                  label={social.label}
                  url={social.url}
                  username={social.username}
                />
              ))}
            </div>
          </div>
          <div className="p-8 bg-black text-white border-4 border-black pixel-shadow">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <h4 className="mb-1 pixel-font text-white text-xs">LOCATION</h4>
                <p className="text-sm text-white/80">
                  Panjim, Goa, India
                  <br />
                  Open to remote and onsite opportunities
                </p>
              </div>
            </div>
            <div className="pt-4 border-t-2 border-white/20">
              <p className="text-sm text-white/80">
                Available for freelance projects and full-time opportunities.
                Let&apos;s build something amazing together!
              </p>
            </div>
          </div>
        </div>
        <div className="text-black md:order-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="visitorName" className="text-sm pixel-font">
                NAME
              </label>
              <input
                id="visitorName"
                type="text"
                placeholder="Your Name"
                className={
                  "border-4 border-black p-2 pixel-shadow w-full" +
                  (errorState.name ? " border-red-500" : "border-black")
                }
                value={visitorName}
                onChange={(e) => {
                  setVisitorName(e.target.value);
                }}
                onBlur={(e) => {
                  setErrorState((pre) => {
                    const errorMessage = isEmpty(e.target.value)
                      ? "Name cannot be empty"
                      : "";
                    return {
                      ...pre,
                      name: errorMessage,
                    };
                  });
                }}
              />
              {errorState.email && (
                <p className="text-red-500 text-xs pixel-font">
                  {errorState.name}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="visitorEmail" className="text-sm pixel-font">
                EMAIL
              </label>
              <input
                id="visitorEmail"
                type="email"
                placeholder="Your Email"
                value={visitorEmail}
                onChange={(e) => {
                  setVisitorEmail(e.target.value);
                }}
                onBlur={(e) => {
                  setErrorState((pre) => ({
                    ...pre,
                    email: validateEmail(e.target.value),
                  }));
                }}
                className={
                  "border-4 border-black p-2 pixel-shadow w-full" +
                  (errorState.email ? " border-red-500" : "border-black")
                }
              />
              {errorState.email && (
                <p className="text-red-500 text-xs pixel-font">
                  {errorState.email}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="visitorMessage" className="text-sm pixel-font">
                MESSAGE
              </label>
              <Textarea
                id="visitorMessage"
                wrap="soft"
                placeholder="Your Message"
                value={visitorMessage}
                onChange={(e) => {
                  setVisitorMessage(e.target.value);
                }}
                onBlur={(e) => {
                  setErrorState((pre) => {
                    const errorMessage = isEmpty(e.target.value)
                      ? "Message cannot be empty"
                      : "";
                    return {
                      ...pre,
                      message: errorMessage,
                    };
                  });
                }}
                aria-invalid={errorState.message ? "true" : "false"}
                className={
                  "border-4 rounded-none p-2 pixel-shadow w-full h-32 resize-none border-black" }
              ></Textarea>
              {errorState.message && (
                <p className="text-red-500 text-xs pixel-font">
                  {errorState.message}
                </p>
              )}
            </div>
            <Button
              size={"xl"}
              onClick={() => {
                sendEmail();
              }}
              disabled={(errorState.name || errorState.email || errorState.message||loading)? true : false}
              className="bg-black text-white pixel-font flex justify-center items-center gap-2 group hover:bg-white hover:text-black transition-transform active:scale-95"
            >
              <Send className="w-5 h-5 text-white group-hover:animate-bounce group-hover:text-black" />
              <span className="text-md">{loading ? "Sending..." : "SEND MESSAGE"}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
