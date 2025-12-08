import React, { useState } from "react";
import { useSiteData } from "../context/SiteDataContext";

function CompanyShowcase() {
    const { Customers } = useSiteData();
    const companies = Customers.companies;

    const [selected, setSelected] = useState(companies[1]);

    return (
        <div className="container px-10 py-20 mx-auto">
            <div>
                <p className="text-blue-600 text-lg">{Customers.tag}</p>
                <h2 className="pt-4 text-4xl font-bold text-[#16213E] max-w-3xl">
                    {Customers.title}
                </h2>
                <p className="pt-4 text-gray-600 text-lg max-w-xl">
                    {Customers.description}
                </p>
            </div>
            <div className="flex px-10 gap-20 mt-20">

                <div className="flex flex-col gap-15 w-1/4 border-r pr-10">
                    {companies.map((company, index) => (
                        <img
                            key={index}
                            src={company.logo}
                            className={`w-45 cursor-pointer transition-all duration-200
                                ${selected.logo === company.logo
                                    ? "opacity-100"
                                    : "opacity-30 hover:opacity-80"
                                }`}
                            onClick={() => setSelected(company)}
                        />
                    ))}
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="w-3xl">

                    {/* HEADLINE (you were missing this!) */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-[#16213E]  ">
                            {selected.headline}
                        </h1>
                    </div>

                    {/* 3-column layout */}
                    <div className="grid grid-cols-3 ">

                        {/* COLUMN 1 — Metric 1 + CTA */}
                        <div>
                            <h3 className="text-2xl font-bold text-blue-600">
                                {selected.result_metrics[0].value}
                            </h3>
                            <p className="text-gray-600 mt-2 text-xl pr-5 ">
                                {selected.result_metrics[0].label}
                            </p>

                            {/* CTA */}
                            <button className="mt-10 text-blue-600 font-semibold text-lg">
                                {selected.cta}
                            </button>
                        </div>

                        {/* COLUMN 2 — Metric 2 */}
                        <div className="">
                            <h3 className="text-2xl font-bold text-blue-600">
                                {selected.result_metrics[1].value}
                            </h3>
                            <p className="text-gray-600 mt-2 text-xl  pr-5">
                                {selected.result_metrics[1].label}
                            </p>
                        </div>

                        {/* COLUMN 3 — Quote + Person + Products */}
                        <div className="max-w-lg ">
                            {/* Quote */}
                            <p className="text-lg text-gray-700 italic leading-relaxed">
                                “{selected.quote}” </p>
                            {/* Person */}
                            <div className="flex items-center gap-4 mt-6">
                                <img src={selected.person.image || "person-placeholder.jpg"}
                                    className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-[#16213E]"> {selected.person.name} </p>
                                    <p className="text-gray-600 text-sm"> {selected.person.role} </p>
                                </div>
                            </div>
                            {/* Products Used */}
                            <p className="font-semibold text-gray-800 mt-10">
                                {selected.products_used_title} </p>
                            <div className="flex flex-wrap gap-4 mt-3">
                                {selected.products_used.map((item, idx) => (
                                    <div key={idx}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border" >
                                        {item.endsWith(".svg") ?
                                            (<img src={item} className="w-5 h-5" />) :
                                            (<p className="text-sm text-gray-700">{item}</p>)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyShowcase;
