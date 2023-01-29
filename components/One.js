import React from "react";

export function One() {
  return (
    <div className="flex items-center  flex-col h-screen w-screen md:p-10 md:pt-0 ">
      <img src="Chloe-Bloom_Secondaire_Noir.png" className="w-[19rem]"></img>
      <div className="flex items-center justify-center flex-col bg-white  p-5 md:mt-5 md:mb-0 md:m-5 md:p-3 md:pt-1  ">
        <p className="font-sans font-bold tracking-wide uppercase text-[15px] text-center m-3 mt-8 text-fcolor md:text-[26px] md:tracking-[1px] md:font-medium">
          La newsletter Chloé Bloom, C’EST UN MÉLANGE D’INSPIRATION, DE
          MOTIVATION ET De SINCÉRITÉ !
        </p>
        <p className=" text-[14px] text-center font-['Open_Sans'] font-bold md:text-[16px] md:mr-10 md:ml-10 ">
          <i className="fas fa-moon fa-cog mr-1" />
          Un rendez-vous hebdomadaire, un moment de partage et de bienveillance
          qui fait grandir, réfléchir et avancer vers une version plus alignée
          de toi-même.
        </p>
        <div className="flex flex-col items-center justify-center p-8 pb-0 mb-6">
          <button className="h-12 w-60 rounded-[60px] pl-10 pr-10 pt-2.5 pb-2 font-sans boxshdaw border-black text-white text-center text-[18px] bg-[#a4531f] md:w-80 md:h-16  md:text-[24px]">
            <i className="fa fa-envelope mr-4 " />
            JE M'INSCRIS
          </button>
          <span className="mt-5 text-[14px] font-['Open_Sans'] text-fcolor md:text-[16px]">
            <i className="fa fa-gift  fa-black " aria-hidden="true" />
            <strong> CE N'EST PAS TOUT !</strong>
          </span>
          <i className="text-center text-[12px] text-[#727272] md:text-[16px]">
            En t'inscrivant à la newsletter, tu recevras également en cadeau
            l'accès aux archives des newsletters précédentes
          </i>
        </div>
      </div>
      <div className="flex flex-col justify-center w-screen max-w-screen-2xl text-[14px] p-5  pb-0 mb-5 md:flex-row md:justify-around md:p-12 md:pt-8 ">
        <p className="font-['Open_Sans'] font-bold text-black m-2 mt-6 md:hidden">
          Chaque semaine, tu as accès à un texte exclusif de développement
          personnel qui t’aide à y voir plus clair, à trouver des réponses à tes
          questionnements et, avant tout, à reprendre le pouvoir sur ta vie.
        </p>
        <div className="mt-2 mb-4 p-2 md:p-0 md:m-0 md:mr-5 md:ml-3 ">
          <img
            className=" shadowimg  md:shadow-[0_10px_6px_-6px_#777] md:w-[90%] lg:w-[100%]"
            src="Chloe-Bloom-by-Emilie-Blanc-69-1-.jpg"
          ></img>
        </div>
        <div className="p-2 md:p-0 md:text-[16px] ">
          <p className="font-['Open_Sans'] font-bold text-black  ">
            Chaque lundi, tu as accès à une lettre exclusive de Chloé pour
            t’apporter l’inspiration et les clés pour reprendre le pouvoir sur
            ta vie.
          </p>
          <p className="font-['Open_Sans'] font-bold text-black mt-5 ">
            À travers ses mots, Chloé souhaite de tout cœur t’aider à t’envoler,
            rayonner et à te connaître.
          </p>
          <p className=" text-[14px] 5 text-[#3a3939] mt-4 md:text-[16px] ">
            Il suffit souvent de se poser les bonnes questions et de voir les
            choses autrement pour insuffler du changement en soi et autour de
            soi.
            <br />
            L’objectif premier est de contribuer à ton bien-être, de te partager
            les expériences de Chloé et de t’aider concrètement, jour après
            jour, pour t’amener à trouver les clefs de ton épanouissement
            intérieur, dans un état d’esprit optimiste et intuitif.
          </p>
          <p className="font-['Open_Sans'] font-bold text-black mt-5">
            <i className="fas fa-moon fa-cog mr-1" />
            C’est pourquoi tu trouveras aussi chaque fois des conseils pratiques
            pour que les idées deviennent des leviers réels de transformation
            personnelle.
          </p>
          <p className=" text-[14px] text-[#3a3939] mt-4 md:text-[16px]">
            Ces conseils sont fondés sur les enseignements de la psychologie
            positive, la PNL, la compréhension de soi et des ses émotions.
            <br /> Ou encore, la pratique du yoga et plus récemment, la
            spiritualité, qui font également partie des grandes sources
            d’inspiration de Chloé.
          </p>
          <p className="font-['Open_Sans'] font-bold text-black mt-5">
            <i className="fas fa-moon fa-cog mr-1" />
            Chaque newsletter comprend en outre une sélection de ressources
            précieuses pour approfondir le sujet abordé et, ultimement,
            apprendre à mieux se connaître soi-même
          </p>
          <p className=" text-[14px] text-[#3a3939] mt-4 md:text-[16px]">
            Au fil du temps, les thèmes sont choisis en harmonie avec les
            énergies de l’instant, à l’écoute des intuitions du moment et des
            expériences vécues par Chloé.
          </p>
          <p className="font-['Open_Sans'] font-bold text-black mt-5">
            <i className="fas fa-moon fa-cog mr-1" />
            Chaque lettre est pensée comme une porte vers le chemin de la
            métamorphose et de l’épanouissement. Un chemin émouvant,
            bouleversant, stupéfiant, parsemé de positivité ! Un chemin cyclique
            et inspirant, aussi bénéfique et enrichissant que possible.
          </p>
          <p className=" text-[14px] text-[#3a3939] mt-4 md:text-[16px]">
            Voilà, en quelques mots, l’essence des messages envoyés chaque
            semaine avec cœur aux abonnés de la newsletter Chloé Bloom.
          </p>
        </div>
      </div>
      <div className="flex  flex-col bg-white w-screen h-[20rem] p-5 md:w-[60rem]">
        <p className="font-sans tracking-wide font-bold uppercase text-[22px] text-center m-3 mt-8 text-fcolor ">
          Alors, qu’attends-tu pour t’inscrire ?
        </p>
        <i className=" text-[17px] text-center  font-['Open_Sans'] text-[#2f2f2f] font-bold">
          Un univers plein d’amour, d’inspiration et de sincérité t'attends !
        </i>
        <div className="flex flex-col items-center justify-center p-8 pb-0 mb-6">
          <button className="h-15 w-80 rounded-[60px] pl-5 pr-5 pt-2.5 pb-2 font-sans boxshdaw border-black text-white text-center text-[26px] bg-[#a4531f]">
            <i className="fa fa-envelope mr-4" />
            JE M'INSCRIS !
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-10 mt-15 text-[14px] p-10 w-screen bg-[#e9f8fc]">
        <span className=" text-center  font-['Open_Sans']">
          <img
            src="Chloe-Bloom_Secondaire_Noir.png"
            className="w-[19rem]"
          ></img>
        </span>
      </div>
    </div>
  );
}
