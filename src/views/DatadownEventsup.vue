<template> 
  <label> 
    <div class="moduletitle">{{Version}}</div>
    <input type="text" v-model="message" > 
    <input type="checkbox" v-model="isDraft"> Draft 
  </label>
</template>

<script>

import { computed } from '@vue/composition-api'
import { useModelWrapper } from "../wrappers/useModelWrapper";
import { useModelTimeout } from "../wrappers/useModelTimeout";

export default { 
  props: { 
    modelValue: String, 
    payload: {
      draft: Boolean,
      minvalue: 0,
      maxvalue: 1000
    },
  },
  setup(props, { emit }) { 
    const Version = "DatadownEventup 1.14: Aug 17 2020"
    const message = useModelWrapper(props, emit, 'modelValue');
    const isDraft =  useModelWrapper(props, emit, 'payload');
    useModelTimeout(message);   // Clear the field if modified and then untouched for 5 sec
    return { 
      Version,
      message,
      isDraft,
    }
  }
}

</script>
