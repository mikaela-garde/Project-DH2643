class UserModel {
    /** Model containing information for the logged in user from firebase*/
    id: string;
    subscribers: Array<any>; // måste sätta TYPE på det här nån gång
    token: string;
    displayName: string;
    constructor(id = "", token = "", displayName = "", img = null){
        this.id = id;
        this.subscribers = [];
        this.token = token;
        this.displayName = displayName;
    }

    getDisplayName() {
        return this.displayName;
    }
    
    addObserver(obs){
        this.subscribers= this.subscribers.concat(obs);   
        return ()=> this.removeObserver(obs);                                                   
    }

    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=> o!== obs); 
    }

    notifyObservers(){
        this.subscribers.forEach(callback=> {
            try{callback()}catch(err){
                  console.error("Error ", err, callback);}
        })
    }

    setToken(token) {
        this.token = token;
        this.notifyObservers();
    }

    setDisplayName(displayName) {
        this.displayName = displayName;
        this.notifyObservers();
    }

    setUid(id) {
        this.id = id;
        this.notifyObservers();
    
}
}
export default UserModel;