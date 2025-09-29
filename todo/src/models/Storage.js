const Storage = (() => {
    const save = (projectList) => {
        localStorage.setItem(
            "todoApp",
            JSON.stringify(projectList)
        );
    }

    const load = () => {
        const data = localStorage.getItem("todoApp");
        return data ? JSON.parse(data) : null;
    }
    
    return {save, load};
})();

export default Storage;