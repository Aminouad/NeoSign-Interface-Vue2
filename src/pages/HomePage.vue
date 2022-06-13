<template>
    <div class="home-page"><h3>Bienvenue à NEOsign</h3>

  <base-card class="container">
    <div  class="content">
      <h4>NEOsign vous offre :</h4>
      <p class="underline">
        I.Un espace sécurisé de documents là où vous pouvez :
      </p>
      <p>1. Ajouter,signer,modifier,visualiser et télécharger vos documents.</p>
      <p>2. Ajouter vos signature électroniques de type P12 et PFX.</p>
      <p class="underline">
        II.Un espace sécurisé d'entreprise là où vous pouvez :
      </p>
      <p>Ajouter et supprimer des personnels.</p>
      <p class="underline">
        III.Concernant la signature de vos docments vous pouvez :
      </p>
      <p>
        Signer vos document avec la norme XAdES et PAdES conforme aux exigences
        eIDAS.
      </p>
      <p class="underline">
        IV.Un tableau de bord là où vous trouverez tous vos statistiques.
      </p>
    </div>
  </base-card>
  </div>
</template>
<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.container{
   margin: 1em;
}
.content {
  margin-inline: 0.8rem;
  margin-block: 0.4rem;
   display: flex;
   justify-content: center;
   flex-direction: column;

  
}
.underline {
  text-decoration: underline;
}
</style>
