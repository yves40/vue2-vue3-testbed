import { computed } from '@vue/composition-api'
export function modelNumberWrapper(props, emit, name = 'value') { 
  
  return computed({ 
    get: () =>  {
      return parseInt(props[name]) ;
    },
    set: (value) => { 
      if(isNaN(value)) {
        emit(`${name}`, 0); 
      }
      else {
        emit(`${name}`, parseInt(value));
      }
    }
  })
}
