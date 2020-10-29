import { VNode, VNodeArrayChildren } from 'vue';

export function filterSlots(defaultSlots: VNodeArrayChildren, cb: (n: VNode) => boolean): VNodeArrayChildren {
    const result: VNode[] = []
    defaultSlots.forEach((n: any) => {
      if (Array.isArray(n.children)) { n.children = filterSlots(n.children, cb); result.push(n) }
      if (cb(n)) { result.push(n) }
    })
    return result
}