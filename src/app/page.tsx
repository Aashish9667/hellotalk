
import Hero2 from "@/component/welcome/hero2";
import Hero4 from "@/component/welcome/hero4";
import RatingCards from "@/component/welcome/ratingCards";
import World from "@/component/welcome/bgworld";
import Nav from "@/component/welcome/nav";
import Fot from "@/component/welcome/fot";
import LR from "@/component/welcome/lr";
export default function MainPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav/>
      <Hero2 />
      <LR/>
      <Hero4 />
      <RatingCards />
      <World />
      <Fot/>
    </div>
  );
}
