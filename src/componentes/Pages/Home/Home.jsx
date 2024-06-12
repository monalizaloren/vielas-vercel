import Header from "../../Header/Header";
import Input from "../../Input/Input";
import Banner from "../../Banner/Banner"
import Footer from "../../Footer/Footer";
import LinkShortcut from "../../LinkShortcut/LinkShortcut";
import Collection from "../../Collection/Collection";
import PlanSelector from "../Planos/PlanSelector";



function home() {
  return (
    <div>
    <Header/>
    <Input/>
    <LinkShortcut/>
    <Banner/>
    <Collection/>
    <Footer/>
    <PlanSelector/>
    
    </div>
  );
}

export default home;
