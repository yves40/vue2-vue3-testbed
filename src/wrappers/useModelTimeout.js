
import { watch } from "@vue/composition-api";

export function useModelTimeout(message) {
  const Version = "useModelTimeout 1.06: Aug 18 2020";
  let tt;
  const reset = () => {
    if (tt) {
      clearTimeout(tt)
    }
    tt = setTimeout(() => {
      message.value = '';
    }, 5000);
  }
  // Field modified ? Check value and reset if 5 seconds elapsed
  watch(message, (message, prevmessage) => { 
    message.value !== '' && reset();
  })
}
