import "./styles.scss"
import HomeHero from "../components/home-hero/HomeHero";
import Services from "../components/services/Services";
import DocDesc from "../components/doc-desc/DocDesc";


export default function Home(){

    return(
        <>
            <HomeHero/>
            <Services/>
            <DocDesc/>
            <hr/>
            <h3 style={{textAlign:"center",color:"white"}}>JobSpaces</h3>
        </>
    )
}