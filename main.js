let app = new Vue({
    el   : `#myApp`,
    data : {
        valoreMessaggio     : "",
        aggiungiMessaggio   : "",
        contatore           : 0,
        contatore2          : 0,
        eliminato           : "null",
        listaContatti       : [
            {
                name: 'Michele',
                avatar: 'img/_1.jpg',
                visible: true,
                messages:   [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                            ]
            },
            {
                name: 'Fabio',
                avatar: 'img/_2.jpg',
                visible: true,
                messages:   [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'                        
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'                        
                        }
                            ]
            },
            {
                name: 'Samuele',
                avatar: 'img/_3.jpg',
                visible: true,
                messages:   [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'                        
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                            ]
            },
            {
                name: 'Luisa',
                avatar: 'img/_4.jpg',
                visible: true,
                messages:   [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'                        
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'                        
                        }
                            ]
            }
        ]     
    },
    methods:{
        inviato_ricevuto : function(indice){
            
            if( this.listaContatti[indice].messages[indice].status == `sent`){
                return `messaggio_inviato`
            } else {
                return `messaggio_ricevuto`
            }
            
        },
            // contatto_chat : function(indice){
            //     this.contatore = indice
            // Non va piu, funziona nel modo con hmtl
//su html @click="contatore = indice"
        // },    
        
        invioMessaggio: function(indiceContatore){
            this.listaContatti[this.contatore].messages.push({
                date: dayjs().format("DD/MM/YYYY HH.mm.ss"),
                text: this.aggiungiMessaggio,
                status: `sent`
            }),
            this.aggiungiMessaggio = "";
            let indiceContatto = this.contatore
            setTimeout(() =>   
                this.listaContatti[indiceContatto].messages.push({
                date: dayjs().format("DD/MM/YYYY HH.mm.ss"),
                text: `Ok!`,
                status: `received`
                }), 2000)
        },

        cercaUtente : function(){
            this.listaContatti.forEach(elemento => {
               elemento.visible = elemento.name.toLowerCase().includes(this.valoreMessaggio.toLowerCase())
               console.log(elemento.name)

            }
        )},

        menuTendina : function(indice) {
            this.eliminato = indice
            if(this.eliminato == indice){
                return `active`
            } else
            return `none`
        },
        
        // menuTendinaClose : function(indice) {
        //     if(this.eliminato = `active`){
        //         this.eliminato = `none  `
        //     }
        // },

    }   
})