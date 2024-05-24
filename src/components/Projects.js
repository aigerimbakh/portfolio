import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg5 from "../assets/img/project-img5.png"
import projImg6 from "../assets/img/project-img6.png"
import projImg7 from "../assets/img/project-img7.png"
import projImg8 from "../assets/img/project-img8.png"
import projImg9 from "../assets/img/project-img9.png"
import projImg10 from "../assets/img/project-img10.png"
import projImg11 from "../assets/img/project-img11.png"
import projImg12 from "../assets/img/project-img12.png"
import projImg13 from "../assets/img/project-img13.png"
import projImg14 from "../assets/img/project-img14.png"
import projImg15 from "../assets/img/project-img15.png"
import projImg16 from "../assets/img/project-img16.png"
import projImg17 from "../assets/img/project-img17.png"


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Banner ui/ux",
      description: "Design & Development",
      imgUrl: projImg1,
      isVideo:false,
    },
    {
      title: "Jewerly site",
      description: "Design & Development",
      imgUrl: projImg2,
      isVideo:false,

    },
    {
      title: "Banner ui/ux",
      description: "Design & Development",
      imgUrl: projImg3,
      isVideo:false,

    },
    {
      title: "Paralax effect",
      description: "Design & Development",
      imgUrl: projImg5,
      isVideo:false,

    },
    {
      title: "Business Shop Tilda",
      description: "Design & Development",
      imgUrl: projImg8,
      isVideo:false,

    },
    {
      title: "Business M-International Tilda",
      description: "Design & Development",
      imgUrl: projImg4,
      isVideo:false,

    },
    {
      title: "Men 3d modelling",
      description: "Design & Development",
      imgUrl: projImg9,
      isVideo:false,

    },
    {
      title: "Business Shop Tilda",
      description: "Design & Development",
      imgUrl: projImg7,
      isVideo:false,

    },
    {
      title: "Town 3d modelling",
      description: "Design & Development",
      imgUrl: projImg12,
      isVideo:false,

    },
    {
      title: "Town 3d modelling",
      description: "Design & Development",
      imgUrl: projImg10,
      isVideo:false,

    },
    {
      title: "Town 3d modelling",
      description: "Design & Development",
      imgUrl: projImg11,
      isVideo:false,

    },
   
    {
      title: "Town 3d modelling",
      description: "Design & Development",
      imgUrl: projImg6,
      isVideo:false,

    },
   
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Мои проекты по ui/ux, Tilda, 3d modelling, js</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    <div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>

        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Мои проекты по React & Java </p>
                      <Row className="d-flex flex-wrap justify-content-center">
                      <Col size={12} sm={6} md={4} className="m-5">
                        <img src={projImg13} alt="Project 1" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
  <a 
    href="https://github.com/aigerimbakh/shopshablon" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s', // Добавлен эффект плавного перехода цвета при наведении
    }}
    onMouseEnter={(e) => e.target.style.color = 'red'} // Изменение цвета при наведении на ссылку
    onMouseLeave={(e) => e.target.style.color = 'white'} // Возвращение цвета при уходе курсора с ссылки
  >
    Code GitHub
  </a>
</p>
                        </Col> <Col size={12} sm={6} md={4} className="m-5">
                        <img src={projImg16} alt="Project 1" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
  <a 
    href="https://github.com/aigerimbakh/setting_app" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s', // Добавлен эффект плавного перехода цвета при наведении
    }}
    onMouseEnter={(e) => e.target.style.color = 'red'} // Изменение цвета при наведении на ссылку
    onMouseLeave={(e) => e.target.style.color = 'white'} // Возвращение цвета при уходе курсора с ссылки
  >
    Code GitHub
  </a>
</p>
                        </Col> <Col size={12} sm={6} md={4} className="m-5">
                        <img src={projImg14} alt="Project 1" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
  <a 
    href="https://github.com/aigerimbakh/pwaApp" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s', // Добавлен эффект плавного перехода цвета при наведении
    }}
    onMouseEnter={(e) => e.target.style.color = 'red'} // Изменение цвета при наведении на ссылку
    onMouseLeave={(e) => e.target.style.color = 'white'} // Возвращение цвета при уходе курсора с ссылки
  >
    Code GitHub
  </a>
</p>
                        </Col> <Col size={12} sm={6} md={4} className="m-5">
                        <img src={projImg15} alt="Project 1" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
  <a 
    href="https://github.com/aigerimbakh/mywebapp/tree/main" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s', // Добавлен эффект плавного перехода цвета при наведении
    }}
    onMouseEnter={(e) => e.target.style.color = 'red'} // Изменение цвета при наведении на ссылку
    onMouseLeave={(e) => e.target.style.color = 'white'} // Возвращение цвета при уходе курсора с ссылки
  >
    Code GitHub
  </a>
</p>

                        </Col>
                        <Col size={12} sm={6} md={4} className="m-5">
                        <img src={projImg17} alt="Project 1" style={{ width: '100%', height: 'auto', borderRadius: '30px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
  <a 
    href="https://github.com/aigerimbakh/ezoterika" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s', // Добавлен эффект плавного перехода цвета при наведении
    }}
    onMouseEnter={(e) => e.target.style.color = 'red'} // Изменение цвета при наведении на ссылку
    onMouseLeave={(e) => e.target.style.color = 'white'} // Возвращение цвета при уходе курсора с ссылки
  >
    Code GitHub
  </a>
</p>

                        </Col>
    
                        
                      </Row>
                      <p>Эти проекты показывают разнообразные работы по дизайну и разработке.</p>
                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
