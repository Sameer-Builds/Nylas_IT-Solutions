import React, { useState } from "react";
import { useSiteData } from "../context/SiteDataContext";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

function AccordionSection() {
    const { AccordionSection } = useSiteData();
    const [expanded, setExpanded] = useState(0);

    const handleChange = (index) => (e, isExpanded) => {
        if (!isExpanded) return;
        setExpanded(index);
    };
    return (
        <section className="container px-6 py-10 mx-auto">
            <div className="pb-10">
                <p className="text-center text-4xl tracking-wide font-semibold">
                    {AccordionSection.title}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <div className="space-y-4">
                    {AccordionSection.Accordion.map((item, index) => {
                        const isOpen = expanded === index;

                        return (
                            <Accordion
                                key={index}
                                expanded={isOpen}
                                onChange={handleChange(index)}
                                disableGutters
                                elevation={0}
                                sx={{
                                    borderBottom: "1px solid #e5e7eb",
                                    "&:before": { display: "none" },
                                }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    {!isOpen && (
                                        <Typography sx={{ fontSize: "1.25rem", fontWeight: 500 }}>
                                            {item.title}
                                        </Typography>

                                    )}
                                </AccordionSummary>

                                <AccordionDetails>
                                    <div className="bg-[#e8f0ff] rounded-2xl p-6 shadow-sm">
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {item.title}
                                        </h3>
                                        <div className="mb-6 block lg:hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full max-w-md mx-auto rounded-xl object-contain" />
                                        </div>
                                        <p className="text-gray-700 mb-6 text-lg">
                                            {item.summary}
                                        </p>
                                        <button className="text-blue-600 font-medium flex items-center gap-2 text-lg group">
                                            {item.caption}
                                            <span className="text-xl transform transition-all duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </div>
                <div className="hidden lg:flex justify-center">
                    <Fade key={expanded} in timeout={400}>
                        <img
                            src={AccordionSection.Accordion[expanded]?.image}
                            alt="accordion visual"
                            className="max-w-[450px] lg:max-w-[520px] w-full h-auto object-contain drop-shadow-xl"
                        />
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default AccordionSection;
