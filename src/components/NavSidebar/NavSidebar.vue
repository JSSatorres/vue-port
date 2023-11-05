<script setup>
// import data from '../../assets/sections.json'

// const emit = defineEmits(['linkClicked'])

// const navigation = useNavigation()

// const profileData = computed(() => {
//   return data.getProfile()
// })

// const _getNavItemClassList = (section) => {
//   let classList = 'nav-item'
//   if (navigation.isSectionActive(section['id'])) {
//     classList += ' nav-item-selected'
//   }

//   return classList
// }

// const onLinkClicked = (section) => {
//   emit('linkClicked', section['id'])
// }
</script>

<template>
  <nav class="nav-sidebar">
    <!-- Main Content -->
    <div class="nav-sidebar-content" v-if="profileData">
      <!-- Profile Card -->
      <!-- <NavProfileCard :profile-data="profileData" /> -->

      <!-- Nav Link List -->
      <ul class="nav-links">
        <!-- Nav Link -->
        <!-- <li v-for="section in data.sections"> -->

        <!-- <li v-for="section in data.getSections()" :class="_getNavItemClassList(section)"> -->
        <button class="nav-link">
          <!-- <i :class="section['faIcon']" />  -->
          <!-- {{ section['id'] }} -->
          pepe
        </button>
        <!-- </li> -->
      </ul>
    </div>

    <!-- Footer -->
    <div class="nav-sidebar-footer" v-if="profileData">
      <!-- Language Picker -->
      <!-- <LanguagePicker /> -->

      <!-- Credits -->
      <div class="nav-sidebar-footer-credits text-2 mt-3 mb-3">
        <span v-html="profileData['locales']['credits']" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/_theming.scss';

.nav-sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: $nav-sidebar-column-size;
  overflow: auto;

  background-color: $nav-background-color;
}

.nav-sidebar-content {
  width: 100%;
  margin: auto 0;
}

ul.nav-links {
  position: relative;
  padding: 0;
  list-style: none;

  @media screen and (min-height: 780px) {
    padding-top: 1rem;
  }
}

li.nav-item {
  display: inline-flex;
  justify-content: left;
  align-items: center;

  padding: 0 2.7rem 0 2.7rem;
  width: 100%;
  min-height: clamp(2rem, calc(100vh / 40) * 2, 2.7rem);

  .nav-link {
    cursor: pointer;
    font-size: clamp(0.9rem, calc(100vh / 50), 1rem);

    font-family: $headings-font-family;
    text-transform: uppercase;
    text-align: center;

    color: $light-1;

    i {
      min-width: 35px;
      color: $nav-item-grayed-out-color;
      transition: color 0.2s;
    }

    &:hover {
      color: $nav-item-lighten-color;
      i {
        color: $nav-item-lighten-strong-color;
      }
    }
  }

  &.nav-item-selected {
    .nav-link {
      color: $nav-item-lighten-color;
      i {
        color: $nav-item-lighten-strong-color;
      }
    }
  }
}

.nav-sidebar-footer {
  text-align: center;
  padding: 1rem;
  color: $white;

  .nav-sidebar-footer-credits {
    font-family: $custom-subheadings-font-family;
    color: $light-4;
  }
}
</style>
