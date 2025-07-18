import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import { Priceing2 } from "@/components/Priceing";
import DevGenixLayout from "@/layout/DevGenixLayout";
const page = () => {
  return (
    <DevGenixLayout>
      <PageBanner pageTitle="Pricing" pageName="Pricing table" />
      <Priceing2 />
      <Faq2 />
    </DevGenixLayout>
  );
};
export default page;
