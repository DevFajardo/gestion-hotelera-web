import "./sobreNosotros.css";

function SobreNosotros() {
  return (
    <section id="sobre-nosotros">
      <h2 className="titulo-sobre-nosotros">Sobre Nosotros</h2>
      <p className="parrafo-sobre-nosotros">
        Bienvenidos al Hotel Girasol, su hogar lejos de casa. Ubicado en el
        corazón de [Ciudad], nuestro hotel ofrece una experiencia de hospedaje
        sin igual, combinando elegancia, comodidad y un servicio de primera
        clase. En Hotel Girasol, nos esforzamos por brindar a nuestros huéspedes
        una estancia inolvidable, con habitaciones y suites diseñadas para
        satisfacer las necesidades de viajeros de negocios y placer. Nuestro
        equipo de profesionales dedicados está comprometido con la excelencia y
        se esfuerza por superar sus expectativas en cada visita. Nuestro hotel
        cuenta con [mencionar algunas de las instalaciones y servicios, como
        restaurante, gimnasio, spa, Wi-Fi gratuito, etc.]. Además, nuestra
        ubicación céntrica permite un fácil acceso a los principales atractivos
        turísticos y negocios de la ciudad. En Hotel Girasol, creemos que la
        hospitalidad es un arte, y nos esforzamos por crear un ambiente acogedor
        y acogedor para que nuestros huéspedes se sientan como en casa.
        ¡Esperamos tener el placer de recibirlo pronto!
      </p>
      <div className="seccion-contacto">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="enlace-contacto"
        >
          <img
            src="/public/iconwhatsapp.png"
            alt="WhatsApp"
            className="icono-whatsapp"
          />
        </a>
      </div>
    </section>
  );
}

export default SobreNosotros;
