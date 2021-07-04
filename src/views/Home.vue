<template>
  <div class="home">
    <home-hero />
    <invitation />
    <registration />
    <about />
    <agenda />
    <accommodation />
    <contact />
    <partners />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/Home/HomeHero";
import Invitation from "@/components/Home/invitation/Invitation";
import Registration from "@/components/Home/invitation/Registration";
import Agenda from "@/components/Home/agenda/Agenda";
import Accommodation from "@/components/Home/accommodation/Accommodation";
import Contact from "@/components/Home/contact/Contact";
import About from "@/components/Home/about/About";
import Partners from "@/components/Home/partners/Partners";

export default {
  name: "Home",
  components: {
    Partners,
    Contact,
    About,
    Accommodation,
    Agenda,
    Registration,
    Invitation,
    HomeHero
  }
};
</script>
