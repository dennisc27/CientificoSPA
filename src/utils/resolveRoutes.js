const resolveRoutes = (route) => {
    if(route.length <= 3){ //Porque es o / o un id menor a 1000
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    else return `/${route}`; //Ejemplo /About
};

export default resolveRoutes;