import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiPlus, HiMinus } from "react-icons/hi";

const icons = {
    HiPlus,
    HiMinus,
};

function FAQ({ FAQs }) {
    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {FAQs.map((item, index) => {
                const PlusIcon = icons[item.icon1];
                const MinusIcon = icons[item.icon2];

                return (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <div className="border border-gray-300 rounded-xl p-6 transition-all">
                                <Disclosure.Button className="flex w-full items-center justify-between text-left text-lg font-semibold text-blue-950">
                                    <span>{item.question}</span>

                                    {open ? (
                                        MinusIcon && <MinusIcon size={25} />
                                    ) : (
                                        PlusIcon && <PlusIcon size={25} />
                                    )}
                                </Disclosure.Button>

                                <Disclosure.Panel className="pt-4 text-blue-900 text-base">
                                    {item.answer}
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                );
            })}
        </div>
    );
}

export default FAQ;
