import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { usetop_navCb, useFlex107Cb, useFlex103Cb, useFlex104Cb, useFlex108Cb, useFlex105Cb, useMenu4Cb, useFlex102Cb, useFlex109Cb, useFlex106Cb, useintroCb, useFlex112Cb, useFlex113Cb, usecv_submitCb, useFlex126Cb, useFlex127Cb, uselogosCb, useFlex129Cb, useFlex130Cb, useFlex131Cb, useFlex132Cb, useFlex133Cb, useFlex134Cb, useservices_topCb, useservices_bottomCb, useFlex163Cb, useFlex160Cb, useFlex161Cb, useFlex162Cb, useFlex171Cb, useFlex168Cb, useFlex169Cb, useFlex170Cb, useFlex175Cb, useFlex172Cb, useFlex173Cb, useFlex174Cb, useprojects_topCb, useFlex178Cb, useFlex179Cb, useprojects_bottomCb, useFlex208Cb, useFlex204Cb, useFlex205Cb, useFlex209Cb, useFlex206Cb, useFlex210Cb, useFlex207Cb, useFlex203Cb, useblogCb, useFlex214Cb, useFlex216Cb, useFlex215Cb, useFlex217Cb, useFlex221Cb, useFlex231Cb, useFlex230Cb, useFlex233Cb, useFlex232Cb, useFlex239Cb, useFlex238Cb, usedesignerCb, useFlex241Cb, usedesigner_bottomCb, useFlex243Cb, useFlex244Cb, useFlex245Cb, useeducationCb, useFlex248Cb, useFlex252Cb, usetestimonialsCb, useFlex251Cb, useFlex253Cb, useFlex255Cb, useFlex250Cb, usefaq_bottomCb, useFlex278Cb, useFlex274Cb, useFlex275Cb, useFlex276Cb, useFlex277Cb, useFlex283Cb, useFlex279Cb, useFlex280Cb, useFlex281Cb, useFlex282Cb, usefaq_topCb, useoutroCb, useImage51Cb, useImage52Cb, useButton7Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useImage53Cb, useButton9Cb, useTextBox124Cb, useTextBox125Cb, useImage58Cb, useImage59Cb, useImage60Cb, useImage61Cb, useTextBox126Cb, useTextBox127Cb, useUnorderedList12Cb, useTextBox134Cb, useTextBox135Cb, useImage65Cb, useImage67Cb, useTextBox138Cb, useTextBox139Cb, useUnorderedList14Cb, useImage68Cb, useTextBox140Cb, useTextBox141Cb, useUnorderedList15Cb, useTextBox142Cb, useTextBox143Cb, useTextBox144Cb, useButton11Cb, useImage89Cb, useTextBox183Cb, useTextBox178Cb, useTextBox179Cb, useImage86Cb, useImage90Cb, useTextBox184Cb, useTextBox185Cb, useImage87Cb, useTextBox180Cb, useImage88Cb, useTextBox181Cb, useTextBox182Cb, useTextBox177Cb, useImage85Cb, useTextBox187Cb, useTextBox188Cb, useImage91Cb, useTextBox189Cb, useTextBox190Cb, useTextBox191Cb, useTextBox193Cb, useImage92Cb, useTextBox207Cb, useTextBox208Cb, useImage97Cb, useTextBox206Cb, useTextBox210Cb, useTextBox211Cb, useImage98Cb, useTextBox209Cb, useTextBox219Cb, useTextBox220Cb, useTextBox218Cb, useImage101Cb, useTextBox221Cb, useTextBox222Cb, useTextBox223Cb, useImage102Cb, useImage103Cb, useImage104Cb, useImage105Cb, useTextBox225Cb, useUnorderedList20Cb, useUnorderedList21Cb, useTextBox228Cb, useImage106Cb, useImage107Cb, useTextBox231Cb, useTextBox229Cb, useTextBox232Cb, useTextBox227Cb, useTextBox226Cb, useTextBox248Cb, useImage129Cb, useTextBox249Cb, useImage130Cb, useTextBox250Cb, useImage131Cb, useTextBox251Cb, useImage132Cb, useTextBox252Cb, useImage124Cb, useTextBox253Cb, useImage125Cb, useTextBox254Cb, useImage126Cb, useImage127Cb, useTextBox255Cb, useTextBox233Cb, useTextBox234Cb, useTextBox256Cb, useTextBox257Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const top_navProps = useStore((state)=>state["Home"]["top_nav"]);
const top_navIoProps = useIoStore((state)=>state["Home"]["top_nav"]);
const top_navCb = usetop_navCb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Menu4Props = useStore((state)=>state["Home"]["Menu4"]);
const Menu4IoProps = useIoStore((state)=>state["Home"]["Menu4"]);
const Menu4Cb = useMenu4Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const introProps = useStore((state)=>state["Home"]["intro"]);
const introIoProps = useIoStore((state)=>state["Home"]["intro"]);
const introCb = useintroCb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const cv_submitProps = useStore((state)=>state["Home"]["cv_submit"]);
const cv_submitIoProps = useIoStore((state)=>state["Home"]["cv_submit"]);
const cv_submitCb = usecv_submitCb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const logosProps = useStore((state)=>state["Home"]["logos"]);
const logosIoProps = useIoStore((state)=>state["Home"]["logos"]);
const logosCb = uselogosCb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const services_topProps = useStore((state)=>state["Home"]["services_top"]);
const services_topIoProps = useIoStore((state)=>state["Home"]["services_top"]);
const services_topCb = useservices_topCb()
const services_bottomProps = useStore((state)=>state["Home"]["services_bottom"]);
const services_bottomIoProps = useIoStore((state)=>state["Home"]["services_bottom"]);
const services_bottomCb = useservices_bottomCb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["Home"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Home"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex172Props = useStore((state)=>state["Home"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["Home"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const projects_topProps = useStore((state)=>state["Home"]["projects_top"]);
const projects_topIoProps = useIoStore((state)=>state["Home"]["projects_top"]);
const projects_topCb = useprojects_topCb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex179Props = useStore((state)=>state["Home"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["Home"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const projects_bottomProps = useStore((state)=>state["Home"]["projects_bottom"]);
const projects_bottomIoProps = useIoStore((state)=>state["Home"]["projects_bottom"]);
const projects_bottomCb = useprojects_bottomCb()
const Flex208Props = useStore((state)=>state["Home"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["Home"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const Flex204Props = useStore((state)=>state["Home"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Home"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["Home"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["Home"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex209Props = useStore((state)=>state["Home"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["Home"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const Flex206Props = useStore((state)=>state["Home"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["Home"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex210Props = useStore((state)=>state["Home"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["Home"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const Flex207Props = useStore((state)=>state["Home"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["Home"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex203Props = useStore((state)=>state["Home"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["Home"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const Flex214Props = useStore((state)=>state["Home"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["Home"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const Flex216Props = useStore((state)=>state["Home"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["Home"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Flex215Props = useStore((state)=>state["Home"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["Home"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex217Props = useStore((state)=>state["Home"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["Home"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex221Props = useStore((state)=>state["Home"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["Home"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Flex231Props = useStore((state)=>state["Home"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["Home"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex230Props = useStore((state)=>state["Home"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["Home"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex233Props = useStore((state)=>state["Home"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["Home"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex232Props = useStore((state)=>state["Home"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["Home"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex239Props = useStore((state)=>state["Home"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Home"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex238Props = useStore((state)=>state["Home"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Home"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const designerProps = useStore((state)=>state["Home"]["designer"]);
const designerIoProps = useIoStore((state)=>state["Home"]["designer"]);
const designerCb = usedesignerCb()
const Flex241Props = useStore((state)=>state["Home"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["Home"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const designer_bottomProps = useStore((state)=>state["Home"]["designer_bottom"]);
const designer_bottomIoProps = useIoStore((state)=>state["Home"]["designer_bottom"]);
const designer_bottomCb = usedesigner_bottomCb()
const Flex243Props = useStore((state)=>state["Home"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["Home"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex244Props = useStore((state)=>state["Home"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["Home"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Flex245Props = useStore((state)=>state["Home"]["Flex245"]);
const Flex245IoProps = useIoStore((state)=>state["Home"]["Flex245"]);
const Flex245Cb = useFlex245Cb()
const educationProps = useStore((state)=>state["Home"]["education"]);
const educationIoProps = useIoStore((state)=>state["Home"]["education"]);
const educationCb = useeducationCb()
const Flex248Props = useStore((state)=>state["Home"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["Home"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex252Props = useStore((state)=>state["Home"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Home"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const testimonialsProps = useStore((state)=>state["Home"]["testimonials"]);
const testimonialsIoProps = useIoStore((state)=>state["Home"]["testimonials"]);
const testimonialsCb = usetestimonialsCb()
const Flex251Props = useStore((state)=>state["Home"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Home"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex253Props = useStore((state)=>state["Home"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Home"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex255Props = useStore((state)=>state["Home"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Home"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex250Props = useStore((state)=>state["Home"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Home"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const faq_bottomProps = useStore((state)=>state["Home"]["faq_bottom"]);
const faq_bottomIoProps = useIoStore((state)=>state["Home"]["faq_bottom"]);
const faq_bottomCb = usefaq_bottomCb()
const Flex278Props = useStore((state)=>state["Home"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Home"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex274Props = useStore((state)=>state["Home"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["Home"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex275Props = useStore((state)=>state["Home"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["Home"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex276Props = useStore((state)=>state["Home"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Home"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex277Props = useStore((state)=>state["Home"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Home"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex279Props = useStore((state)=>state["Home"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["Home"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex280Props = useStore((state)=>state["Home"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["Home"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex281Props = useStore((state)=>state["Home"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["Home"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex282Props = useStore((state)=>state["Home"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["Home"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const faq_topProps = useStore((state)=>state["Home"]["faq_top"]);
const faq_topIoProps = useIoStore((state)=>state["Home"]["faq_top"]);
const faq_topCb = usefaq_topCb()
const outroProps = useStore((state)=>state["Home"]["outro"]);
const outroIoProps = useIoStore((state)=>state["Home"]["outro"]);
const outroCb = useoutroCb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const UnorderedList12Props = useStore((state)=>state["Home"]["UnorderedList12"]);
const UnorderedList12IoProps = useIoStore((state)=>state["Home"]["UnorderedList12"]);
const UnorderedList12Cb = useUnorderedList12Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const UnorderedList14Props = useStore((state)=>state["Home"]["UnorderedList14"]);
const UnorderedList14IoProps = useIoStore((state)=>state["Home"]["UnorderedList14"]);
const UnorderedList14Cb = useUnorderedList14Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const UnorderedList15Props = useStore((state)=>state["Home"]["UnorderedList15"]);
const UnorderedList15IoProps = useIoStore((state)=>state["Home"]["UnorderedList15"]);
const UnorderedList15Cb = useUnorderedList15Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Image86Props = useStore((state)=>state["Home"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home"]["Image86"]);
const Image86Cb = useImage86Cb()
const Image90Props = useStore((state)=>state["Home"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["Home"]["Image90"]);
const Image90Cb = useImage90Cb()
const TextBox184Props = useStore((state)=>state["Home"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Image87Props = useStore((state)=>state["Home"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Home"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const Image88Props = useStore((state)=>state["Home"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Home"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const Image91Props = useStore((state)=>state["Home"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox207Props = useStore((state)=>state["Home"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Home"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const Image97Props = useStore((state)=>state["Home"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["Home"]["Image97"]);
const Image97Cb = useImage97Cb()
const TextBox206Props = useStore((state)=>state["Home"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Home"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const Image98Props = useStore((state)=>state["Home"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["Home"]["Image98"]);
const Image98Cb = useImage98Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Image101Props = useStore((state)=>state["Home"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["Home"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Image102Props = useStore((state)=>state["Home"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["Home"]["Image102"]);
const Image102Cb = useImage102Cb()
const Image103Props = useStore((state)=>state["Home"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Home"]["Image103"]);
const Image103Cb = useImage103Cb()
const Image104Props = useStore((state)=>state["Home"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Home"]["Image104"]);
const Image104Cb = useImage104Cb()
const Image105Props = useStore((state)=>state["Home"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Home"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const UnorderedList20Props = useStore((state)=>state["Home"]["UnorderedList20"]);
const UnorderedList20IoProps = useIoStore((state)=>state["Home"]["UnorderedList20"]);
const UnorderedList20Cb = useUnorderedList20Cb()
const UnorderedList21Props = useStore((state)=>state["Home"]["UnorderedList21"]);
const UnorderedList21IoProps = useIoStore((state)=>state["Home"]["UnorderedList21"]);
const UnorderedList21Cb = useUnorderedList21Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image106Props = useStore((state)=>state["Home"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Home"]["Image106"]);
const Image106Cb = useImage106Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox248Props = useStore((state)=>state["Home"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["Home"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const Image129Props = useStore((state)=>state["Home"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["Home"]["Image129"]);
const Image129Cb = useImage129Cb()
const TextBox249Props = useStore((state)=>state["Home"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["Home"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const Image130Props = useStore((state)=>state["Home"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["Home"]["Image130"]);
const Image130Cb = useImage130Cb()
const TextBox250Props = useStore((state)=>state["Home"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Home"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const Image131Props = useStore((state)=>state["Home"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["Home"]["Image131"]);
const Image131Cb = useImage131Cb()
const TextBox251Props = useStore((state)=>state["Home"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Home"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const Image132Props = useStore((state)=>state["Home"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["Home"]["Image132"]);
const Image132Cb = useImage132Cb()
const TextBox252Props = useStore((state)=>state["Home"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Home"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const Image124Props = useStore((state)=>state["Home"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Home"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox253Props = useStore((state)=>state["Home"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Home"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const Image125Props = useStore((state)=>state["Home"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["Home"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox254Props = useStore((state)=>state["Home"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Home"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const Image126Props = useStore((state)=>state["Home"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["Home"]["Image126"]);
const Image126Cb = useImage126Cb()
const Image127Props = useStore((state)=>state["Home"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Home"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox255Props = useStore((state)=>state["Home"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Home"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox233Props = useStore((state)=>state["Home"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Home"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox234Props = useStore((state)=>state["Home"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Home"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const TextBox256Props = useStore((state)=>state["Home"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Home"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()

  return (<>
  <Flex className="p-Home top_nav bpt" {...top_navProps} {...top_navCb} {...top_navIoProps}>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex>
<Menu className="p-Home Menu4 bpt" {...Menu4Props} {...Menu4Cb} {...Menu4IoProps}>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
</Menu>
</Flex>
</Flex>
<Flex className="p-Home intro bpt" {...introProps} {...introCb} {...introIoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home cv_submit bpt" {...cv_submitProps} {...cv_submitCb} {...cv_submitIoProps}>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home logos bpt" {...logosProps} {...logosCb} {...logosIoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Flex>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home services_top bpt" {...services_topProps} {...services_topCb} {...services_topIoProps}>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Flex>
<Flex className="p-Home services_bottom bpt" {...services_bottomProps} {...services_bottomCb} {...services_bottomIoProps}>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Flex>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<UnorderedList className="p-Home UnorderedList12 bpt" {...UnorderedList12Props} {...UnorderedList12Cb} {...UnorderedList12IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Flex>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
</Flex>
<Flex className="p-Home Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<UnorderedList className="p-Home UnorderedList14 bpt" {...UnorderedList14Props} {...UnorderedList14Cb} {...UnorderedList14IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<Flex className="p-Home Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<UnorderedList className="p-Home UnorderedList15 bpt" {...UnorderedList15Props} {...UnorderedList15Cb} {...UnorderedList15IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home projects_top bpt" {...projects_topProps} {...projects_topCb} {...projects_topIoProps}>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Flex>
<Flex className="p-Home Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home projects_bottom bpt" {...projects_bottomProps} {...projects_bottomCb} {...projects_bottomIoProps}>
<Flex className="p-Home Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Flex className="p-Home Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Image className="p-Home Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<Flex className="p-Home Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex209 bpt" {...Flex209Props} {...Flex209Cb} {...Flex209IoProps}>
<Image className="p-Home Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<TextBox className="p-Home TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<Flex className="p-Home Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<Image className="p-Home Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex208 bpt" {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<Image className="p-Home Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<Flex className="p-Home Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<Flex className="p-Home Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<Image className="p-Home Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}>
<Flex className="p-Home Flex214 bpt" {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<TextBox className="p-Home TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<Flex className="p-Home Flex216 bpt" {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<Image className="p-Home Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex215 bpt" {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<Flex className="p-Home Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<TextBox className="p-Home TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<Flex className="p-Home Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<TextBox className="p-Home TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<Image className="p-Home Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<TextBox className="p-Home TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox className="p-Home TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
<Flex className="p-Home Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<TextBox className="p-Home TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<Image className="p-Home Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex233 bpt" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<TextBox className="p-Home TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
<TextBox className="p-Home TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<Flex className="p-Home Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<Image className="p-Home Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<Flex className="p-Home Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<Image className="p-Home Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home designer bpt" {...designerProps} {...designerCb} {...designerIoProps}>
<Flex className="p-Home Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex>
<TextBox className="p-Home TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
</Flex>
<Flex className="p-Home designer_bottom bpt" {...designer_bottomProps} {...designer_bottomCb} {...designer_bottomIoProps}>
<Flex className="p-Home Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Image className="p-Home Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
</Flex>
<Flex className="p-Home Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<Image className="p-Home Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Flex>
<Flex className="p-Home Flex245 bpt" {...Flex245Props} {...Flex245Cb} {...Flex245IoProps}>
<Image className="p-Home Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<Image className="p-Home Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home education bpt" {...educationProps} {...educationCb} {...educationIoProps}>
<Flex className="p-Home Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<UnorderedList className="p-Home UnorderedList20 bpt" {...UnorderedList20Props} {...UnorderedList20Cb} {...UnorderedList20IoProps}/>
</Flex>
<Flex className="p-Home Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<UnorderedList className="p-Home UnorderedList21 bpt" {...UnorderedList21Props} {...UnorderedList21Cb} {...UnorderedList21IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home testimonials bpt" {...testimonialsProps} {...testimonialsCb} {...testimonialsIoProps}>
<Flex className="p-Home Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
</Flex>
<Flex className="p-Home Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Image className="p-Home Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<Flex className="p-Home Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<Flex className="p-Home Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home faq_top bpt" {...faq_topProps} {...faq_topCb} {...faq_topIoProps}>
<TextBox className="p-Home TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
<TextBox className="p-Home TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
</Flex>
<Flex className="p-Home faq_bottom bpt" {...faq_bottomProps} {...faq_bottomCb} {...faq_bottomIoProps}>
<Flex className="p-Home Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex className="p-Home Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<TextBox className="p-Home TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<Image className="p-Home Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
</Flex>
<Flex className="p-Home Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<TextBox className="p-Home TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<Image className="p-Home Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
</Flex>
<Flex className="p-Home Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<TextBox className="p-Home TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<Image className="p-Home Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
</Flex>
<Flex className="p-Home Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<TextBox className="p-Home TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<Image className="p-Home Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex className="p-Home Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<TextBox className="p-Home TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<Image className="p-Home Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
</Flex>
<Flex className="p-Home Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<TextBox className="p-Home TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
<Image className="p-Home Image130 bpt" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
</Flex>
<Flex className="p-Home Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<TextBox className="p-Home TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<Image className="p-Home Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
</Flex>
<Flex className="p-Home Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-Home TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<Image className="p-Home Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home outro bpt" {...outroProps} {...outroCb} {...outroIoProps}>
<TextBox className="p-Home TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox className="p-Home TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex>
  </>);
}
