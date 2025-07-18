"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import { riddaUtils } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const RiddaLayout = ({
  children,
  bodyClass = "dark-version",
  header,
  footer,
  menus,
}) => {
  useEffect(() => {
    riddaUtils.animation();
    riddaUtils.fixedHeader();
    riddaUtils.scrollTop();
    document.querySelector("body").classList = bodyClass;
  }, []);

  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} menus={menus} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default RiddaLayout;
