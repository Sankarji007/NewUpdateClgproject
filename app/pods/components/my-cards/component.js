import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.result=this.result||"";
        this.callcard=this.viewcards||"";
        this.calories;
        this.send('modcalories',this.result.recipe.calories);
    },
    actions: {
        redirectToDetails(url)
        {
            const myArray = url.split("#");
            const query=myArray[1];
            this.callcard(query);
        },
        modcalories(amt)
        {
            
            this.calories=amt.toFixed(2);
        }

    }
});
