import ContactDetailCard from "./ContactDetailCard";
import { contactDetails } from "./contactDetailsData";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      {contactDetails.map((detail, i) => (
        <ContactDetailCard key={detail.label} detail={detail} index={i} />
      ))}
    </div>
  );
}