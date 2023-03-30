const template = document.querySelector('#calendar'); // l'hem creat al índex.html <template>...
/*
 * Això és un estandard i no depen de react
 * Hem de crear un template que l'hem creat al index.html
 * Si li posem <slot></slot> pintarà el children
 * Si posem un name al slot hem de posar un id al div pex. Posant name podem tenir més d'un slot
 *      Al template
 *           <slot name='outlet'></slot>
 *      I al pintar el component
 *          <cxb-calendar>
 *              <div slot='outlet'>prova</div>
 *          </cxb-calendar>
 */
class Calendar extends HTMLElement{
    #reaccionar='' // variable privada
    #shadow=null;
    #counter=0;
    #counterDiv=null;
    #button=null;
    constructor(){
        super()
        this.#shadow=this.attachShadow({mode:'open'}) // posem open pq així podem accedir al shadow_root. amb closed
        this.handlerClick=this.handlerClick.bind(this) // si no fem això perdem l'ambit. El this el té el button
        console.log('constructor')
    }
    handlerClick(e){
        e.stopPropagation();
        this.#counter++;
        this.#counterDiv.textContent=this.#counter;
        //e.target
        // si no posem event al botó qualsevol click a la pàgina llança l'event        
    }
    connectedCallback(){ // salta quan s'afegiex al dom pex amb document.body.appendChild(calendar)
        console.log('connectedCallback') 
        //this.appendChild(template.content.cloneNode(true)) //afegim el template. El problema és que no permet bindejar dades (és a dir substituir {param} del template)
        this.#shadow.appendChild(template.content.cloneNode(true)) //afegim el template. El problema és que no permet bindejar dades (és a dir substituir {param} del template)
        this.#counterDiv=this.#shadow.querySelector('.counter');
        this.#button=this.#shadow.querySelector('button');
        this.#button.addEventListener('click',this.handlerClick)
        //this.addEventListener('click',this.#handlerClick)
    }
    disconnectedCallback(){ // salta quan s'elimina del dom -> removeChild
        console.log('disconnectedCallback')
        //this.removeEventListener('click',this.#handlerClick);
        this.#button.removeEventListener('click',this.handlerClick);
    }
    get reaccionar(){
        return this.#reaccionar;
    }
    set reaccionar(value){ // si fem des de la consola $0.reaccionar ='Hola' es fa el set ($0 hem de seleccionar el component)
        if(this.#reaccionar!==value){
            console.log('He reaccionat')
            this.#reaccionar=value
            console.log(value)
        }
    }

}
customElements.define('cxb-calendar',Calendar) // Nom del component. Ha de tenir sempre -