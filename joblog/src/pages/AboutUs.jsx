import "./styles.scss"
import TeamCard from "../components/team-component/TeamCard";
import ContactForm from "../components/contact-form/ContactForm";
import Navbar from "../components/navbar/Navbar";


export default function AboutUs(){
    return(
        <div className="about-us">
            <Navbar/>
            <h1>Meet the Team</h1>
            <div className="meet-team-sect">
                <div className="TeamBlock">
                    <div className="TeamTitle">
                        <h2>Development Team</h2>
                    </div>
                    <div className="mt-1">
                        <TeamCard
                            img="./assets/img.jpeg"
                            name="David Gondo"
                            desc="David is a data-driven business strategist who specialises in creating data driven solutions involving software products and data strategy recommendations.itiis praesentium voluptatum delenitint occaecati cupiditate non provident"

                        />
                        <TeamCard
                            img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Fousseni Traore"
                            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"
                        />

                    </div>
                </div>
                <div>
                    <div className="TeamTitle">
                        <h2>Design Team</h2>
                    </div>
                    <div className="mt-1">
                        <TeamCard
                            img="https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Martha Nderitu"
                            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"

                        />

                        <TeamCard
                            img="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Busisiwe Magae"
                            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"

                        />
                    </div>
                </div>
                <div>
                    <div className="TeamTitle">
                        <h2>Documentation Team</h2>
                    </div>
                    <div className="mt-1">
                        <TeamCard
                            img="https://images.pexels.com/photos/1182857/pexels-photo-1182857.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Kevin Langat"
                            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"

                        />
                        <TeamCard
                            img="https://images.pexels.com/photos/1068207/pexels-photo-1068207.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Nancy Okoth"
                            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"
                        />
                    </div>
                </div>

            </div>
            <div className="contact_sect">
                <div className="contact-header">
                    <h1>Contact us</h1>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}