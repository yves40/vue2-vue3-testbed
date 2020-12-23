import { computed } from '@vue/composition-api'
export function modelNumberWrapper(props, emit, name = 'value') { 
  
  return computed({ 
    get: () =>  {
      return parseInt(props[name]) ;
    },
    set: (value) => { 
      console.log(`******** ${value}`);
      if(isNaN(value)) {
        emit(`${name}`, 0); 
      }
      else {
        console.log(`Emit ${name} for ${value}`)
        emit(`${name}`, parseInt(value));
      }
    }
  })
}
