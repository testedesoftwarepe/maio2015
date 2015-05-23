module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      date: "27 de maio de 2015",
      venue: "CESAR",
      address: "Rua Bione, 220 – Recife Antigo",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrições abertas"
        //Comente esse link para que o botão aponte para o próprio site.
        ,link: "https://docs.google.com/forms/d/1qeozKWlHm40A0n_84UCfkE8KzNJ3VU8AOkFrUo-KFGA/viewform"
    },
    /* Se o hangoutSet for true, será mostrada a seguinte mensagem:
      "Acesse o hangout por esse <link>"
      Se o hangoutSet for false, será usada a mensagem do hangoutNotSetMessage    
    */

    hangout:{
      hangoutSet: false,
      link:"https://plus.google.com/u/2/events/cdn2unjap1440853obc0pgsc750",
      //hangoutNotSetMessage: "link para hangout em breve."
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/maio2015/",
      googleanalytics: "UA-53198502-2"
    },

    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'events',
      'partners'
      // 'contact',
    ],

    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      partners: "Parceiros",
      events: "Próximos Eventos"
      //sponsors: "Sponsors",
      //contact: "Contact"
    },

   schedule: [
      {
        name: "Check-in",
        time: "19h00"
      },

      {
        name: "Edwin Marinho",
        photo: "themes/yellow-swan/img/Edwin_Marinho.jpg",
        bio: "Um testador que gosta de desenvolver. Um desenvolvedor que gosta de teste. Na verdade, uma pessoa que quer trazer a qualidade para os trabalhos que realiza. Desenvolvedor de software em uma grande variedade de linguagens de programação e plataformas. Atualmente é Engenheiro de Sistemas no CESAR.",
        company: "CESAR",
        link: {
          href: "https://br.linkedin.com/in/edwincarlo",
          text: "Linkedin"
        },
        presentation: {
          title: "Uma reflexão sobre o básico de Testes",
          description: "Estamos pensando em tester 2.0, automação de testes, teste de performance, segurança de aplicações, etc. Entretanto, essa conversa tem como objetivo dar um passo atrás. E levar à reflexão sobre o que seria o básico para um testador.",
          time: "19h15"
        }
        /*
        Activity é alguma dinâmica extra que poderá ocorrer. Como é uma atividade em grupo, não será mostrada nenhuma imagem. Caso queira remover, basta comentar a activity toda.
        */
        /*,activity: {
          title: "Discussão sobre testes",
          description: "Discussão aberta sobre testes. Essa discussão não será feita pelo hangout.",
          time: "20h00"
        }*/
     },

     {
        name: "José Carréra",
        photo: "themes/yellow-swan/img/JoseCarrera.JPG",
        bio: "José Carréra possui 9 anos de experiência em testes, trabalhando prioritariamente em projetos Mobile e Web. É graduado em Ciência da Computação pela UNICAP e com mestrado profissional em engenharia de software pelo CESAR.EDU. Carréra já liderou equipes de teste, trabalhando desde o planejamento, a execução e reportagem das atividades de teste. Ele também já atuou com testes de performance e com automação de testes para Web com Selenium. Em 2014, fez parte do time CESAR Brazil, vencedor da Copa do Mundo de Testes de Software 2014 (STWC).",
        company: "",
        link: {
          href: "https://www.linkedin.com/in/josecarrera",
          text: "Linkedin"
        },
        presentation: {
          title: "Testers e a zona de conforto",
          description: "Na ZONA DE CONFORTO não há medo, ansiedade ou risco, são pensamentos ou comportamentos aos quais uma pessoa se habitua com uma sensação de segurança. O objetivo dessa conversa é discutir e trabalhar em cima da zona de conforto dos testadores.",
          time: "20h15"
        }
        /*
        Activity é alguma dinâmica extra que poderá ocorrer. Como é uma atividade em grupo, não será mostrada nenhuma imagem. Caso queira remover, basta comentar a activity toda.
        */
        /*,activity: {
          title: "Discussão sobre testes",
          description: "Discussão aberta sobre testes. Essa discussão não será feita pelo hangout.",
          time: "20h00"
        }*/
     },

     {
        name: "Encerramento",
        time: "21h00"
      }

    ],

    events: {
      form: "https://docs.google.com/forms/d/1ZmixuluQYqfWF06FG6YC82LDDz53N4-EjNXJrBFXyes/viewform"

    },

    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      },
      /*{
        name: "UNINASSAU",
        logo:"themes/yellow-swan/img/uninassau-logo.jpeg",
        url: "http://www.mauriciodenassau.edu.br/"
      },*/
      {
        name: "CESAR",
        logo:"themes/yellow-swan/img/LOGO_CESAR.jpg",
        url: "http://www.cesar.org.br/site/"
      }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
