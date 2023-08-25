import { Breadcrumbs, styled } from "@mui/material";
import Link from "next/link";

interface BreadcrumbModuleProps {
  level: "two" | "three";
  text1: string;
  text2?: string;
  text3?: string;
  cta1: string;
  cta2?: string;
  cta3?: string;
}

const LinkMenu = styled(Link)(() => ({
  color: "#333",
  textDecoration: "none",
}));

const BreadcrumbModule: React.FC<BreadcrumbModuleProps> = ({
  level,
  text1,
  text2,
  text3,
  cta1,
  cta2,
  cta3,
}) => {
  if (level === "two")
    return (
      <Breadcrumbs separator="›">
        <LinkMenu href={cta1}>{text1}</LinkMenu>
        <LinkMenu href={cta2! || "#"}>{text2}</LinkMenu>
      </Breadcrumbs>
    );

  if (level === "three")
    return (
      <Breadcrumbs separator="›">
        <LinkMenu href={cta1}>{text1}</LinkMenu>
        <LinkMenu href={cta2! || "#"}>{text2}</LinkMenu>
        <LinkMenu href={cta3! || "#"}>{text3}</LinkMenu>
      </Breadcrumbs>
    );

  return null;
};
export default BreadcrumbModule;
