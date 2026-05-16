import Hero from "@/component/welcome/firstHeroSec";
import LeftRightLayout from "@/component/welcome/LeftRightHeroSec";
import QRcodeHover from "@/component/welcome/qrcode";
import RatingCards from "@/component/welcome/ratingCards";
import BgWorld from "@/component/welcome/bgworld";
export default function MainPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <LeftRightLayout />
      <QRcodeHover />
      <RatingCards />
      <BgWorld />
      
    </div>
  );
}
