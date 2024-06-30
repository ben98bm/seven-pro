import React, { useEffect, useState } from "react";

function Home(){

    useEffect(() => {
        const selectHeader = document.querySelector('#header');
        const backToTop = document.querySelector('.back-to-top');
    
        const handleScroll = () => {
          if (selectHeader) {
            if (window.scrollY > 100) {
              selectHeader.classList.add('header-scrolled');
            } else {
              selectHeader.classList.remove('header-scrolled');
            }
          }
    
          if (backToTop) {
            if (window.scrollY > 100) {
              backToTop.classList.add('active');
            } else {
              backToTop.classList.remove('active');
            }
          }
        };
    
        window.addEventListener('load', handleScroll);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('load', handleScroll);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


      const [count, setCount] = useState(0);

    useEffect(() => {
        const span = document.querySelector('.purecounter');
        if (span) {
        const start = parseInt(span.getAttribute('data-purecounter-start'));
        const end = parseInt(span.getAttribute('data-purecounter-end'));
        const duration = parseInt(span.getAttribute('data-purecounter-duration'));

        let intervalId;

        if (count < end) {
            const startTime = Date.now();
            intervalId = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(1, elapsedTime / (duration * 1000));
            setCount(Math.floor(progress * (end - start) + start));
            if (progress >= 1) {
                clearInterval(intervalId);
            }
            }, 1000 / 60);
        }
        // return () => clearInterval(intervalId);
        }
    }, [count]);
    
    const [isNavbarMobile, setIsNavbarMobile] = useState(false);
    const [isToggleIconList, setIsToggleIconList] = useState(true);
  
    const handleToggleClick = () => {
      setIsNavbarMobile(!isNavbarMobile);
      setIsToggleIconList(!isToggleIconList);
    };

    return (
    <>
        <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container">
        <div class="header-container d-flex align-items-center justify-content-between">
            <div class="logo">
            {/* <h1 class="text-light"><a href="index.html">7 <span>Pro</span></a></h1> */}

            <a><img src="assets/img/vecteur7pro.png" alt="" class="img-fluid" /></a>
            </div>

            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link scrollto" href="#hero">Accueil</a></li>
                    <li><a class="nav-link scrollto" href="#about">A Propos</a></li>
                    <li><a class="nav-link scrollto" href="#cta">Nos Services</a></li>
                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    <li><a class="getstarted scrollto"><i class='bx bxs-phone-call'></i> +221 77 520 67 37 </a></li>
                </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>

        </div>
        </div>
    </header>

    <section id="hero" class="d-flex align-items-center">
        <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
        <h1>Bienvenue Chez 7 Pro</h1>
            <h2>
                Votre confiance est notre fierte ! <br/>
                Le bonheur commence par la propreté ! <br/>
            
                
                {/* Laissez-nous faire briller votre espace 
                de vie ou de travail <br/> avec notre expertise en nettoyage impeccable. <br/>
                Pour une meilleur productivité dans votre entreprise, maison etc... 
                <br/>entretenez et nettoyez vos locaux par <span>7 Pro</span> */}
            </h2>
        <a href="#about" class="btn-get-started scrollto">Commencer ici</a>
        </div>
    </section>

    <main id="main">

        {/* <section id="clients" class="clients">
        <div class="container">

            <div class="row">

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <img src="assets/img/clients/client-1.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="200">
                <img src="assets/img/clients/client-2.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="300">
                <img src="assets/img/clients/client-3.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="400">
                <img src="assets/img/clients/client-4.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="500">
                <img src="assets/img/clients/client-5.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="600">
                <img src="assets/img/clients/client-6.png" class="img-fluid" alt="" />
            </div>

            </div>

        </div>
        </section> */}

        <section id="about" class="about">
        <div class="container">

            <div class="row content">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <h2>Votre confiance est notre fierte</h2>
                <h3>
                    Que vous soyez une entreprise, un établissement de santé, une institution
                    éducative ou un particulier, nous proposons une gamme complète de services 
                    de nettoyage pour répondre à vos besoins spécifiques. <br/>De l'entretien régulier 
                    des locaux au nettoyage en profondeur après travaux, notre équipe expérimentée 
                    et dévouée est là pour vous offrir un environnement propre, sain et accueillant.
                </h3>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
                <p>
                    7 PRO est spécialisée dans le nettoyage professionnel destiné aux sociétés, aux ménages et de pulvérisation
                    de produits phytosanitaires pour permettre aux hôtels et aux restaurants de lutter contre la présence des 
                    insectes rampants et volants.
                </p>
                
                <p class="fst-italic">
                    Dans le cadre de l’exécution de ses activités, 7 PRO insiste sur :
                </p>
                <ul>
                    <li><i class="ri-check-double-line"></i> La Rigueur </li>
                    <li><i class="ri-check-double-line"></i> La Diligence </li>
                    <li><i class="ri-check-double-line"></i> La Discretion </li>
                    <li><i class="ri-check-double-line"></i> Le Professionnalisme </li>
                </ul>
                
            </div>
                <p class="fst-italic2">
                    7 Pro a commencé par l’acquisition de matériels <br/> puissants et performants <br/>
                    (Nettoyeur haute pression, monobrosse, aspirateur, injecteur extracteur, 
                    brosses, raclettes, détergents haute qualité ...)
                </p>
            </div>

        </div>
        </section>

        <section id="counts" class="counts">
        <div class="container">

            <div class="row counters">

            <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter">+20</span>
                <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter">+50</span>
                <p>Projets</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">24/24</span>
                <p>Heures de Travails</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">15</span>
                <p>Nombres de Travailleurs</p>
            </div>

            </div>

        </div>
        </section>

        <section id="why-us" class="why-us">
        <div class="container">

            <div class="row">
            {/* <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
                <div class="content">
                <h3>Why Choose Bethany for your company website?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>
                <div class="text-center">
                    <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                </div>
                </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                    <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-receipt"></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                    <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                    <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-images"></i>
                        <h4>Labore consequatur</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
            </div>

        </div>
        </section>

        <section id="cta" class="cta">
        <div class="container">

            <div class="text-center" data-aos="zoom-in">
            <h3>Nos Services</h3>
                {/* <p> Faites nous confiance pour vous servir dans les meilleures conditions qui garantissent la propreté et le confort..</p> */}
            <a class="cta-btn" href="#services">Voir Plus</a>
            </div>

        </div>
        </section>

        <section id="services" class="services section-bg">
        <div class="container">

            <div class="row">
            <div class="col-lg-4">
                {/* <div class="section-title" data-aos="fade-right">
                    <br/>
                <h2>Plus de details</h2>
                    <p>
                        Nous proposons des prestations courantes pour les entreprises : <br/><br/>
                        <li> Entretien des bureaux : époussetage, aspiration, vidage des poubelles, nettoyage des sols, désinfection des sanitaires ;<br/><br/> </li>
                        <li> Approvisionnement en consommables (ampoules, papier hygiénique, etc.).</li>
                    </p>
            </div> */}
            </div>
            <div class="col-lg-12">
                <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                        {/* <div class="icon"><i class='bx bxs-factory'></i></div> */}
                        <img src="assets/img/drive/Nettoyage-de-chantier.jpg" class="img-fluid" alt="" />
                            <h4>
                                <a href="">Nettoyage fin de Chantier</a>
                            </h4>
                                <p>
                                    Travaux de construction 
                                    ou de rénovation une remise à neuf des locaux ce qui vous permet
                                    de livrer des locaux propres, sûrs et sains.
                                </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
                    {/* <div class="icon"><i class='bx bxs-buildings'></i></div> */}
                        <img src="assets/img/drive/prix-lave-vitre.jpg" class="img-fluid" alt="" />
                    <h4><a href="">Nettoyage D'immeuble</a></h4>
                    <p>
                        Le nettoyage des parties communes et le nettoyage
                        des pièces telles que les salons chambres et toilettes. 
                    </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
                    {/* <div class="icon"><i class='bx bxs-chess'></i></div> */}
                        <img src="assets/img/drive/procede-de-nettoyage.jpg" class="img-fluid" alt="" />
                    <h4><a href="">Nettoyage de Tapis</a></h4>
                    <p>
                        Méthodes performantes à la monobrosse utilise une brosse rotative mousse sèche et injection extraction.
                    </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="400">
                    {/* <div class="icon"><i class='bx bxs-bed'></i></div> */}
                     <img src="assets/img/drive/materiel-nettoyage-mobilier-textile-french-home.jpg" class="img-fluid" alt="" />
                    <h4><a href="">Nettoyage de Fauteuil</a></h4>
                    <p>
                        Nettoyez vos fauteuils chez vous avec des moyens modernes 
                        de nettoyage qui sauvegarde la qualité du tissu ou cuir.
                    </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
                    {/* <div class="icon"><i class='bx bxs-chess'></i></div> */}
                        <img src="assets/img/drive/entreprise-nettoyage-bordeaux33-31.jpg" class="img-fluid" alt="" />
                    <h4><a href="">Nettoyage de Sol</a></h4>
                    <p>
                        Pour bien laver vos sols il faut un bon choix des nettoyants 
                        pour le sol et le matériel de lavage adéquat.
                    </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="400">
                    {/* <div class="icon"><i class='bx bxs-bed'></i></div> */}
                        <img src="assets/img/drive/nettoyage-bureau-paris-08.jpg" class="img-fluid" alt="" />
                    <h4><a href="">Nettoyage de Bureaux</a></h4>
                    <p>
                        Nettoyage de de bureaux : nettoyage des surfaces, vidage 
                        des poubelles, époussetage du mobilier…
                    </p>
                    </div>
                </div>

                </div>
            </div>
            </div>

        </div>
        </section>

        <section id="team" class="team">
        <div class="container">

            <div class="row">
            <div class="col-lg-4">
                <div class="section-titlee" data-aos="fade-right">
                <h2>Prestige du Nettoyage Professionel</h2>
                <p>Excellence et Soin à Chaque Détail</p>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row">

                <div class="col-lg-6">
                    <div class="member" data-aos="zoom-in" data-aos-delay="100">
                    <div class="pic"><img src="assets/img/drive/agent-nettoyage.jpg" class="img-fluid" alt="" /></div>
                    <div class="member-info">
                        <h4>Propreté et Hygiène au Quotidien</h4>
                        <p>
                            "Chez 7 Pro, nous nous engageons à maintenir des standards 
                            de propreté et d'hygiène élevés chaque jour. Que ce soit pour votre domicile 
                            ou votre lieu de travail, notre équipe dévouée utilise des produits et des techniques 
                            de pointe pour assurer un environnement sain et propre en tout temps."
                        </p>
                        <div class="social">
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4 mt-lg-0">
                    <div class="member" data-aos="zoom-in" data-aos-delay="200">
                    <div class="pic"><img src="assets/img/drive/nettoyage-immeuble.jpg" class="img-fluid" alt="" /></div>
                    <div class="member-info">
                        <h4>Environnement Sain</h4>
                        <p>
                            <br/>
                            "La santé et le bien-être de nos clients sont au cœur de nos priorités. Avec 
                            7 Pro, bénéficiez de solutions de nettoyage sur mesure, conçues 
                            our créer des espaces où il fait bon vivre et travailler. Faites confiance à notre 
                            expertise pour un environnement plus propre et plus sain."
                        </p>
                        <div class="social">
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div class="member" data-aos="zoom-in" data-aos-delay="300">
                    <div class="pic"><img src="assets/img/drive/x-astuces-pour-bien-laver-un-tapis.jpg" class="img-fluid" alt="" /></div>
                    <div class="member-info">
                        <h4>Espaces Propres</h4>
                        <p>
                            "La satisfaction de nos clients est notre plus grande récompense. À 7 Pro, 
                            nous offrons des services de nettoyage de haute qualité qui répondent à vos besoins spécifiques. 
                            Grâce à notre équipe professionnelle et à notre souci du détail, nous assurons des résultats 
                            mpeccables à chaque intervention."
                        </p>
                        <div class="social">
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div class="member" data-aos="zoom-in" data-aos-delay="400">
                    <div class="pic"><img src="assets/img/drive/nettoyage-canape.jpg" class="img-fluid" alt="" /></div>
                    <div class="member-info">
                        <h4>L'Excellence en Nettoyage</h4>
                        <p>
                            "Pour 7Pro, l'excellence est une valeur fondamentale. Nos services 
                            de nettoyage sont conçus pour surpasser vos attentes, avec des solutions innovantes et
                             efficaces. Faites l'expérience de notre engagement à la perfection et découvrez la différence 
                             que peut faire une entreprise dédiée à l'excellence."
                        </p>
                        <div class="social">
                        </div>
                    </div>
                    </div>
                </div>

                </div>

            </div>
            </div>

        </div>
        </section>

        <section id="contact" class="contact">
        <div class="container">
            <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
                <div class="section-title">
                <h2>Contact</h2>
                <p>
                    "Parlons Propreté : Contactez-Nous pour un Service Adapté à Vos Besoins"
                </p>
                </div>
            </div>

            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                <iframe style={{border: `0`, width: `100%`, height: `270px`}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d469.0797217793111!2d-17.46561275801944!3d14.761224845662548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1715878564211!5m2!1sfr!2ssn" frameborder="0" allowfullscreen></iframe>
                <div class="info mt-4">
                <i class="bi bi-geo-alt"></i>
                <h4>Adresse :</h4>
                <p>Yoff Apecsy 1, Villa Nº141</p>
                </div>
                <div class="row">
                <div class="col-lg-6 mt-4">
                    <div class="info">
                    <i class="bi bi-envelope"></i>
                    <h4>Email :</h4>
                    <p>contact@7pro.com</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="info w-100 mt-4">
                    <i class="bi bi-phone"></i>
                    <h4>Telephone :</h4>
                    <p>+221 77 520 67 37 / +221 76 800 00 20</p>
                    </div>
                </div>
                </div>

                <form action="" method="post" role="form" class="php-email-form mt-4">
                <div class="row">
                    <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Votre Nom" required />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Votre Email" required />
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Objet" required />
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Envoyer le Message</button></div>
                </form>
            </div>
            </div>

        </div>
        </section>
        <>
        <div class="copyright">
            <p>copyright 2024 <a href="#">Ideal Dev Solution</a>. Tous droits reservés</p>
        </div>
    </>    
    </main>
    </>
    );
}

export default Home;