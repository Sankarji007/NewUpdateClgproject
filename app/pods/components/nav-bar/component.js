import Component from '@ember/component';
import Ember from 'ember'
export default Component.extend({
    init() {
        this._super(...arguments);
        this.callmethod=this.callit||null;
        this.email=this.email||"";
        this.callsave=this.callsave||"";
        this.searchTerm="chicken"
        this.suggesionlist;
    },
    actions:
    {
        callthesearch()
        {
            let searchtext=document.getElementById('searchtext').value;
            this.callmethod(searchtext);
        },
        print()
        {
            
            let searchtext=document.getElementById('searchtext').value;
            Ember.$.ajax({
               url:`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`,
               type:'GET',
                dataType:'json', 
            }).then((response)=>{
               this.send('store',response);
             });
        },
        setterm(value)
        {
            this.set('searchTerm',value)
        },
        store(value)
        {
            this.set('suggesionlist',value);
            console.log(this.suggesionlist);
        }
    }
});
