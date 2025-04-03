<script>
    function translateslanguage() {
      let language = document.getElementById("language").value;
        
      if (language === "spanish") {
        document.getElementById("title").innerText = "Inicio";
      } else{
        document.getElementById("title").innerText = "life";
      }
document.getElementById(nav-)
    }
</script>
const translations = {
    en: {
        Home: "Home",
        Projects: "Projects",
        Contact: "Contact Me",
        Title: "Web Developer | Designer | Programmer | Mastermind",
        Bio: "Hello! I am a dedicated web developer with extensive expertise in HTML, CSS, JavaScript, and related technologies, driven by a strong passion for designing and developing modern, intuitive, and highly user-friendly websites that combine aesthetic appeal with seamless functionality to ensure an exceptional user experience across all platforms."
    },

    es: {
        Home: "Inicio",
        Projects: "Proyectos",
        Contact: "Contáctame",
        Title: "Desarrollador Web | Diseñador | Programador | Mente Maestra",
        Bio: "¡Hola! Soy un desarrollador web dedicado con amplia experiencia en HTML, CSS, JavaScript y tecnologías relacionadas, impulsado por una gran pasión por diseñar y desarrollar sitios web modernos, intuitivos y altamente fáciles de usar que combinan atractivo estético con funcionalidad perfecta para garantizar una experiencia de usuario excepcional en todas las plataformas."
      } , 
}

const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});
