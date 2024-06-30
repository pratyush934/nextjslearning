"use client";

import React, { FormEvent, FormEventHandler, useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const placeholders = [
  "What's the first rule of Fight Club?",
  "Who is Tyler Durden?",
  "Where is Andrew Laeddis Hiding?",
  "Write a Javascript method to reverse a string",
  "How to assemble your own PC?",
];
const MusicSchoolContactUs = () => {
  let valuevalue : string =  null;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valuevalue = e.target.value
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(valuevalue);
    // console.log("submitted");
  };

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Ho gaya ji  ${email} , ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-800 py-12 pt-36">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-neutral-500 font-bold text-2xl mb-20 sm:mb-10 text-center sm:text-4xl dark:text-white ">
          Enter Your Name with Love💕
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-6 mt-10">
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-12 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      <Meteors number={50} />
    </div>
  );
};

export default MusicSchoolContactUs;
