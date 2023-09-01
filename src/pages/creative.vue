<template>
  <div class="resume">
    <div class="left-column">
      <div class="headline-photo">
        <img
          src="photo.jpg"
          class="headline-photo-img"
          alt="Absolutely myself"
        />
      </div>

      <div class="left-column-content">
        <div class="left-column-head">
          <div class="headline-txt">
            <span class="headline-name">
              {{ person.name.first }} {{ person.name.middle }}
            </span>
            <span class="headline-name uppercase">
              {{ person.name.last }}
            </span>

            <p>
              <span class="txt-full-white"> {{ person.position }} </span>
            </p>
          </div>
        </div>

        <div class="multi-line-txt">
          {{ person.about }}
        </div>

        <div class="multi-line-txt">
          {{ person.knowledge }}
        </div>

        <div class="multi-line-txt">
          {{ person.welfare }}
        </div>

        <div class="multi-line-txt">
          {{ person.schoolwork }}
        </div>

        <div class="social-container">
          <div class="block-marged left-column-items">
            <i class="fas fa-phone-alt contact-icon"></i>
            <span class="txt-full-white">
              {{ person.contact.phone }}
            </span>
          </div>

          <a :href="contactLinks.email" class="block-marged left-column-items">
            <i class="fas fa-envelope contact-icon"></i>
            <span class="txt-full-white">
              {{ person.contact.email }}
            </span>
          </a>

          <a
            v-if="person.contact.website"
            :href="person.contact.website"
            class="block-marged left-column-items"
          >
            <i class="fas fa-blog contact-icon"></i>
            <span class="txt-full-white">
              {{ person.contact.website }}
            </span>
          </a>

          <a
            v-if="person.contact.github"
            :href="contactLinks.github"
            class="block-marged left-column-items"
          >
            <i class="fab fa-github contact-icon"></i>
            <span class="txt-full-white">
              {{ person.contact.github }}
            </span>
          </a>

          <a
            v-if="person.contact.codefights"
            :href="contactLinks.codefights"
            class="block-marged left-column-items"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="contact-icon-svg"
            >
              <path
                d="M12 15.2L9.2 4.8 0 3.2l1.7 2.6 5.7.7.7 2.3-3.7-.4 1.3 2 3 .3L12 20.8l3.3-10.1 3-.3 1.3-2-3.7.4.7-2.3 5.7-.7L24 3.2l-9.2 1.6"
              ></path>
            </svg>

            <span class="txt-full-white">
              {{ person.contact.codefights }}
            </span>
          </a>

          <a
            v-if="person.contact.medium"
            :href="contactLinks.medium"
            class="left-column-items"
          >
            <i class="fab fa-medium contact-icon"></i>
            <span class="block-marged txt-full-white">
              {{ person.contact.medium }}
            </span>
          </a>
        </div>

        <!-- <div class="hobbies-container">
          <span class="subheadline">Hobbies</span>
          <div class="hobbies-content">
            <a
              v-for="(hobby, index) in person.hobbies"
              :key="index"
              class="hobby-item"
              :href="hobby.url"
            >
              <i
                v-if="hobby.iconClass"
                :class="hobby.iconClass + ' hobby-item__icon'"
              ></i>
              <span class="hobby-item__icon-label"> {{ hobby.name }} </span>
            </a>
          </div>
        </div> -->

        <div class="actions-container">
          <a
            v-if="exportMode === false"
            @click="switchThemeMode"
            class="block-marged left-column-items"
          >
            <i
              class="mdi contact-icon"
              :class="
                themeMode === 'light'
                  ? 'mdi-weather-night'
                  : 'mdi-weather-sunny'
              "
              style="font-size: 1.4em"
            ></i>
            <span class="txt-full-white" style="margin-left: -0.1em">
              {{ themeMode === "light" ? lang.darkMode : lang.lightMode }}
            </span>
          </a>

          <router-link
            v-if="exportMode === false"
            :to="language === 'cn' ? '/en' : '/cn'"
            class="block-marged left-column-items"
            style="margin-top: -10px"
          >
            <i
              class="mdi mdi-translate contact-icon"
              style="font-size: 1.4em"
            ></i>
            <span class="txt-full-white" style="margin-left: -0.1em">
              {{ lang.translate }}
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="right-column">
      <!-- Experience -->
      <div class="experience-section section">
        <div class="icon">
          <i class="fas fa-briefcase font-awesome-icons"></i>
          <span class="section-headline">{{ lang.experience }}</span>
        </div>

        <div class="section-content">
          <div
            v-for="(experience, index) in person.experience"
            :key="index"
            class="section-content__item"
            :class="experience.website ? '' : 'un-clickable'"
            @click="openWindow(experience.website)"
          >
            <div class="section-content__header section-content__header-flex">
              {{ experience.company }}
              <span v-if="experience.internship" class="chip chip-secondary">
                {{ lang.internship }}
              </span>
            </div>
            <div class="section-content__subheader">
              {{ experience.position }}
            </div>
            <div class="section-content__text">
              {{ experience.timeperiod }}
            </div>
            <div class="section-content__text">
              {{ experience.description }}
            </div>
            <div class="section-content__text--light">
              {{ experience.website }}
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="education-section section">
        <div class="icon">
          <i class="fas fa-graduation-cap font-awesome-icons"></i>
          <span class="section-headline">{{ lang.education }}</span>
        </div>

        <div class="section-content">
          <div
            v-for="(education, index) in person.education"
            :key="index"
            class="section-content__item"
            :class="education.website ? '' : 'un-clickable'"
            @click="openWindow(education.website)"
          >
            <div class="section-content__header">
              {{ education.school }}
            </div>
            <div class="section-content__subheader">
              {{ education.major }} {{ education.degree }}
            </div>
            <div class="section-content__text">
              {{ education.timeperiod }}
            </div>
            <div class="section-content__text">
              {{ education.description }}
            </div>
            <div class="section-content__text--light">
              {{ education.website }}
            </div>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div v-if="person.projects" class="projects-section section">
        <div class="icon">
          <i class="fas fa-code font-awesome-icons"></i>
          <span class="section-headline"> {{ lang.projects }} </span>
        </div>

        <div class="section-content">
          <div
            v-for="(project, index) in person.projects"
            :key="index"
            class="section-content__item"
            :class="project.url ? '' : 'un-clickable'"
            @click="openWindow(project.url)"
          >
            <div class="section-content__header section-content__header-flex">
              {{ project.name }}
              <span v-if="project.platform" class="chip">
                {{ project.platform }}
              </span>
              <span v-if="project.dev" class="chip chip-secondary">
                {{ lang.underDev }}
              </span>
            </div>
            <div class="section-content__subheader">
              {{ project.shortIntro }}
            </div>
            <div class="section-content__text">
              {{ project.description }}
            </div>
            <div class="section-content__text--light">
              {{ project.url }}
            </div>
          </div>
        </div>
      </div>

      <!-- Contributions -->
      <div v-if="person.contributions" class="contributions-section section">
        <div class="icon">
          <i class="fa fa-heart font-awesome-icons"></i>
          <span class="section-headline"> {{ lang.contributions }} </span>
        </div>

        <div class="section-content">
          <div
            v-for="(contribution, index) in person.contributions"
            :key="index"
            class="section-content__item"
            :class="contribution.url ? '' : 'un-clickable'"
            @click="openWindow(contribution.url)"
          >
            <div class="section-content__header section-content__header-flex">
              {{ contribution.name }}
              <span v-if="contribution.platform" class="chip">{{
                contribution.platform
              }}</span>
            </div>
            <div class="section-content__subheader">
              {{ contribution.shortIntro }}
            </div>
            <div class="section-content__text">
              {{ contribution.description }}
            </div>
            <div class="section-content__text--light">
              {{ contribution.url }}
            </div>
          </div>
        </div>
      </div>

      <!-- Awards -->
      <div v-if="person.awards" class="contributions-section section">
        <div class="icon">
          <i class="fa fa-trophy font-awesome-icons"></i>
          <span class="section-headline"> {{ lang.awards }} </span>
        </div>

        <div class="section-content-grid">
          <div
            v-for="(award, index) in person.awards"
            :key="index"
            class="section-content__item-grid"
            :class="award.url ? '' : 'un-clickable'"
            @click="openWindow(award.url)"
          >
            <div class="section-content__header">{{ award.name }}</div>
            <div class="section-content__subheader">
              {{ award.award }}
            </div>
            <div class="section-content__text">
              {{ award.description }}
            </div>
            <div class="section-content__text--light">
              {{ award.grade }}
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div v-if="person.skills" class="skills-section section">
        <div class="icon">
          <i class="fas fa-coffee font-awesome-icons"></i>
          <span class="section-headline"> {{ lang.skills }} </span>
        </div>

        <div class="section-content-grid section-content-grid-skills">
          <span
            v-for="(skill, index) in person.skills"
            :key="index"
            class="grid-item"
          >
            <div
              class="squarred-grid-item"
              :class="skill.url ? '' : 'un-clickable'"
              @click="openWindow(skill.url)"
            >
              <i v-if="skill.iconClass" :class="'mdi ' + skill.iconClass"></i>
              {{ skill.name }}
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const yaml = require("js-yaml");
const object = require("lodash/fp/object");

const themes = require("@/assets/themes");

import { personDefault } from "@/resume/data-default.yml";
import { personCN } from "@/resume/data-cn.yml";
import { personEN } from "@/resume/data-en.yml";
import { terms } from "@/terms";

export default {
  data() {
    return {
      person: undefined,
      language: "cn",
      exportMode: false,
      themeMode: "light",
      terms: terms,
    };
  },
  watch: {
    $route(to) {
      this.setResumeData(to);
    },
  },
  computed: {
    lang() {
      const defaultLang = this.terms.cn;
      const useLang = this.terms[this.person.lang];

      // overwrite non-set fields with default lang
      Object.keys(defaultLang)
        .filter((k) => !useLang[k])
        .forEach((k) => {
          useLang[k] = defaultLang[k];
        });

      return useLang;
    },

    contactLinks() {
      const links = {};

      if (this.person.contact.github) {
        links.github = `https://github.com/${this.person.contact.github}`;
      }

      if (this.person.contact.codefights) {
        links.codefights = `https://codefights.com/profile/${this.person.contact.codefights}`;
      }

      if (this.person.contact.medium) {
        links.medium = `https://medium.com/@${this.person.contact.medium}`;
      }

      if (this.person.contact.email) {
        links.email = `mailto:${this.person.contact.email}`;
      }

      if (this.person.contact.linkedin) {
        links.linkedin = `https://linkedin.com/in/${this.person.contact.linkedin}`;
      }

      if (this.person.contact.phone) {
        links.phone = `tel:${this.person.contact.phone}`;
      }

      return links;
    },
  },
  methods: {
    mergePerson(defaults, ...person) {
      let mergedPerson = yaml.load(defaults);
      person.forEach((p) => {
        mergedPerson = object.merge(mergedPerson, yaml.load(p));
      });
      return mergedPerson;
    },

    setResumeData(routes) {
      const language = routes.params.language || "cn";
      const exportMode = routes.query.exportMode || false;

      let person;
      switch (language) {
        case "en":
          person = this.mergePerson(personDefault, personEN);
          break;
        default:
          person = this.mergePerson(personDefault, personCN);
      }

      this.language = language;
      this.exportMode = exportMode;
      this.person = person;
    },

    switchThemeMode() {
      this.setThemeMode(this.themeMode === "light" ? "dark" : "light");
    },

    setThemeMode(mode) {
      this.themeMode = mode;
      localStorage.preferredThemeMode = mode;
      document.documentElement.style.setProperty(
        "--theme-background-color",
        themes[mode].backgroundColor
      );
      document.documentElement.style.setProperty(
        "--theme-text-color",
        themes[mode].textColor
      );
      document.documentElement.style.setProperty(
        "--theme-section-title-color",
        themes[mode].sectionTitleColor
      );
    },

    getPreferredThemeMode() {
      const preferredThemeMode =
        localStorage.preferredThemeMode !== undefined
          ? localStorage.preferredThemeMode
          : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      return preferredThemeMode === "dark" ? "dark" : "light";
    },

    openWindow(href) {
      if (href) window.open(href, "_blank");
    },
  },
  created() {
    this.setResumeData(this.$route);
    this.exportMode === true
      ? this.setThemeMode("light")
      : this.setThemeMode(this.getPreferredThemeMode());
  },
};
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500&display=swap");
@accent-color: #0a7074;
@transition-timeperiod: 0.3s;

.resume {
  display: flex;
  position: relative;
  min-height: 100vh;
  font-family: "Noto Sans SC", "PingFang SC", "San Francisco", "Microsoft Yahei",
    "Heiti SC", Helvetica, Tahoma, Arial, sans-serif;
}

.left-column {
  flex: 1;
  max-width: 400px;
  padding: 30px;
  padding-top: 45px;
  text-align: left;

  color: rgba(255, 255, 255, 0.85);
  background-color: @accent-color;
  overflow: hidden;
  display: block;
  z-index: 2;

  opacity: 1;

  &-items {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
}

.headline-photo {
  width: 50%;
  min-width: 160px;
  margin-top: -55px;
  padding: 0 15px 15px 0;
  border-radius: 8px;

  &-img {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
    width: 100%;
    border-radius: inherit;
  }
}

.right-column {
  flex: 3;

  background-color: var(--theme-background-color);
  color: var(--theme-text-color) !important;
  transition: all @transition-timeperiod ease-out;

  display: block;
  column-count: 2;
  column-gap: 4%;

  padding: 30px;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}

.font-awesome-icons {
  color: var(--theme-section-title-color);
  transition: color @transition-timeperiod ease-out;
  font-size: 1.3em;
  margin-right: 6px;
}

.small-icon {
  top: 2.5px;
  font-size: 1.4em;
}

.contact-icon {
  color: white;
  font-size: 1.3em;
  margin-right: 10px;

  &-svg {
    margin-top: -2.5px;
    margin-right: 10px;

    transform: scale(1);

    top: 5px;
    position: relative;

    path {
      fill: white;
    }
  }
}

.block-marged {
  margin-top: 15px;
  margin-bottom: 15px;
}

.multi-line-txt {
  margin-top: 30px;
  margin-bottom: 20px;
}

.social-container {
  margin-top: 30px;
}

.headline {
  &-txt {
    color: white;
  }

  &-name {
    font-size: 1.3em;
    font-weight: 500;
  }
}

.txt-full-white {
  color: white;
}

.uppercase {
  text-transform: uppercase;
}

.section-headline {
  color: var(--theme-section-title-color);
  transition: color @transition-timeperiod ease-out;
  display: inline-block;
  font-weight: 500;
  font-size: 1.2em;
  margin-left: 5px;
}

.section-content {
  margin-top: 0.6rem;
  padding-left: 32px;

  &__item {
    display: block;
    margin-bottom: 0.8rem;
    break-inside: avoid;
    cursor: pointer;

    &-grid {
      flex: 0 0 100%;
      margin-bottom: 10px;
      break-inside: avoid;
      cursor: pointer;
    }
  }

  &-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 32px;

    &-skills {
      justify-content: unset;
    }
  }

  &__header {
    display: block;
    margin-bottom: 0.2em;

    font-size: 1.1em;
    font-weight: 500;

    &-flex {
      display: flex;
      align-items: center;
    }

    > .chip {
      font-weight: 400;
    }
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__text {
    display: block;
    font-weight: 300;

    &--light {
      display: block;
      font-weight: 300;
      opacity: 0.6;
      word-break: break-all;
    }
  }

  &__header,
  &__subheader,
  &__text,
  &__text--light {
    line-height: 1.5em;
  }
}

.grid-item {
  padding-right: 20px;
}

.squarred-grid-item {
  display: inline-block;
  cursor: pointer;

  border: 1px solid @accent-color;
  border-radius: 4px;

  background-color: @accent-color;
  color: white;

  margin-top: 5px;
  padding: 0.3rem 0.6rem;

  vertical-align: middle;

  transition: all @transition-timeperiod ease-out;

  &:hover {
    background-color: transparent;
    color: @accent-color;
  }
}

.section {
  margin-bottom: 1.2rem;
}

.lang-icon {
  font-size: 3em;

  &:hover {
    color: @accent-color;
  }
}

.hobbies-container {
  margin-top: 30px;
}

.hobbies-content {
  display: flex;
  flex-direction: column;
}

.hobby-item {
  display: grid;
  grid-template-columns: 30px auto;

  color: rgba(255, 255, 255, 0.6);

  margin-right: 25px;
  margin-bottom: 10px;

  transition: @transition-timeperiod;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transition: @transition-timeperiod;
  }

  &__icon {
    font-size: 1.3em;
  }

  &__icon-label {
    top: 2.5px;
    position: relative;
  }
}

.actions-container {
  margin-top: 30px;
}

.subheadline {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;

  display: block;
  margin-bottom: 10px;
}

.chip {
  color: white;
  background-color: @accent-color;
  vertical-align: middle;
  padding: 0 0.6em;
  margin-left: 5px;
  border-radius: 4px;
  font-size: 0.8em;

  &-secondary {
    color: rgba(0, 0, 0, 0.87);
    background-color: #e0e0e0;
  }
}

.un-clickable {
  cursor: default !important;
}

@media (max-width: 960px) {
  .resume {
    flex-direction: column;
  }

  .left-column {
    display: flex;
    justify-content: space-around;
    max-width: unset;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  }

  .headline-photo {
    margin-top: unset;
    flex: 0 0 40%;
    border-radius: 16px;
  }

  .left-column-content {
    flex: 0 0 60%;
  }

  .right-column {
    flex-direction: column;

    column-count: 1;
  }

  .section-content__item-grid {
    flex: 0 0 48%;
  }
}

@media (max-width: 600px) {
  .left-column {
    min-height: 100vh;
    flex-direction: column;
  }

  .headline-photo {
    margin: 0 auto;
    padding: 0 0 15px 0;
  }

  .headline-txt {
    text-align: center;
  }

  .section-content__item-grid {
    flex: 0 0 100%;
  }
}
</style>
