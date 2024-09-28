import type { Component, StyleValue } from "vue"
import { h } from 'vue'

export const createFloating = <T extends Component>(component: T) => {
  // global info
  const metadata = reactive<any>({
    attrs: {
      w40: '',
      h40: '',
      'rounded-full': ''
    }
  })

  const proxyEl = ref<HTMLElement | null>()

  const container = defineComponent({
    setup() {
      let rect = reactive(useElementBounding(proxyEl));

      const style = computed((): StyleValue => {
        const fixed: StyleValue = {
          transition: 'all .75s ease-in-out',
          position: "fixed",
        }
        if (!rect || !proxyEl.value) {
          return {
            ...fixed,
            opacity: 0,
            pointerEvents: 'none',
            transform: 'translateY(-100px)',
            left: '0px'
          }
        }
        return {
          ...fixed,
          top: `${rect.top ?? 0}px`,
          left: `${rect.left ?? 0}px`,
        };
      });

      return () => h('div', {
        style: style.value
      }, [
        h(component, metadata.attrs)
      ])
    }
  })

  const proxy = defineComponent({
    setup(props, ctx) {
      const attrs = useAttrs();
      metadata.attrs = attrs;

      const el = useTemplateRef<HTMLElement>('el')

      onMounted(() => {
        proxyEl.value = el.value
      })

      onBeforeUnmount(() => {
        if (proxyEl.value === el.value)
          proxyEl.value = undefined
      })

      return () => h('div', {
        ref: 'el'
      }, [
        ctx.slots.default ? h(ctx.slots.default) : null
      ])
    }
  })

  return {
    container,
    proxy
  }
}