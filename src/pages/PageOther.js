import ArrayComponent from '../Components/ArrayComponent';
import Father from '../Components/Father';
import IfComponent from '../Components/IfComponent';
import ReducerComponent from '../Components/ReducerComponent';
import CalendarComponent from '../Components/CalendarComponent';
import SectionComponent from '../Components/SectionComponent';
import CounterComponent from '../Components/CounterComponent';
import ArrayStateComponent from '../Components/ArrayStateComponent';
import CounterObjectComponent from '../Components/CounterObjectComponent';
import ReducerArrayComponent from '../Components/ReducerArrayComponent';
import { ThemeContext,themes } from '../Components/ThemeContext';
import { Toolbar } from '../Components/ThemeButtonComponent';
import ReactEffectComponent from '../Components/ReactEffectComponent';
import CarroPage from '../carro/CarroPage';
import ReactEffect2Component from '../Components/ReactEffect2Component';
import Component1 from '../Components/hoc/Component1';
import Component2 from '../Components/hoc/Component2';
import Formulari from '../Components/form/Formulari';
import FormulariWrapper from '../Components/form/FormulariWrapper';
import FetchComponent from '../fetchdata/FetchComponent';
/*import Father from './Father';
import IfComponent from './IfComponent';
import ArrayComponent from './ArrayComponent';

import SectionComponent from './Components/SectionComponent';
import CounterComponent from './Components/CounterComponent';
import ArrayStateComponent from './Components/ArrayStateComponent';
import CounterObjectComponent from './Components/CounterObjectComponent';
import ReducerComponent from './Components/ReducerComponent';
import ReducerArrayComponent from './Components/ReducerArrayComponent';
import { ThemeContext,themes } from './Components/ThemeContext';
import { Toolbar } from './Components/ThemeButtonComponent';
import ReactEffectComponent from './Components/ReactEffectComponent';
import CarroPage from './carro/CarroPage';
import ReactEffect2Component from './Components/ReactEffect2Component';
import Component1 from './Components/hoc/Component1';
import Component2 from './Components/hoc/Component2';
import Formulari from './Components/form/Formulari';
import FormulariWrapper from './Components/form/FormulariWrapper';
import FetchComponent from './fetchdata/FetchComponent';*/

export default function PageOther(){
  return(
    <>
      <div>Other
      <Father/>
      <IfComponent/>
      <ArrayComponent/>
      <SectionComponent>Calendari</SectionComponent>
      <CalendarComponent/>
      <CounterComponent/>
      <ArrayStateComponent/>
      <CounterObjectComponent count="25"/>
      <ReducerComponent increment="10"/>
      <ReducerArrayComponent/>
    

      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
      <ReactEffectComponent/>

      <SectionComponent>Carro de compra</SectionComponent>
      <CarroPage/>

      <SectionComponent>Custom hoc</SectionComponent>
      <ReactEffect2Component/>

      <SectionComponent>HOC - Component d'alt ordre</SectionComponent>
      <Component1 name="Joan"/>
      <Component2 name="Espuña"/>
   
      <SectionComponent>Formularis</SectionComponent>
      <Formulari/>
      <FormulariWrapper/>

      <FetchComponent/>
      </div>
    </>
  )
    /*return(
        <>
        <div>Page Other</div>
        <Father/>
      <IfComponent/>
      <ArrayComponent/>
      <SectionComponent>Calendari</SectionComponent>
      <CalendarComponent/>
      <CounterComponent/>
      <ArrayStateComponent/>
      <CounterObjectComponent count="25"/>
      <ReducerComponent increment="10"/>
      <ReducerArrayComponent/>
    

      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
      <ReactEffectComponent/>

      <SectionComponent>Carro de compra</SectionComponent>
      <CarroPage/>

      <SectionComponent>Custom hoc</SectionComponent>
      <ReactEffect2Component/>

      <SectionComponent>HOC - Component d'alt ordre</SectionComponent>
      <Component1 name="Joan"/>
      <Component2 name="Espuña"/>
   
      <SectionComponent>Formularis</SectionComponent>
      <Formulari/>
      <FormulariWrapper/>

      <FetchComponent/>
      </>
    )*/
}