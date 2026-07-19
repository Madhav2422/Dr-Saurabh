import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";


export default function ContactBody() {
  return (
    <section className="relative bg-[#04070c] px-6 pb-28 pt-4 sm:px-12 lg:px-16">
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
       <ContactDetails/>
        <ContactForm />
      </div>
    </section>
  );
}