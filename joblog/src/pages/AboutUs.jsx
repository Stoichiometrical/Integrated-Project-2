 import "./styles.scss"
import PageNotFound from "../components/404/PageNotFound";
import TeamCard from "../components/team-component/TeamCard";
import ContactForm from "../components/contact-form/ContactForm";
import Navbar from "../components/navbar/Navbar";


export default function AboutUs(){
    return(
        <div className="about-us">
            <Navbar/>
   {/*<PageNotFound/>*/}

            <h1>Meet the Team</h1>
            <div className="meet-team-sect">


                <div className="mt-1">
                    <TeamCard
                        img="./assets/img.jpeg"
                        name="David Gondo"
                        desc="David Tendai Gondo is a data-driven business strategist whose mission is creating solutions that optimize systems and increase value. Leveraging skills in full stack development, product management, data science, and business analytics, David provides software and strategy to position entities for success. He identifies areas for business optimization through comprehensive data analysis to improve outcomes. David excels at developing innovative recommendations and data-driven software that strategically drives organizational efficiency and effectiveness. His passion for data-informed decision making enables effective communication of complex insights for executable plans to achieve key objectives"

                    />
                    <TeamCard
                        img="./assets/fous.jpg"
                        name="Foussane Traore"
                        desc="Foussane is a driven computing student with a strong interest in data science and web development. He is currently honing his skills in Python, R, and JavaScript and has completed coursework in machine learning, data visualization, and full-stack development. Foussane has a natural aptitude for coding and mathematics. He enjoys finding insightful patterns in data and building intuitive web interfaces. With his combination of technical abilities and passion for the field, Foussane has bright prospects for launching a successful career in data science or web development upon graduation. His strong work ethic and eagerness to learn new technologies make him well-positioned to thrive in the dynamic world of computer science"
                    />

                </div>
                <div className="mt-1">
                    <TeamCard
                        img="./assets/martha.jpg"
                        name="Martha Nderitu"
                        desc="An accomplished front-end developer dedicated to crafting seamless user experiences, Martha brings innovative UI/UX design and rigorous research to every project. Throughout her journey collaborating on diverse engagements, she has enriched her skills and honed her problem-solving abilities. Now driven by an insatiable curiosity, Martha is specializing in the captivating field of Natural Language Processing to revolutionize human-computer interactions. With a passion for empowering effortless communication, she is determined to take on new challenges and contribute meaningfully to the future of technology by leveraging NLP's potential for machines to comprehend interactions with people"

                    />

                    <TeamCard
                        img="./assets/langat.jpg"
                        name="Kevin Langat"
                        desc="Driven by a passion for data analysis, Langat Kevin excels in data cleaning, manipulation, and insightful analysis. Currently in his third year studying Computing at African Leadership College, Mauritius, Kevin is proficient in Python, R, SQL, and Excel, effectively utilizing data tools to provide stakeholders with key insights. Skilled in clear data visualization and communication, he remains dedicated to continuous learning in order to leverage data to inform decision-making. With his expertise in supporting data-driven strategies, Kevin aspires to significantly contribute his analytical skills to organizations and make valuable impacts."

                    />
                </div>
                <div className="mt-1">
                    <TeamCard
                        img="https://images.pexels.com/photos/1182857/pexels-photo-1182857.jpeg?auto=compress&cs=tinysrgb&w=600"
                        name="Busisiwe Magae"
                        desc="Busisiwe is a passionate computing student fascinated by the ever-evolving world of technology. Enamored with design and user experiences, she delves into Human-Computer Interaction principles. Beyond her studies, Busisiwe actively researches advancements and crafts appealing interfaces. With boundless enthusiasm stemming from an early curiosity of computers, she aspires to positively impact lives by creating user-centric solutions. Driven by a love for blending technology and creativity, Busisiwe finds joy in exploring usability and user-centered design. Her journey has been one of continuous learning, fueled by curiosity. Busisiwe is poised to contribute to the future of technology through her focus on human-focused design"

                    />
                    <TeamCard
                        img="https://images.pexels.com/photos/1068207/pexels-photo-1068207.jpeg?auto=compress&cs=tinysrgb&w=600"
                        name="Nancy Okoth"
                        desc="Nancy Rokia is a 21-year-old technology enthusiast from Kenya driven by the transformative potential of tech. Graduating during the pandemic, she embraced online learning in digital marketing and basic coding. Her passion for Computer Science led her to African Leadership University on her father's advice, where she found an eye-opening, authentic journey. Fascinated by immersive technology and cybersecurity, Nancy focuses on leveraging these fields to benefit her African community. Her entrepreneurial spirit drives her to seek tactical knowledge while promoting inclusivity and diversity, enriching her mind as she aims to enact positive change."
                    />
                </div>

            </div>

            <div className="contact-us">
                <div className="contact-header">
                    Contact Us
                </div>

            </div>
            <div className="form-sect">
                <ContactForm/>
            </div>



        </div>
    )
}