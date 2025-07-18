import { Faq3 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import DevGenixLayout from "@/layout/DevGenixLayout";
const page = () => {
  return (
    <DevGenixLayout>
      <PageBanner pageTitle="FAQ" pageName="FAQs" />
      <Faq3 />
    </DevGenixLayout>
  );
};
export default page;
