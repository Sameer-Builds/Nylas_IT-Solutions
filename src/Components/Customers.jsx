import React, { useState } from "react";
import { useSiteData } from "../context/SiteDataContext";
import { MdArrowForward } from "react-icons/md";

function CompanyShowcase() {
    const { Customers } = useSiteData();
    const companies = Customers.companies;

    const [selected, setSelected] = useState(companies[1]);

    return (
        <div className="container px-6 md:px-10 py-20 mx-auto">
            <div>
                <p className="text-blue-600 text-lg">{Customers.tag}</p>
                <h2 className="pt-4 text-4xl font-bold text-[#16213E] max-w-3xl">
                    {Customers.title}
                </h2>
                <p className="pt-4 text-gray-600 text-lg max-w-xl">
                    {Customers.description} </p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
                <div className="">
                    <div className="hidden lg:flex flex-col gap-10 w-full border-r pr-10">
                        {companies.map((company, index) => (
                            <img
                                key={index}
                                src={company.logo}
                                className={`w-40 cursor-pointer transition-all duration-200
                                    ${selected.logo === company.logo
                                        ? "opacity-100"
                                        : "opacity-30 hover:opacity-80"
                                    }`}
                                onClick={() => setSelected(company)} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-6 lg:hidden">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                onClick={() => setSelected(company)}
                                className={`
                                    rounded-xl cursor-pointer flex justify-center items-center
                                    transition-all duration-200
                                    ${selected.logo === company.logo
                                        ? "border-2 border-gray-200 "
                                        : "border-2 border-gray-200"}`}>
                                <img src={company.logo} className="w-24 h-24 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-[#16213E] mb-10">
                        {selected.headline}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">
                                {selected.result_metrics[0].value}
                            </h3>
                            <p className="text-gray-600 mt-2 text-lg pr-5">
                                {selected.result_metrics[0].label} </p>
                            <button className=" flex items-center gap-2 group mt-10 text-blue-600 font-semibold text-lg">
                                {selected.cta}
                                <MdArrowForward size={20}
                                    className="  transition-transform duration-300 group-hover:translate-x-2" />
                            </button>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">
                                {selected.result_metrics[1].value} </h3>
                            <p className="text-gray-600 mt-2 text-lg pr-5">
                                {selected.result_metrics[1].label} </p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 italic leading-relaxed">
                                “{selected.quote}” </p>
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={selected.person.image}
                                    className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-[#16213E]">
                                        {selected.person.name} </p>
                                    <p className="text-gray-600 text-sm">
                                        {selected.person.role}</p>
                                </div>
                            </div>
                            <p className="font-semibold text-gray-800 mt-10">
                                {selected.products_used_title} </p>

                            <div className="flex flex-wrap gap-4 mt-3">
                                {selected.products_used.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-6 py-2 rounded-full border">
                                        {item.endsWith(".svg") ? (
                                            <img src={item} className="w-5 h-5" />
                                        ) : (
                                            <p className="text-sm text-gray-700">{item}</p>
                                        )}
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
