import TheImage from "~/components/TheImage.vue";

const {
  container: TheImageContainer,
  proxy: TheImageProxy
} = createFloating(TheImage)

export {
  TheImageContainer, TheImageProxy
}