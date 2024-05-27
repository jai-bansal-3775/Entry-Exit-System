import conf from "../conf/conf";

export class HomeService {

    async getStudents() {
        const response = await fetch(`${conf.serverApi}/${conf.version}/home/get-students`,{
            method:'GET',
        });
        const data = (await response.json()).message;
        return data;
    }

    async getOutStudents() {
        const response = await fetch(`${conf.serverApi}/${conf.version}/home/get-out-students`);
        const data = (await response.json()).message;
        return data;
    }

    async getEntriesByDate(date) {
        const response = await fetch(`${conf.serverApi}/${conf.version}/home/get-entries-by-date`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date })
        });

        const data = (await response.json()).message;
        return data;
    }
}

const homeService = new HomeService();
export default homeService;