"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setMsg("Message sent successfully ");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setMsg("Something went wrong ");
    }
  };

  const inputStyle =
    "h-[56px] px-5 bg-[#e7e7e7] rounded-md outline-none border border-black/20 text-[15px]";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <input name="firstname" value={form.firstname} onChange={handleChange} placeholder="First Name" className={inputStyle}/>
        <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Last Name" className={inputStyle}/>
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="E-Mail Address" className={inputStyle}/>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className={inputStyle}/>
      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Type your message here"
        rows={6}
        className="w-full p-5 bg-[#e7e7e7] rounded-md outline-none border border-black/20 text-[15px] mb-6"
      />

      <button
        disabled={loading}
        className="px-6 py-3 rounded-[40px] font-bold text-black hover:brightness-110"
        style={{ background: "radial-gradient(#F4C688, #9B6B27)" }}
      >
        {loading ? "Sending..." : "SUBMIT NOW"}
      </button>

      {msg && <p className="mt-4">{msg}</p>}
    </form>
  );
}