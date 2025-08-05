import React, { useState } from 'react';
import { Container, Navbar, Nav, Carousel, Card, Form, Button, Row, Col, Accordion, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      contact: '',
      message: '',
      service: ''
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="white" expand="lg" sticky="top" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            <span className="text-primary">APEX </span>ENTERPRISES <span className="text-warning"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="mx-2 text-dark fw-medium">Home</Nav.Link>
              <Nav.Link href="#services" className="mx-2 text-dark fw-medium">Services</Nav.Link>
              <Nav.Link href="#gallery" className="mx-2 text-dark fw-medium">Our Work</Nav.Link>
              <Nav.Link href="#about" className="mx-2 text-dark fw-medium">About</Nav.Link>
              <Nav.Link href="#contact" className="mx-2 text-dark fw-medium">Contact</Nav.Link>
              <Button 
                variant="primary" 
                className="ms-3 px-4 fw-medium" 
                onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Quote
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section position-relative overflow-hidden">
        <div className="hero-overlay position-absolute w-100 h-100"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <Container className="hero-content position-relative">
          <Row className="align-items-center py-5">
            <Col lg={7} className="py-5">
              <h1 className="display-4 fw-bold text-white mb-4">
                <span className="text-primary">Waterproofing</span> & <span className="text-warning">Painting</span> Experts
              </h1>
              <p className="lead text-white mb-5 fs-4">
                Protecting and beautifying your property with premium solutions tailored to your needs. 15+ years of trusted service.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-4 fw-medium"
                  onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Free Quote
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="px-4 fw-medium"
                  href="#services"
                >
                  Our Services
                </Button>
              </div>
              <div className="trust-badges mt-5 d-flex flex-wrap gap-3">
                <div className="badge-item d-flex align-items-center">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>15+ Years Experience</span>
                </div>
                <div className="badge-item d-flex align-items-center">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>500+ Happy Clients</span>
                </div>
                <div className="badge-item d-flex align-items-center">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>10-Year Warranty</span>
                </div>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block">
              <div className="hero-image-container position-relative">
                <div 
                  className="hero-main-image rounded-4 shadow-lg" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154')" }}
                ></div>
                <div className="hero-secondary-image rounded-4 shadow-lg" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d')" }}>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 position-relative">
        <div className="services-bg-overlay position-absolute w-100 h-100"></div>
        <Container className="position-relative">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-4">Our <span className="text-primary">Premium</span> Services</h2>
            <p className="text-muted fs-5">Innovative solutions for complete property protection and beautification</p>
          </div>

          {/* Waterproofing Services */}
          <div className="service-category mb-5">
            <Row className="align-items-center">
              <Col lg={5} className="order-lg-2 mb-4 mb-lg-0">
                <div className="service-image-container">
                  <div 
                    className="service-main-image rounded-4 shadow-lg" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600121848594-d8644e57abab')" }}
                  ></div>
                  <div className="service-badge bg-primary text-white shadow">
                    <i className="fas fa-shield-alt fa-2x"></i>
                  </div>
                </div>
              </Col>
              <Col lg={7} className="order-lg-1">
                <div className="pe-lg-5">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box bg-primary text-white me-3">
                      <i className="fas fa-droplet-slash fa-2x"></i>
                    </div>
                    <h3 className="mb-0 display-5">Advanced Waterproofing Systems</h3>
                  </div>
                  <p className="lead fs-4">
                    Cutting-edge waterproofing technologies that provide complete protection against water damage, leaks, and moisture.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="service-feature d-flex mb-3">
                        <div className="feature-icon me-3 text-primary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Liquid Membrane</h6>
                          <p className="small text-muted mb-0">Flexible, seamless coating for all surfaces</p>
                        </div>
                      </div>
                      <div className="service-feature d-flex mb-3">
                        <div className="feature-icon me-3 text-primary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Crystalline Technology</h6>
                          <p className="small text-muted mb-0">Self-healing concrete protection</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-feature d-flex mb-3">
                        <div className="feature-icon me-3 text-primary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Polyurethane Coating</h6>
                          <p className="small text-muted mb-0">High-performance chemical resistance</p>
                        </div>
                      </div>
                      <div className="service-feature d-flex">
                        <div className="feature-icon me-3 text-primary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Green Roof Systems</h6>
                          <p className="small text-muted mb-0">Eco-friendly vegetative solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline-primary" className="mt-3 px-4" size="lg">
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          {/* Painting Services */}
          <div className="service-category">
            <Row className="align-items-center">
              <Col lg={5} className="mb-4 mb-lg-0">
                <div className="service-image-container">
                  <div 
                    className="service-main-image rounded-4 shadow-lg" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a')" }}
                  ></div>
                  <div className="service-badge bg-warning text-white shadow">
                    <i className="fas fa-palette fa-2x"></i>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="ps-lg-5">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box bg-warning text-white me-3">
                      <i className="fas fa-brush fa-2x"></i>
                    </div>
                    <h3 className="mb-0 display-5">Premium Painting Solutions</h3>
                  </div>
                  <p className="lead fs-4">
                    Transform your spaces with our high-quality painting services using eco-friendly, durable paints and techniques.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="service-feature d-flex mb-3">
                        <div className="feature-icon me-3 text-warning">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Color Consultation</h6>
                          <p className="small text-muted mb-0">Expert advice for perfect color schemes</p>
                        </div>
                      </div>
                      <div className="service-feature d-flex mb-3">
                        <div className="feature-icon me-3 text-warning">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Texture Finishes</h6>
                          <p className="small text-muted mb-0">Custom wall textures & effects</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-feature d-flex mb-3">
                        <div className="feature-icon me-3 text-warning">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Anti-Microbial Coating</h6>
                          <p className="small text-muted mb-0">Hygienic, germ-resistant paints</p>
                        </div>
                      </div>
                      <div className="service-feature d-flex">
                        <div className="feature-icon me-3 text-warning">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Thermal Reflective</h6>
                          <p className="small text-muted mb-0">Energy-saving temperature control</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline-warning" className="mt-3 px-4" size="lg">
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          {/* Service Benefits */}
          <Row className="mt-5 pt-4">
            <Col md={4} className="mb-4">
              <div className="benefit-card text-center p-4 h-100 rounded-4 shadow-sm">
                <div className="benefit-icon bg-primary bg-opacity-10 text-primary mx-auto mb-4">
                  <i className="fas fa-award fa-2x"></i>
                </div>
                <h4 className="fw-bold">Quality Assurance</h4>
                <p className="mb-0">All our services come with a 10-year quality guarantee for your peace of mind.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="benefit-card text-center p-4 h-100 rounded-4 shadow-sm">
                <div className="benefit-icon bg-primary bg-opacity-10 text-primary mx-auto mb-4">
                  <i className="fas fa-leaf fa-2x"></i>
                </div>
                <h4 className="fw-bold">Eco-Friendly</h4>
                <p className="mb-0">We use only environmentally safe materials that are non-toxic and sustainable.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="benefit-card text-center p-4 h-100 rounded-4 shadow-sm">
                <div className="benefit-icon bg-primary bg-opacity-10 text-primary mx-auto mb-4">
                  <i className="fas fa-clock fa-2x"></i>
                </div>
                <h4 className="fw-bold">Quick Turnaround</h4>
                <p className="mb-0">Efficient processes ensure minimal disruption to your daily routine.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section - Our Work */}
      <section id="gallery" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-4">Our <span className="text-primary">Work</span> Gallery</h2>
            <p className="text-muted fs-5">See our recent projects and transformations</p>
          </div>
          
          <Row className="g-4">
            <Col md={4} className="gallery-col">
              <div className="gallery-item rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                  alt="Exterior Waterproofing" 
                  className="img-fluid"
                />
                <div className="gallery-overlay d-flex flex-column justify-content-end">
                  <div className="gallery-content p-4">
                    <h5 className="text-white fw-bold">Exterior Waterproofing</h5>
                    <p className="text-white mb-0">Commercial building in downtown</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
              <div className="gallery-item rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a" 
                  alt="Interior Painting" 
                  className="img-fluid"
                />
                <div className="gallery-overlay d-flex flex-column justify-content-end">
                  <div className="gallery-content p-4">
                    <h5 className="text-white fw-bold">Interior Painting</h5>
                    <p className="text-white mb-0">Modern apartment transformation</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
              <div className="gallery-item rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab" 
                  alt="Roof Waterproofing" 
                  className="img-fluid"
                />
                <div className="gallery-overlay d-flex flex-column justify-content-end">
                  <div className="gallery-content p-4">
                    <h5 className="text-white fw-bold">Roof Waterproofing</h5>
                    <p className="text-white mb-0">Industrial facility protection</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
              <div className="gallery-item rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" 
                  alt="Bathroom Waterproofing" 
                  className="img-fluid"
                />
                <div className="gallery-overlay d-flex flex-column justify-content-end">
                  <div className="gallery-content p-4">
                    <h5 className="text-white fw-bold">Bathroom Waterproofing</h5>
                    <p className="text-white mb-0">Luxury hotel renovation</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
              <div className="gallery-item rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154" 
                  alt="Exterior Painting" 
                  className="img-fluid"
                />
                <div className="gallery-overlay d-flex flex-column justify-content-end">
                  <div className="gallery-content p-4">
                    <h5 className="text-white fw-bold">Exterior Painting</h5>
                    <p className="text-white mb-0">Historic home restoration</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
              <div className="gallery-item rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea" 
                  alt="Decorative Finishes" 
                  className="img-fluid"
                />
                <div className="gallery-overlay d-flex flex-column justify-content-end">
                  <div className="gallery-content p-4">
                    <h5 className="text-white fw-bold">Decorative Finishes</h5>
                    <p className="text-white mb-0">Custom wall textures</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Button variant="primary" size="lg" className="px-4">
              View More Projects
            </Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
     {/* About Section */}
<section id="about" className="py-5 bg-light">
  <Container>
    <Row className="align-items-center">
      <Col lg={6} className="mb-4 mb-lg-0">
        <h2 className="fw-bold mb-4 display-5">
          Trusted <span className="text-primary">Waterproofing</span> & <span className="text-warning">Painting</span> Experts Since 2008
        </h2>
        
        <div className="mb-4">
          <p className="lead">
            AquaShield Paints is a fully licensed and insured contractor specializing in premium waterproofing and painting solutions for residential and commercial properties.
          </p>
          
          <p>
            Founded by John Peterson, a master painter with 25+ years of experience, we've grown from a small local team to one of the region's most trusted contractors. Our certified technicians combine time-tested techniques with cutting-edge materials to deliver lasting results.
          </p>
          
          <p>
            We serve homeowners, property managers, and businesses across the tri-state area, completing over 500 projects with a 100% satisfaction guarantee.
          </p>
        </div>
        
        <div className="row g-3 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm h-100">
              <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-3 me-3">
                <i className="fas fa-medal fa-lg"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Quality Craftsmanship</h5>
                <p className="small mb-0">Premium materials, meticulous application</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm h-100">
              <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-3 me-3">
                <i className="fas fa-certificate fa-lg"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Certified Professionals</h5>
                <p className="small mb-0">IWPA & EPA Lead-Safe certified</p>
              </div>
            </div>
          </div>
        </div>
        
        <Button variant="primary" size="lg" className="mt-2">
          Meet Our Team
        </Button>
      </Col>
      
      <Col lg={6}>
        <div className="position-relative">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
            alt="Our team working" 
            className="img-fluid rounded-3 shadow-lg mb-3" 
          />
          <div className="bg-white p-4 rounded-3 shadow-sm position-absolute bottom-0 start-0 m-3">
            <div className="d-flex">
              <div className="border-end border-2 pe-3 me-3 border-primary">
                <h3 className="fw-bold text-primary mb-0">15+</h3>
                <p className="mb-0 small">Years Experience</p>
              </div>
              <div>
                <h3 className="fw-bold text-primary mb-0">500+</h3>
                <p className="mb-0 small">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    
    {/* Certifications */}
    <Row className="mt-5 pt-4">
      <Col xs={12} className="text-center mb-4">
        <h3 className="fw-bold">Our <span className="text-primary">Certifications</span></h3>
        <p className="text-muted">Meeting the highest industry standards</p>
      </Col>
      <Col md={4} className="text-center mb-3">
        <div className="p-4 h-100">
          <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-3 d-inline-block">
            <i className="fas fa-shield-alt fa-2x"></i>
          </div>
          <h5>IWPA Certified</h5>
          <p className="small text-muted mb-0">
            International Waterproofing Association certified installers
          </p>
        </div>
      </Col>
      <Col md={4} className="text-center mb-3">
        <div className="p-4 h-100">
          <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-3 d-inline-block">
            <i className="fas fa-leaf fa-2x"></i>
          </div>
          <h5>EPA Lead-Safe</h5>
          <p className="small text-muted mb-0">
            Certified in lead-safe work practices for older homes
          </p>
        </div>
      </Col>
      <Col md={4} className="text-center mb-3">
        <div className="p-4 h-100">
          <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-3 d-inline-block">
            <i className="fas fa-hard-hat fa-2x"></i>
          </div>
          <h5>OSHA Trained</h5>
          <p className="small text-muted mb-0">
            OSHA 30-hour safety certified crew
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-4">Client <span className="text-primary">Testimonials</span></h2>
            <p className="text-muted fs-5">What our customers say about our services</p>
          </div>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="testimonial-card p-4 rounded-4 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Client" 
                    className="rounded-circle me-3" 
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">Sarah Johnson</h5>
                    <p className="text-muted mb-0">Homeowner</p>
                  </div>
                </div>
                <div className="rating mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <p className="mb-0">
                  "The waterproofing work on our basement was exceptional. No more leaks after heavy rains, and the team was professional and clean."
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card p-4 rounded-4 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="Client" 
                    className="rounded-circle me-3" 
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">Michael Chen</h5>
                    <p className="text-muted mb-0">Business Owner</p>
                  </div>
                </div>
                <div className="rating mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <p className="mb-0">
                  "Our office building looks brand new after their painting service. The color consultation was spot on and the finish is flawless."
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card p-4 rounded-4 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Client" 
                    className="rounded-circle me-3" 
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">Emily Rodriguez</h5>
                    <p className="text-muted mb-0">Property Manager</p>
                  </div>
                </div>
                <div className="rating mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <p className="mb-0">
                  "We've used AquaShield for multiple properties. Their roof waterproofing solutions have saved us thousands in potential damages."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-4">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-muted fs-5">Find answers to common questions about our services</p>
          </div>
          
          <Row>
            <Col lg={6} className="mb-4">
              <Accordion defaultActiveKey="0" className="faq-accordion">
                <Accordion.Item eventKey="0" className="mb-3 border-0 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">
                    How long does waterproofing last?
                  </Accordion.Header>
                  <Accordion.Body className="bg-light">
                    The lifespan of waterproofing depends on the materials used and environmental conditions. Our premium solutions typically last 10-15 years, with some systems lasting even longer with proper maintenance. We offer different warranty options based on the product and application.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-3 border-0 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">
                    What's the best time for exterior painting?
                  </Accordion.Header>
                  <Accordion.Body className="bg-light">
                    The ideal time is during moderate weather conditions - typically spring or fall when temperatures are between 50°F and 85°F (10°C to 30°C) with low humidity. We can advise on the optimal timing for your specific location and even work during less ideal conditions with special preparations.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={6} className="mb-4">
              <Accordion defaultActiveKey="0" className="faq-accordion">
                <Accordion.Item eventKey="2" className="mb-3 border-0 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">
                    Do you offer color consultation services?
                  </Accordion.Header>
                  <Accordion.Body className="bg-light">
                    Yes, we provide professional color consultation to help you choose the perfect palette for your space. Our experts consider lighting, architecture, and your personal preferences to create harmonious color schemes. This service is complimentary with any painting project over 500 sq.ft.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-3 border-0 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">
                    How do I know if my property needs waterproofing?
                  </Accordion.Header>
                  <Accordion.Body className="bg-light">
                    Common signs include damp spots on walls/ceilings, musty odors, peeling paint, efflorescence (white powdery substance), or visible cracks. We offer free inspections to assess your property's needs. Even without visible signs, preventive waterproofing can save you money in the long run by avoiding structural damage.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section id="contact" className="py-5 bg-primary bg-opacity-10 position-relative">
        <div className="contact-shape position-absolute"></div>
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 rounded-4 overflow-hidden shadow-lg">
                <Row className="g-0">
                  <Col lg={6} className="d-none d-lg-block">
                    <div 
                      className="h-100 quote-form-image" 
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3')" }}
                    >
                      <div className="quote-form-overlay d-flex flex-column justify-content-end p-5">
                        <h3 className="text-white fw-bold mb-3">Ready to Transform Your Space?</h3>
                        <p className="text-white mb-0">
                          Get a free, no-obligation quote today. Our experts will assess your needs and provide a detailed estimate.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <Card.Body className="p-5">
                      <h2 className="fw-bold mb-4">Get a <span className="text-primary">Free Quote</span></h2>
                      <p className="text-muted mb-4">
                        Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                      </p>
                      <Form id="quote-form" onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                          <Form.Label className="fw-medium">Your Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            placeholder="John Doe" 
                            className="py-3"
                          />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                          <Form.Label className="fw-medium">Email Address</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            placeholder="your@email.com" 
                            className="py-3"
                          />
                        </Form.Group>
                        <Form.Group controlId="formContact" className="mb-3">
                          <Form.Label className="fw-medium">Phone Number</Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="contact" 
                            value={formData.contact}
                            onChange={handleChange}
                            required 
                            placeholder="+1 (123) 456-7890" 
                            className="py-3"
                          />
                        </Form.Group>
                        <Form.Group controlId="formService" className="mb-3">
                          <Form.Label className="fw-medium">Service Needed</Form.Label>
                          <Form.Select 
                            name="service" 
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="py-3"
                          >
                            <option value="">Select a service</option>
                            <option value="waterproofing">Waterproofing</option>
                            <option value="interior-painting">Interior Painting</option>
                            <option value="exterior-painting">Exterior Painting</option>
                            <option value="roof-coating">Roof Coating</option>
                            <option value="other">Other Service</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-4">
                          <Form.Label className="fw-medium">Project Details</Form.Label>
                          <Form.Control 
                            as="textarea" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            rows={4} 
                            placeholder="Tell us about your project needs, size, and any specific requirements..." 
                            className="py-3"
                          />
                        </Form.Group>
                        <Button 
                          variant="primary" 
                          size="lg" 
                          type="submit"
                          className="w-100 py-3 fw-bold"
                        >
                          Request Free Quote
                        </Button>
                      </Form>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-4 position-relative">
        <div className="footer-shape position-absolute"></div>
        <Container className="position-relative">
          <Row>
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="footer-brand mb-4">
                <h2 className="fw-bold fs-3">
                  <span className="text-primary">Aqua</span>Shield <span className="text-warning">Paints</span>
                </h2>
                <p className="mb-0">
                  Your trusted partner for premium waterproofing and painting solutions that protect and enhance your property.
                </p>
              </div>
              <div className="social-icons mb-4">
                <a href="#" className="text-white me-3">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
              <div className="footer-newsletter">
                <h5 className="fw-bold mb-3">Subscribe to Our Newsletter</h5>
                <Form className="d-flex">
                  <Form.Control 
                    type="email" 
                    placeholder="Your email" 
                    className="rounded-0 rounded-start"
                  />
                  <Button variant="primary" className="rounded-0 rounded-end">
                    Subscribe
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={2} md={4} className="mb-4 mb-md-0">
              <h5 className="fw-bold mb-4">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Waterproofing</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Interior Painting</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Exterior Painting</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Roof Coating</a></li>
                <li><a href="#" className="text-white text-decoration-none">Consultation</a></li>
              </ul>
            </Col>
            <Col lg={2} md={4} className="mb-4 mb-md-0">
              <h5 className="fw-bold mb-4">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Our Team</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Projects</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Testimonials</a></li>
                <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              </ul>
            </Col>
            <Col lg={4} md={4}>
              <h5 className="fw-bold mb-4">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                  <span>123 Waterproof St, Paintville, NY 10001</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="fas fa-phone text-primary mt-1 me-3"></i>
                  <span>(123) 456-7890</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="fas fa-envelope text-primary mt-1 me-3"></i>
                  <span>info@aquashieldpaints.com</span>
                </li>
                <li className="d-flex">
                  <i className="fas fa-clock text-primary mt-1 me-3"></i>
                  <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-2PM</span>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} AquaShield Paints. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                <li className="list-inline-item mx-3">•</li>
                <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                <li className="list-inline-item mx-3">•</li>
                <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Sitemap</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="border-0">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold">Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4 px-5">
          <div className="success-animation mb-4">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h4 className="fw-bold mb-3">Request Submitted Successfully!</h4>
          <p className="mb-4">
            We've received your quote request and will get back to you within 24 hours. One of our project managers will contact you to discuss your project details.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => setShowModal(false)}
            className="px-4 fw-medium"
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center"
        >
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default App;