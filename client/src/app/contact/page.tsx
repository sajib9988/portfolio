import Contact from "@/components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact |Sajib ",
    description: "This is the contact page ofSajib ",
  };
const ContactPage = () => {
    return (
        <div>
            <Contact/>
        </div>
    );
};

export default ContactPage;