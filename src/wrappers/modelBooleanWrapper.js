import { computed } from '@vue/composition-api'
export function modelBooleanWrapper(props, emit, name = 'value') { 
  
  return computed({ 
    get: () =>  {
      return props[name];
    },
    set: (value) => { 
        emit(`${name}`, value);
    }
  })
}
