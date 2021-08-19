<template>
  <div class="resume">
    <div class="left-column">
      <div class="headline-photo">
        <img
          src="https://cdn.jsdelivr.net/gh/lolipopj/resume/public/photo.jpg"
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
              <!-- <br/> -->
              <!-- <span> {{ person.contact.city }} </span> -->
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
          <a :href="contactLinks.email">
            <div class="block-marged txt-full-white">
              <i class="fas fa-envelope contact-icon"></i>
              {{ person.contact.email }}
            </div>
          </a>

          <div class="block-marged txt-full-white">
            <i class="fas fa-phone-alt contact-icon"></i>
            {{ person.contact.phone }}
          </div>

          <a v-if="person.contact.website" :href="person.contact.website">
            <div class="block-marged txt-full-white">
              <i class="fas fa-blog contact-icon"></i>
              {{ person.contact.website }}
            </div>
          </a>

          <a
            v-if="person.contact.github"
            :href="contactLinks.github"
            class="external-link"
          >
            <i class="fab fa-github contact-icon"></i>
            <span class="block-marged txt-full-white">
              {{ person.contact.github }}
            </span>
          </a>

          <a
            v-if="person.contact.codefights"
            :href="contactLinks.codefights"
            class="external-link"
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

            <span class="block-marged txt-full-white">
              {{ person.contact.codefights }}
            </span>
          </a>

          <a
            v-if="person.contact.medium"
            :href="contactLinks.medium"
            class="external-link"
          >
            <i class="fab fa-medium contact-icon"></i>
            <span class="block-marged txt-full-white">
              {{ person.contact.medium }}
            </span>
          </a>
          <div class="hobbies-container">
            <!-- <span class="subheadline">Hobbies</span> -->
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
          </div>
        </div>
      </div>
    </div>

    <div class="right-column">
      <div class="right-column-section">
        <div class="experience-section section">
          <div class="icon">
            <i class="fas fa-briefcase font-awesome-icons"></i>
            <span class="section-headline">{{ lang.experience }}</span>
          </div>

          <div class="section-content">
            <a
              v-for="(experience, index) in person.experience"
              :key="index"
              class="section-content__item"
              :href="experience.website"
            >
              <div>
                <span
                  class="
                    section-content__header
                    .section-content__header-inline
                  "
                >
                  {{ experience.position }}
                  <span
                    v-if="experience.internship"
                    class="chip chip-secondary"
                  >
                    {{ lang.internship }}
                  </span>
                </span>
              </div>
              <span class="section-content__subheader">
                {{ experience.company }}</span
              >
              <div class="section-content__text">
                {{ experience.timeperiod }}
              </div>
              <span class="section-content__text--light">
                {{ experience.description }}</span
              >
            </a>
          </div>
        </div>

        <div class="education-section section">
          <div class="icon">
            <i class="fas fa-graduation-cap font-awesome-icons"></i>
            <span class="section-headline">{{ lang.education }}</span>
          </div>

          <div class="section-content">
            <a
              v-for="(education, index) in person.education"
              :key="index"
              class="section-content__item"
              :href="education.website"
            >
              <span class="section-content__header">
                {{ education.school }}
              </span>
              <span class="section-content__subheader">{{
                education.degree
              }}</span>
              <span class="section-content__text">
                {{ education.timeperiod }}
              </span>
              <span class="section-content__text--light">
                {{ education.description }}
              </span>
            </a>
          </div>
        </div>

        <div v-if="person.projects" class="projects-section section">
          <div class="icon">
            <i class="fas fa-code font-awesome-icons"></i>
            <span class="section-headline"> {{ lang.projects }} </span>
          </div>

          <div class="section-content">
            <a
              v-for="(project, index) in person.projects"
              :key="index"
              class="section-content__item"
              :href="project.url"
            >
              <div>
                <span
                  class="section-content__header section-content__header-inline"
                >
                  {{ project.name }}
                </span>
                <span v-if="project.platform" class="chip">{{
                  project.platform
                }}</span>
                <span v-if="project.dev" class="chip chip-secondary">
                  {{ lang.underDev }}
                </span>
              </div>
              <span class="section-content__text">
                {{ project.description }}
              </span>
              <span class="section-content__text--light">
                {{ project.url }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="right-column-section">
        <div v-if="person.contributions" class="contributions-section section">
          <div class="icon">
            <i class="fa fa-heart font-awesome-icons"></i>
            <span class="section-headline"> {{ lang.contributions }} </span>
          </div>

          <div class="section-content-grid">
            <a
              v-for="(contribution, index) in person.contributions"
              :key="index"
              :href="contribution.url"
              class="section-content__item"
            >
              <div>
                <span
                  class="section-content__header section-content__header-inline"
                >
                  {{ contribution.name }}
                </span>
                <span v-if="contribution.platform" class="chip">{{
                  contribution.platform
                }}</span>
              </div>
              <span class="section-content__text">
                {{ contribution.description }}
              </span>
              <span
                class="section-content__text--light"
                style="word-break: break-all"
              >
                {{ contribution.url }}
              </span>
            </a>
          </div>
        </div>
        <div v-if="person.awards" class="contributions-section section">
          <div class="icon">
            <i class="fa fa-trophy font-awesome-icons"></i>
            <span class="section-headline"> {{ lang.awards }} </span>
          </div>

          <div class="section-content-grid">
            <a
              v-for="(award, index) in person.awards"
              :key="index"
              class="section-content__item-grid"
              :href="award.url"
            >
              <span class="section-content__header"> {{ award.name }} </span>
              <span class="section-content__text">
                {{ award.description }}
              </span>
            </a>
          </div>
        </div>
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
              :href="skill.url"
            >
              <span class="squarred-grid-item">
                <i v-if="skill.iconClass" :class="'mdi ' + skill.iconClass"></i>
                {{ skill.name }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { personCN } from "@/resume/data-cn.yml";
import { personEN } from "@/resume/data-en.yml";
import { terms } from "@/terms";
const yaml = require("js-yaml");

export default {
  data() {
    return {
      person: undefined,
      terms: terms,
    };
  },
  computed: {
    lang() {
      const defaultLang = this.terms.cn;
      const useLang = this.terms[this.person.lang];

      // overwrite non-set fields with default lang
      Object.keys(defaultLang)
        .filter((k) => !useLang[k])
        .forEach((k) => {
          console.log(k);
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
  created() {
    const language = this.$route.params.language;
    switch (language) {
      case "cn":
        this.person = yaml.load(personCN);
        break;
      case "en":
        this.person = yaml.load(personEN);
        break;
      default:
        this.person = yaml.load(personCN);
    }
  },
};
</script>

<style lang="less" scoped>
@accent-color: #0a7074;

.resume {
  display: flex;
  position: relative;
  min-height: 100vh;
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
  display: flex;
  justify-content: space-around;
  padding: 30px;

  &-section {
    flex: 0 0 48%;
  }
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
  color: @accent-color;
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

  top: 2px;
  position: relative;
}

.contact-icon-svg {
  margin-top: -2.5px;
  margin-right: 10px;

  transform: scale(1);

  top: 5px;
  position: relative;
}

.contact-icon-svg path {
  fill: white;
}

.external-link {
  display: block;
  margin-bottom: 5px;
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
  margin-bottom: 30px;
}

.headline-txt {
  color: white;
}

.headline-name {
  font-size: 1.3em;
  font-weight: bold;
}

.txt-full-white {
  color: white;
}

.uppercase {
  text-transform: uppercase;
}

.section-headline {
  color: @accent-color;
  display: inline-block;
  font-size: 1.2em;
  margin-left: 5px;
}

.section-content {
  margin-top: 10px;
  padding-left: 32px;
}

.section-content__item {
  display: block;
  margin-bottom: 10px;

  &-grid {
    flex: 0 0 48%;
    margin-bottom: 10px;
  }
}

.section-content-grid {
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

.grid-item {
  padding-right: 20px;
}

.section-content__header {
  display: block;

  font-size: 1.1em;
  font-weight: 500;

  &-inline {
    display: inline-block;
  }
}

.squarred-grid-item {
  display: inline-block;

  border: 1px solid @accent-color;
  border-radius: 4px;

  background-color: @accent-color;
  color: white;

  margin-top: 5px;
  padding: 5px;

  vertical-align: middle;

  transition: all 0.3s ease-out;

  &:hover {
    cursor: default;
    background-color: transparent;
    color: @accent-color;
  }
}

.section-content__subheader {
  display: block;
  font-weight: 400;
}

.section-content__text {
  display: block;
  font-weight: 300;

  &--light {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 300;
  }
}

.section-content__subheader,
.section-content__text--light,
.section-content__header {
  line-height: 1.5em;
}

.section {
  margin-top: 10px;
  margin-bottom: 10px;
}

.lang-icon {
  color: rgba(0, 0, 0, 0.7);
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

  transition: 0.5s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transition: 0.5s;
  }

  &__icon {
    font-size: 1.3em;
  }

  &__icon-label {
    top: 2.5px;
    position: relative;
  }
}

.subheadline {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;

  display: block;
  margin-bottom: 10px;
}

.chip {
  display: inline-block;
  color: white;
  background-color: @accent-color;
  overflow: hidden;
  vertical-align: middle;
  padding: 5px;
  margin-left: 5px;
  border-radius: 4px;
  font-size: 0.8em;

  &-secondary {
    color: rgba(0, 0, 0, 0.87);
    background-color: #e0e0e0;
  }
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
  }
}

@media (max-width: 600px) {
  .section-content__item-grid {
    flex: 0 0 100%;
  }
}

@media (max-width: 440px) {
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
}
</style>
