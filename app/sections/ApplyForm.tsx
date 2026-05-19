"use client";
import { useState } from "react";

export default function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    hear: "",
    linkedin: "",
    startDate: "",
    description: "",
    resume: null as File | null,
  });

  const inputStyle =
    "w-full h-[45px] mb-5 bg-white/10 border border-black/30 text-black/80 text-[16px] px-4 rounded-md outline-none focus:border-black/60 focus:bg-white/20 placeholder:text-black/60 transition-all";

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: any) => {
    setForm((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess("");

    const formData = new FormData();
    formData.append("name", form.firstName);
    formData.append("fullName", form.lastName);
    formData.append("email", form.email);
    formData.append("phonenumber", form.phone);
    formData.append("hereAbout", form.hear);
    formData.append("linkedin", form.linkedin);
    formData.append("date", form.startDate);
    formData.append("message", form.description);
    if (form.resume) formData.append("resume", form.resume);

    const res = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess("Application submitted successfully");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        hear: "",
        linkedin: "",
        startDate: "",
        description: "",
        resume: null,
      });
    } else {
      setSuccess("Something went wrong ");
    }
  };

  return (
    <section className="bg-[#E7D4B9] py-16 sm:py-20 lg:py-24 flex justify-center px-4">
      <div
        className="
          w-full max-w-[1400px]
          rounded-[30px] sm:rounded-[40px] lg:rounded-[50px]
          shadow-[0px_0px_19px_-3px_#000]
          px-5 sm:px-10 lg:px-[40px]
          py-16 sm:py-20 lg:py-[90px]
        "
        style={{ background: "radial-gradient(#F4C688, #9B6B27)" }}
      >
        {/* INPUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name*" className={inputStyle} />
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name*" className={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address*" type="email" className={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number*" className={inputStyle} />
          <input name="position" value={form.position} onChange={handleChange} placeholder="Position Applied*" className={inputStyle} />

          <select name="hear" value={form.hear} onChange={handleChange} className={inputStyle}>
            <option value="">How did you hear about us?</option>
            <option>LinkedIn</option>
            <option>Indeed</option>
            <option>Referral</option>
            <option>Website</option>
          </select>

          <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn Profile" className={inputStyle} />
          <input name="startDate" value={form.startDate} onChange={handleChange} type="date" className={inputStyle} />
        </div>

        {/* TEXTAREA */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          placeholder="Describe why we should hire you*"
          className="w-full mt-2 mb-8 bg-white/10 border border-black/30 text-black/80 text-[16px] px-4 py-3 rounded-md outline-none focus:border-black/60 focus:bg-white/20"
        />

        {/* FILE UPLOAD */}
        <div className="mb-8 sm:mb-10">
          <p className="text-center text-base sm:text-lg text-black/80 mb-3 font-medium">
            Upload Your Resume
          </p>

          <label className="block w-full cursor-pointer">
            <input type="file" onChange={handleFile} className="hidden" />
            <div className="border-2 border-dashed border-[#3e2d16] bg-white rounded-md py-4 text-center text-sm text-black/80">
              {form.resume ? form.resume.name : "Click to upload resume"}
            </div>
          </label>
        </div>

        {/* BUTTON */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full sm:w-auto px-10 sm:px-12 py-3 rounded-full font-semibold text-black bg-white hover:brightness-110 transition"
          >
            {loading ? "Sending..." : "Apply Now →"}
          </button>

          {success && (
            <p className="text-black font-medium text-center sm:text-left">
              {success}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}