import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import { Priceing2 } from "@/components/Priceing";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Pricing" pageName="Pricing table" />
      <Priceing2 />
      <Faq2 />
    </RiddaLayout>
  );
};
export default page;
