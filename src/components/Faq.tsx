import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it?</AccordionTrigger>
        <AccordionContent>Yes. </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it ?</AccordionTrigger>
        <AccordionContent>wtv</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>blah</AccordionTrigger>
        <AccordionContent>idk</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
