const configureStore = ()=> {
    return {
        roles:["tester","developer"],
        defectTypes: ["UI","Boundary Related","Error Handling","Control flow",],
        priorityLevels:["Low","Medium","High"],
        defectStatus:["Open","Closed"],
        /*{defectType:'UI',description:'Text missing for header',priority:'Medium',status:'open'}*/
        openDefects:[],
        closedDefects:[]
    }
};

export default configureStore;